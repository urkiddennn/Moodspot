<script>
    import Login from '../components/login.svelte';
    import Sectionwrapper from "./sectionwrapper.svelte";
    import ContentLogo from "../components/contentLogo.svelte";
    import Profile from "../components/profile.svelte";
    let layout = 'layout1';

    function changeLayout(){
        layout = layout === 'ContentLogo' ? 'Profile' : 'ContentLogo';
    }
    let authenticate = false;
  </script>
<Sectionwrapper>
    {#if authenticate}
        {#if layout == "ContentLogo"}
        <Profile {changeLayout}/>
        {:else}
        <ContentLogo/>
        {/if}
    {:else}
    <Login />
    {/if}
    
</Sectionwrapper>