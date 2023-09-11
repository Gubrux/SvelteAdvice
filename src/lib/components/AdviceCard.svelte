<script lang="ts">
    export let adviceId: number;
    export let advice: string;
    export let updateAdvice: Function;
</script>
<div class="flex items-center justify-center text-center my-52">
    <div class="border-white shadow-lg rounded-lg w-72 h-48 bg-global-neutralgrayish pt-5">
        <p class="text-global-primaryneon pb-5 text-xs">ADVICE #{adviceId}</p>
        <p class="text-global-primarylight" id="advice-text">{advice}</p>
        <img class="hidden" src="/images/pattern-divider-desktop.svg" alt="divider">
        <img class="px-4 pt-3" src="/images/pattern-divider-mobile.svg" alt="divider">
        <div class="flex items-center justify-center pt-3">
        <button class="bg-global-primaryneon p-3 rounded-full" id="advice-button" on:click={updateAdvice()}>
            <img class="w-4 h-4" src="/images/icon-dice.svg" alt="dice_icon">
        </button>
        </div>
    </div>
</div>

