<script lang="ts">
    interface GithubTeamResponse {
        name: string;
        avatar_url: string;
        bio: string;
    }

    const githubTeam = 'https://api.github.com/orgs/TurkuForge/public_members';
    let data = [];
    fetch(githubTeam)
        .then(async (response) => {
            const links: { url: string }[] = (await response.json()) || [];
            let requests = [];
            links.forEach((item) => {
                requests.push(fetch(item.url));
            });

            return Promise.all(requests);
        })
        .then(async ([...members]) => {
            members.forEach((member) => {
                member.json()
                    .then((content) => {
                        data = data.concat([content]);
                        console.log(data);
                    });
            });
        })
        .catch((err) => console.error(err))
</script>
<div class="bg-white">
    <div class="sticky top-0 left-0 h-16 bg-brand-blue-dark z-10"></div>
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
            <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
                <p class="text-xl text-gray-500">We are a rag tag group of people, follow us and see what we are doing</p>
            </div>
            <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
                {#each data as member}
                    <li>
                        <div class="space-y-4">
                            <div class="aspect-w-2 aspect-h-2">
                                <img class="object-cover shadow-lg rounded-lg"
                                     src={member.avatar_url}
                                     alt={member.name}>
                            </div>

                            <div class="space-y-2">
                                <div class="text-lg leading-6 font-medium space-y-1">
                                    <p class="text-brand-blue">{member.name}</p>
                                    <h3>{member.bio}</h3>
                                </div>
                                {#if member.twitter_username }
                                    <ul class="flex space-x-5">
                                        <li>
                                            <a href={`https://twitter.com/${member.twitter_username}`} target="_blank" class="text-gray-400 hover:text-gray-500">
                                                <span class="sr-only">Twitter</span>
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                                     aria-hidden="true">
                                                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                {/if}
                            </div>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
