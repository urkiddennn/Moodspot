<script>
    import axios from 'axios';
    import SearchResults from '../components/SearchResults.svelte';
    import  Header from '../components/header.svelte';
  
    let results;
    let query = '';
    let searchResults = [];
    let trial = 5;
    let searched = false;
    let animatedLoading = false;
    let textMessage = "Out of Trials! Subscribe to gain full access"

    const apiKey = 'AIzaSyAuW6k5Q6K_k8m6FIU4bQ0sGkQQ3P2OtBo';
    const searchEngineId = '6380f194475ea4481';
  

    const touristKeywords = [
      'tourist', 'attraction', 'destination', 'travel', 'sightseeing', 'vacation', 
    'holiday', 'resort', 'park', 'beach', 'museum', 'monument', 'landmark', 'historic', 
    'hidden gem', 'tourist spot', 'adventure', 'calm', 'quiet', 'peaceful', 'happy', 
    'exciting', 'romantic', 'serene', 'relaxing', 'luxury', 'wild', 'exotic'
    ];
  
    const isTouristDestination = (result) => {
      const text = `${result.title} ${result.snippet}`.toLowerCase();
      return touristKeywords.some(keyword => text.includes(keyword));
    };
  
    const search = async () => {
      if (query.trim()) {
        try {
          const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
            params: {
              key: apiKey,
              cx: searchEngineId,
              q: query,
            },
          });
  
          
          searchResults = (response.data.items || []).filter(isTouristDestination);
          animatedLoading = true;
          setTimeout(() => { results = searchResults;  animatedLoading = false;}, 1000);
          
          console.log(searchResults);  
          reduceTrial()
          searched = true;
          
         
        } catch (error) {
          console.error('Error searching:', error);
        }
      }
    };
    function reduceTrial(){
        trial = trial - 1;
        console.log(trial);
       
    }
    
  </script>
  <style>
    .container {
      max-width: 800px;
    }
    .search-results {
      max-height: 400px;
      overflow-y: auto;
    }
  </style>
  <Header {trial} />
  
  <div class="w-full h-full flex justify-center items-center flex-col">
    <div class="container flex flex-col items-center mt-20">
      <h1 class="text-9x1 text-black" style="font-size: 5rem;">Mood<span class="font-semibold text-blue-500">Spot</span></h1>
      <p class="mt-20 mb-5 w-full text-center">
        Welcome to MoodSpot – your ultimate travel companion designed to find the perfect destination based on your current mood.
      </p>
      <div class="w-full h-16 flex justify-between items-center">
        <input
          type="text"
          placeholder="Input Your Mood..."
          class="h-full w-full mr-2 outline-none border-solid border-2 border-black p-2"
          bind:value={query}
        />
        <button class="w-32 h-full bg-orange-500 p-2 text-black" on:click={search}>{#if animatedLoading}
          <i class="animate-spin fa-solid fa-circle-notch w-12 text-white"></i>
          {:else}
          Search
          {/if}
        </button>
      </div>
      <div class="w-full h-8 flex gap-x-3.5">
        <h2 class="text-sm cursor-pointer mt-2 font-semibold search-result w-24">Search Results</h2>
        <h2 class="text-sm cursor-pointer mt-2 font-semibold search-result w-14">Nearest</h2>

      </div>
    </div>
    {#if trial<1}
      
      <div class="container search-results h-72 flex justify-center items-center flex-col">
        <h1>{textMessage}</h1>
      <img src="https://img.icons8.com/?size=100&id=lCWQaaEYxYv6&format=png&color=000000" alt="" class="opacity-50">
      
    </div>
    {:else}
      {#if searched}
      <div class="container search-results ooverflow-y-auto h-72">
        <SearchResults {results} />
      </div>
      {:else}
      <div class="container search-results h-72 flex justify-center items-center flex-col">
          <h1>No search yet</h1>
        <img src="https://img.icons8.com/?size=100&id=lCWQaaEYxYv6&format=png&color=000000" alt="" class="opacity-50">
        
      </div>
      {/if}
    {/if}
    
    
    
  </div>
  
  