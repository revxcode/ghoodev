<script lang="js">
	import FooterLayout from './footer-layout.svelte';
	import HeaderLayout from './header-layout.svelte';
	let { children } = $props();
</script>

<HeaderLayout />
<main class="flex flex-col h-screen bg-zinc-950">
	<div class="container mx-auto px-4">
		{@render children()}
	</div>
</main>
<FooterLayout />
