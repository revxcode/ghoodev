<script lang="js">
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { getGithubRepos } from '@/lib/services/github_repos';
	import MainLayout from '@/layouts/main-layout.svelte';
	import { isMobile } from '@/lib/hooks/useMediaQuery';
	import { swapAnimations } from '@/lib/animations/animation';
	import gsap from 'gsap';

	const username = import.meta.env.VITE_GITHUB_USERNAME;
	const token = import.meta.env.VITE_GITHUB_TOKEN;
	const dateNow = new Date();
	const identityColorLanguages = {
		JavaScript: '#F7DF1E',
		TypeScript: '#3178C6',
		PHP: '#4F5D95',
		CSS: '#563D7C',
		HTML: '#E44D26',
		Python: '#3572A5',
		CPlusPlus: '#f34b7d',
		Vue: '#42b883',
		Go: '#00ADD8',
		Svelte: '#FF3E00'
	};
	let repos = $state([]);

	const fetchRepos = async () => {
		try {
			const response = await getGithubRepos(username, token);
			response.forEach((item) => {
				if (item.topics[0] !== 'config') {
					repos.push(item);
				}
			});
			repos = sortRepos(repos, 'default');
			setTimeout(() => {
				swapAnimations('.swap-up', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
			}, 0);
			const thumbnails = await fetchThumbnails(repos, 1200, 1200);
			repos.forEach((repo, index) => {
				repo.thumbnail = thumbnails[index];
			});
		} catch (error) {
			console.error('Error fetching repositories:', error);
		}
	};

	const sortRepos = (repos, sortBy) => {
		switch (sortBy) {
			case 'name':
				return repos.sort((a, b) => a.name.localeCompare(b.name));
			case 'size':
				return repos.sort((a, b) => b.size - a.size);
			case 'language':
				return repos.sort((a, b) => a.language.localeCompare(b.language));
			default:
				return repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
		}
	};

	const fetchThumbnails = async (repos, width = 1920, crop = 1200) => {
		const thumbnailPromises = repos.map(async (repo) => {
			if (repo.homepage !== '' && repo.homepage !== null) {
				const response = await fetch(
					`https://image.thum.io/get/width/${width}/crop/${crop}/${repo.homepage}`
				);
				return response.url;
			} else {
				const response = await fetch(
					`https://image.thum.io/get/width/${width}/crop/${crop}/${repo.html_url}`
				);
				return response.url;
			}
		});
		return Promise.all(thumbnailPromises);
	};

	onMount(() => {
		fetchRepos();
		swapAnimations('.swap-button', { y: -40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
	});

	// custom alert using gsap
	const showAlert = () => {
		const alert = document.getElementById('alert');
		alert.style.display = 'flex';
		gsap.fromTo(
			alert,
			{ opacity: 0, x: 300 },
			{
				opacity: 1,
				x: 0,
				duration: 0.3,
				ease: 'power2.out',
				onComplete: () => {
					setTimeout(() => {
						gsap.to(alert, { opacity: 0, x: 300, duration: 0.3 });
					}, 4000);
				}
			}
		);
	};
</script>

<svelte:head>
	<title>Projects | GhooDev</title>
	<meta
		name="description"
		content="Portfolio of GhooDev, a Web Developer specializing in Javascript and TailwindCSS."
	/>
	<meta property="og:title" content="GhooDev Portfolio" />
	<meta property="og:description" content="Showcasing my best web development projects." />
	<meta property="og:type" content="website" />
</svelte:head>

<!-- custom alert -->
<div
	class="fixed right-0 bottom-0 z-50 m-4 flex max-w-xl min-w-1/4 items-center justify-center rounded-md border border-white/20 bg-zinc-950/50 text-white opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300"
	id="alert"
>
	<div class="flex w-full items-center justify-between p-4">
		<span class="text-sm">Copy Repo</span>
		<button
			type="button"
			class="text-white"
			aria-label="Close alert"
			onclick={() => (document.getElementById('alert').style.display = 'none')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-x-icon lucide-x"><path d="m18 6-12 12" /><path d="m6 6 12 12" /></svg
			>
		</button>
	</div>
</div>

<section id="project" class="flex flex-col items-center px-4 text-white">
	<div class="w-full max-w-4xl space-y-4">
		<div class="flex w-full flex-col items-center justify-between md:flex-row">
			<h2
				class="swap-button inline-block border-b-2 border-cyan-500 pb-2 text-center text-4xl font-bold text-white"
			>
				The Projects
			</h2>
			<div class="flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-arrow-up-down-icon lucide-arrow-up-down"
					><path d="m21 16-4 4-4-4" /><path d="M17 20V4" /><path d="m3 8 4-4 4 4" /><path
						d="M7 4v16"
					/></svg
				>
				<select
					name="sortBy"
					id="sortBy"
					class="rounded-lg bg-transparent p-2 text-white outline-none"
					value="sortBy"
					onchange={(e) => {
						const sortBy = e.target.value;
						repos = sortRepos(repos, sortBy);
					}}
				>
					<option value="sortBy" class="bg-zinc-950" disabled>sort by</option>
					<option value="latest" class="bg-zinc-950">latest</option>
					<option value="name" class="bg-zinc-950">name</option>
					<option value="size" class="bg-zinc-950">size</option>
					<option value="language" class="bg-zinc-950">language</option>
				</select>
			</div>
		</div>
		{#if repos.length > 0}
			<div class="grid grid-cols-1 space-y-2 py-4">
				{#each repos as repo}
					<div
						class={'swap-up relative flex min-h-52 flex-col items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-xl md:aspect-video '}
					>
						<div class="absolute z-0 h-full w-full scale-150 opacity-20 blur-sm">
							<img src={repo.thumbnail} alt="Blured Background" />
						</div>
						<div class="flex h-full w-full flex-col p-2">
							<div class="z-10 flex h-full w-full text-center text-white">
								<div class="flex h-full w-full flex-col">
									<img
										src={repo.thumbnail}
										alt="Thumbnail"
										class="aspect-video rounded-lg object-cover object-top"
									/>
									<div class="space-y-2 p-2 text-start text-white">
										<div class="flex items-center gap-2">
											<span class="relative flex size-3">
												<span
													class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
												></span>
												<span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
											</span>
											<h2 class="text-xl font-bold">{repo.name}</h2>
										</div>
										<p class="line-clamp-3 text-sm text-white/50">
											{repo.description}
										</p>
									</div>
								</div>
								<div class="hidden h-full w-full max-w-1/3 flex-col space-y-2 px-4 md:flex">
									<div class="mt-2 flex w-full items-center gap-2">
										<img
											src={repo.owner.avatar_url}
											alt={'Avatar' + repo.node_id}
											class="aspect-square h-8 w-8"
										/>
										<span class="font-semibold uppercase">{repo.owner.login}</span>
									</div>
									<div class="relative flex w-full justify-between">
										<span class="">Clone : {repo.name}</span>
										<button
											type="button"
											class="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/50 duration-100 hover:bg-zinc-900/70"
											aria-label="Copy link to clipboard"
											onclick={() => {
												const copy = navigator.clipboard.writeText(repo.html_url);
												if (copy) {
													showAlert();
												}
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-copy-icon lucide-copy p-2"
												><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path
													d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
												/></svg
											>
										</button>
									</div>
									<div class="flex w-full items-center justify-between gap-2">
										<span class="text-sm text-white/50">Size: {repo.size}</span>
										<!-- download -->
										<button
											type="button"
											class="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/50 duration-100 hover:bg-zinc-900/70"
											aria-label="Download"
											onclick={() => {
												window.open(repo.html_url + '/archive/refs/heads/main.zip', '_blank');
											}}
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-download-icon lucide-download p-2"
												><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path
													d="M7 10l5 5 5-5"
												/><path d="M12 3v12" /></svg
											>
										</button>
									</div>
								</div>
							</div>
							<div
								class="z-0 mb-4 flex h-12 w-full flex-col gap-4 px-2 text-sm text-nowrap text-white/50 md:mb-0 md:flex-row md:items-center"
							>
								<div class="text-xs">
									Created {repo.created_at.split('T')[0]}
									<span class="text-xs text-white/30">
										{'( Updated'}
										{#if dateNow.getFullYear() - new Date(repo.updated_at).getFullYear() > 0}
											{dateNow.getFullYear() - new Date(repo.updated_at).getFullYear()} years ago
										{:else if dateNow.getMonth() - new Date(repo.updated_at).getMonth() > 0}
											{dateNow.getMonth() - new Date(repo.updated_at).getMonth()} months ago
										{:else if dateNow.getDate() - new Date(repo.updated_at).getDate() > 0}
											{dateNow.getDate() - new Date(repo.updated_at).getDate()} days ago
										{:else if dateNow.getHours() - new Date(repo.updated_at).getHours() > 0}
											{dateNow.getHours() - new Date(repo.updated_at).getHours()} hours ago
										{:else if dateNow.getMinutes() - new Date(repo.updated_at).getMinutes() > 0}
											{dateNow.getMinutes() - new Date(repo.updated_at).getMinutes()} minutes ago
										{:else}
											now
										{/if}
										{')'}
									</span>
								</div>
								<div class="flex w-full items-center justify-between gap-2 md:justify-end">
									<div
										class="rounded-full border bg-zinc-900/50 px-4 py-0.5"
										style="color: {identityColorLanguages[repo.language]};
										border-color: {identityColorLanguages[repo.language]}"
									>
										{#if repo.language == null}
											No language
										{:else}
											{repo.language}
										{/if}
									</div>
									<button
										class="group flex rounded-full border border-zinc-600 bg-zinc-900/50 px-4 py-0.5 duration-100 hover:pr-8"
										onclick={() => {
											window.open(repo.homepage ? repo.homepage : repo.html_url, '_blank');
										}}
									>
										{#if repo.homepage == '' || repo.homepage == null}
											Repository
										{:else}
											Live Demo
										{/if}
										<div class="relative flex py-1">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="12"
												height="12"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												class="lucide lucide-arrow-right-icon lucide-arrow-right absolute -left-1 opacity-0 duration-100 group-hover:left-2 group-hover:opacity-100"
												><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg
											>
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
