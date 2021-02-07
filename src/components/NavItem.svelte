<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let href: string;
    export let active;

    let inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
    let activeClasses = 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium';

    const dispatch = createEventDispatcher();
    function itemClicked( event ) {
        dispatch( 'itemClick', event );
    }
</script>
<a href={href} on:click={itemClicked} class="{active ? activeClasses : inactiveClasses}">
    <slot/>
</a>
