<script lang="ts">
    interface GithubResponse {
        full_name: string;
        html_url: string;
        created_at: string;
        description: string;
    }

    const githubRepos = 'https://api.github.com/orgs/TurkuForge/repos';
    let data: Array<GithubResponse> = [];

    let locale = navigator.language || 'en-US';
    function prettyDate( date: Date | string ) {
        if ( typeof date === "string" ) {
            date = new Date( date );
        }
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString( locale, options )
    }

    fetch(githubRepos)
        .then(async (response) => { data = await response.json(); console.log(data); })
        .catch((err) => console.error(err))
</script>
<div class="sticky top-0 left-0 h-16 bg-brand-blue-dark z-10"></div>
<div class="max-w-7xl overflow-hidden m-auto">
    <ul class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8">
        <h1 class="text-2xl bold pb-4">Our Active Projects</h1>
        {#each data as repository}
            <li class="bg-white px-4 py-6 shadow sm:rounded-lg sm:px-6">
                <a href={repository.html_url} target="_blank" alt="link to repository">
                    <div class="sm:flex sm:justify-between sm:items-baseline">
                        <h3 class="text-base font-medium bold">
                            <span class="text-gray-900">{repository.full_name}</span>
                        </h3>
                        <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
                            <time datetime={repository.created_at}>{prettyDate(repository.created_at)}</time>
                        </p>
                    </div>
                    <div class="mt-4 space-y-6 text-sm text-gray-800">
                        <p>{repository.description ?? ''}</p>
                    </div>
                </a>
            </li>
        {/each}
    </ul>
</div>
