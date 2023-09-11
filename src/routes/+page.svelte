<script lang="ts">
	import AdviceCard from "$lib/components/AdviceCard.svelte";
    import type { Advice } from '$lib/types/Advice';
    import { onMount } from "svelte";


    let item: Advice;

    async function getAdvice() {
        console.log("Fetching advice...");
        const result = await fetch("/api/advice");
        const resultJson = (await result.json()) as { advice: Advice };
        console.log(resultJson);
        item = resultJson.advice;
        return item;
    }

    onMount(async () => {
        item = await getAdvice();
        }
    )

    $: advice = item;
</script>

{ #if item }
    <AdviceCard adviceId={advice.id} advice={advice.advice} updateAdvice={() => getAdvice()} />
{ :else }
    <p>Loading...</p>
{ /if}
