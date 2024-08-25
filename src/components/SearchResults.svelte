<!-- SearchResults.svelte -->
<script>
  export let results = [];
</script>

{#if results.length > 0}
  <ul>
    {#each results as result}
      <li class="mb-4 p-1">
        <a href={result.link} target="_blank" class="text-blue-500 font-semibold">{result.title}</a>
        <p class="text-gray-600">{result.snippet}</p>
      </li>
    {/each}
  </ul>

{/if}
