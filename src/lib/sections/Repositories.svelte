<script lang="ts">
  import { onMount } from 'svelte';

  interface GithubResponse {
    full_name: string;
    html_url: string;
    created_at: string;
    description: string;
  }

  const githubRepos = 'https://api.github.com/orgs/TurkuForge/repos';
  let data: Array<GithubResponse> = [];

  let locale = 'en-US';
  function prettyDate(date: Date | string) {
    if (typeof date === 'string') {
      date = new Date(date);
    }
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(locale, options);
  }

  onMount(() => {
    locale = navigator.language || 'en-US';

    fetch(githubRepos)
      .then(async (response) => {
        data = await response.json();
      })
      .catch((err) => console.error(err));
  });
</script>

<div class="max-w-7xl overflow-hidden m-auto py-10 sm:px-6 lg:px-8">
  <h1 class="text-2xl bold pb-4 mx-2 sm:mx-0">Our Active Projects</h1>
  <ul class="space-y-2 sm:space-y-4">
    {#each data as repository}
      <li class="bg-white px-4 mx-2 py-6 sm:mx-0 shadow rounded-lg sm:px-6">
        <a
          href={repository.html_url}
          target="_blank"
          rel="noreferrer"
          alt={`link to ${repository.full_name} repository`}
        >
          <div class="sm:flex sm:justify-between sm:items-baseline">
            <h2 class="text-base font-medium bold">
              <span class="text-gray-900">{repository.full_name}</span>
            </h2>
            <p class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3">
              <time datetime={repository.created_at}>{prettyDate(repository.created_at)}</time>
            </p>
          </div>
          <div class="mt-4 space-y-6 text-sm text-gray-800">
            <p>{repository.description || ''}</p>
          </div>
        </a>
      </li>
    {/each}
  </ul>
</div>
