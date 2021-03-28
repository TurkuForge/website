<script lang="ts">
  export let link = '';
  let classList = '';
  export { classList as class };

  let tailwindClasses = [
    ...classList.split(' '),
    'inline-flex',
    'items-center',
    'px-8',
    'py-3',
    'border',
    'border-transparent',
    'text-base',
    'font-medium',
    'shadow-sm',
    'text-white',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-indigo-500'
  ].join(' ');
</script>

{#if link.length}
  <a href={link} class={tailwindClasses}>
    <slot />
  </a>
{:else}
  <button class={tailwindClasses}>
    <slot />
  </button>
{/if}
