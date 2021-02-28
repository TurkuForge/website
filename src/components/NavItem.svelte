<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let href: string;
    export let active: boolean;

    let inactiveClasses = 'text-brand-light text-opacity-50 hover:text-white px-3 py-2 text-sm font-medium'
    let activeClasses = 'text-brand-light px-3 py-2 text-sm font-bold';

    const dispatch = createEventDispatcher();
    function itemClicked( event: MouseEvent ) {
        dispatch( 'itemClick', event );
    }
</script>
<a href={href} on:click={itemClicked} class="{active ? activeClasses : inactiveClasses}">
    <slot/>
</a>
