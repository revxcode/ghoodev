<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;

	let isMobileMenuOpen = false;

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth > 768) {
				isMobileMenuOpen = false;
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
</script>

<header class="flex items-center justify-between p-4 bg-zinc-950 text-white">
	<div class="flex items-center justify-between md:justify-around w-full">
		<div class="flex flex-col items-end">
			<a href="/" class="text-2xl font-bold">GhooDev</a>
			<div class="flex gap-1">
				<div class="w-2 h-2 bg-cyan-500"></div>
				<div class="w-2 h-2 bg-cyan-500"></div>
				<div class="w-2 h-2 bg-cyan-500"></div>
				<div class="w-2 h-2 bg-cyan-500"></div>
				<div class="w-2 h-2 bg-cyan-500"></div>
				<div class="w-12 h-2 bg-gradient-to-r from-cyan-500 to-indigo-500"></div>
			</div>
		</div>
		<nav class="relative ml-6 z-20">
			<button
				type="button"
				on:click={toggleMobileMenu}
				class="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
			>
				<span class="sr-only">Toggle navigation</span>
				{#if !isMobileMenuOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
			<ul
				class={'min-w-40 flex-col absolute right-0 top-12 p-4 space-y-8 rounded-md bg-zinc-900 md:flex-row md:bg-transparent md:static md:space-y-0 md:space-x-6 md:p-0 md:rounded-none transition-all duration-300 ease-in-out origin-top-right shadow-md ' +
					(isMobileMenuOpen
						? 'scale-100 opacity-100'
						: 'scale-0 opacity-0 md:flex md:scale-100 md:opacity-100')}
			>
				<li class={'relative ' + (currentPath === '/' ? 'text-cyan-500' : '')}>
					<a href="/" class="hover:text-gray-400">Home</a>
				</li>
				<li class={'relative ' + (currentPath === '/about' ? 'text-cyan-500' : '')}>
					<a href="/about" class="hover:text-gray-400">About</a>
				</li>
				<li class={'relative ' + (currentPath === '/projects' ? 'text-cyan-500' : '')}>
					<a href="/projects" class="hover:text-gray-400">Projects</a>
				</li>
				<li class={'relative ' + (currentPath === '/contact' ? 'text-cyan-500' : '')}>
					<a href="/contact" class="hover:text-gray-400">Contact</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
<div
	class={'absolute top-0 w-full min-h-screen z-10 bg-black transition-opacity duration-300 ease-in-out ' +
		(isMobileMenuOpen ? 'opacity-80' : 'opacity-0 hidden')}
></div>
