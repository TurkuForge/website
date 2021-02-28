<script lang="ts" xmlns="http://www.w3.org/1999/html">
    let clazz: String;
    export { clazz as class };
    let open = false;
</script>

<nav class={`${clazz || ''}`}>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bg-brand-blue-dark sm:bg-transparent">
        <div class="relative flex items-center justify-between h-16">
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="block sm:ml-6">
                    <div class="flex space-x-4">
                        <slot name="items" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
