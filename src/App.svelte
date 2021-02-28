<script lang="ts">
    import NavBar from './components/NavBar.svelte'
    import NavItem from './components/NavItem.svelte'
    import Hero from './sections/Hero.svelte'
    import About from "./sections/About.svelte";
    import Repositories from "./sections/Repositories.svelte";
    import Team from "./sections/Team.svelte";

    let activeNavItem = 'home';
    const menuItems = {
        HOME: 'home',
        ABOUT: 'about',
        PROJECTS: 'projects',
        TEAM: 'team'
    }
    const currentYear = new Date().getFullYear()
</script>
<NavBar class="fixed z-20 w-full">
    <div slot="items">
        <NavItem href="#hero" active={ activeNavItem === menuItems.HOME }
                 on:itemClick={() => activeNavItem = menuItems.HOME }>Home
        </NavItem>
        <NavItem href="#about" active={ activeNavItem === menuItems.ABOUT }
                 on:itemClick={() => activeNavItem = menuItems.ABOUT }>About
        </NavItem>
        <NavItem href="#projects" active={ activeNavItem === menuItems.PROJECTS }
                 on:itemClick={() => activeNavItem = menuItems.PROJECTS }>Projects
        </NavItem>
        <NavItem href="#team" active={ activeNavItem === menuItems.TEAM }
                 on:itemClick={() => activeNavItem = menuItems.TEAM }>Team
        </NavItem>
    </div>
</NavBar>
<section id="hero" class="h-screen w-full relative flex">
    <Hero/>
</section>
<section id="about" class="min-h-screen w-full relative bg-brand-light">
    <About/>
</section>
<section id="projects" class="w-screen relative">
    <Repositories/>
</section>
<section id="team" class="w-screen relative w-full">
    <Team/>
</section>
<footer class="bg-brand-dark" aria-labelledby="footerHeading">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div class="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
            <div class="flex space-x-6 md:order-2">
                <a href="https://github.com/TurkuForge" target="_blank" class="text-gray-400 hover:text-gray-300">
                    <span class="sr-only">GitHub</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              clip-rule="evenodd"/>
                    </svg>
                </a>
            </div>
            <p class="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                &copy; {currentYear} Turku Forge, Org. All rights reserved.
            </p>
        </div>
    </div>
</footer>

<style global lang="postcss">
    /* only apply purgecss on utilities, per Tailwind docs */
    /* purgecss start ignore */
    @tailwind base;
    @tailwind components;
    /* purgecss end ignore */
    @tailwind utilities;

    body {
        background-color: theme('colors.brand-blue-dark');
    }

    .grid-container {
        transform: perspective(200px) rotateX(40deg) scale(2, 1) translateZ(0);
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .grid-container:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        box-shadow: inset 0 400px 400px 150px #1f2833;
        z-index: 3;
    }

    .grid-container:before,
    .grid-container:after {
        height: 200vh;
    }

    .grid-container:after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        padding: 10px;
        outline: 1px solid transparent;
        transform-origin: bottom center;
        will-change: transform;
        animation-name: tgrid;
        animation-duration: 0.7s;
        animation-delay: 0s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing-function: linear
    }

    .grid-container:after {
        background-position: center bottom;
        background-size: 220px 220px;
        background-image: linear-gradient(to right, theme('colors.brand-blue') 2px, transparent 2px),
        linear-gradient(to bottom, theme('colors.brand-blue') 4px, transparent 4px);
    }

    @keyframes tgrid {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, 220px, 0);
        }
    }
</style>
