<script>
    /** @type {import('./$types').LayoutData} */
    import "../app.css";
    
    import { onMount } from "svelte";
    import  { mixers} from "$lib/stores/cocktail-store"
    import { io } from "$lib/webSocketConnection";

    const fetchMixers = async () => {
        const mixerResponse = await fetch("/api/mixers", {
      //headers: { token: getToken() },
        });
        const allMixers = await mixerResponse.json();
//console.log(allMixers)
        return { allMixers};
    };


    onMount(async () => {
        let fetchedMixers = await fetchMixers();
        console.log(fetchedMixers.allMixers)
        // @ts-ignore
        mixers.set(fetchedMixers.allMixers)
        io.on("mixer-update", async () => {
            fetchedMixers = await fetchMixers();
            // @ts-ignore
            mixers.set(fetchedMixers.allMixers)
    });
});

</script>
<slot />