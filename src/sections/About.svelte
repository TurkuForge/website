<script lang="ts">
    import AboutUs from '../content/ABOUT_US.md'
</script>
<div class="sticky top-0 left-0 h-16 bg-brand-blue-dark z-10"></div>
<div class="relative bg-white">
    <div class="lg:absolute lg:inset-0">
        <div class="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img class="h-56 w-full object-cover lg:absolute lg:h-full"
                 src="/img/about-section.jpg"
                 alt="">
        </div>
    </div>
    <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div class="lg:col-start-2 lg:pl-8">
            <div class="text-brand-dark text-base prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                {@html AboutUs.html}
            </div>
        </div>
    </div>
</div>
