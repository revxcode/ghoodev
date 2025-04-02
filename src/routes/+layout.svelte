<script>
	import '../app.css';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import LoadingSpinner from '$lib/LoadingSpinner.svelte';

	let loading = writable(false);

	beforeNavigate(() => {
		loading.set(true);
	});
	afterNavigate(() => {
		loading.set(false);
	});
	onDestroy(() => {
		loading.set(false);
	});

	let { children } = $props();
</script>

<svelte:head>
	<title>Portfolio | GhooDev</title>
	<meta
		name="description"
		content="Portfolio of GhooDev, a Web Developer specializing in SvelteKit and TailwindCSS."
	/>
	<meta property="og:title" content="GhooDev Portfolio" />
	<meta property="og:description" content="Showcasing my best web development projects." />
	<meta property="og:image" content="/thumbnail.png" />
	<meta property="og:type" content="website" />
</svelte:head>

<LoadingSpinner bind:show={$loading} />
{@render children()}
