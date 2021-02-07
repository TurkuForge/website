<script lang="ts">
    import NavBar from './components/NavBar.svelte'
    import NavItem from './components/NavItem.svelte'
    const items = [
        'Dashboard',
        'Projects',
        'Team'
    ]
    let activeNavItem = 0;
</script>
<NavBar logo="Turku Forge">
    <div slot="items">
        {#each items as item, i}
            <NavItem href="#" active={ i === activeNavItem } on:itemClick={() => activeNavItem = i }>{item}</NavItem>
        {/each}
    </div>
</NavBar>
