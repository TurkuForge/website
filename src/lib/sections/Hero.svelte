<script lang="ts">
  import { html as HeroText } from '$lib/content/HERO_TEXT.md';
  import Button from '$lib/components/Button.svelte';
</script>

<div class="text-center w-full self-center z-10">
  <h1 class="font-logo text-brand-blue-light text-5xl sm:text-6xl">Turku</h1>
  <h2 class="font-logo text-white text-7xl sm:text-9xl">Forge</h2>
  <p class="px-4 prose sm:text-2xl text-brand-light prose m-auto text-white mt-4 sm:mt-9 sm:px-0">
    {@html HeroText}
  </p>
  <Button link="#about" class="mt-14 text-2xl">Read About Us</Button>
</div>
<div class="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
  <div class="grid-container" />
  <div class="absolute top-0 left-0 right-0 bottom-0 bg-brand-blue-dark bg-opacity-80" />
</div>
