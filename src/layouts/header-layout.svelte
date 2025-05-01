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

<header class="flex items-center justify-between p-4 bg-transparent text-white">
	<div class="flex items-center justify-between md:justify-around w-full z-50">
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
				class="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
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
				class={'min-w-20 flex-col absolute right-0 top-12 py-8 px-4 space-y-8 rounded-md bg-zinc-900 md:flex-row md:bg-transparent md:static md:space-y-0 md:space-x-6 md:p-0 md:rounded-none transition-all duration-300 ease-in-out origin-top-right shadow-md ' +
					(isMobileMenuOpen
						? 'scale-100 opacity-100'
						: 'scale-0 opacity-0 md:flex md:scale-100 md:opacity-100')}
			>
				<li
					class={'relative ' +
						(currentPath === '/' ? 'text-cyan-500' : 'text-gray-200 hover:text-gray-400')}
				>
					<a href="/" class="flex flex-col items-center text-sm gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-width="1.5"
								d="M15 18H9m12.636-5.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"
							/></svg
						>
						Home
					</a>
				</li>
				<li
					class={'relative ' +
						(currentPath === '/about' ? 'text-cyan-500' : 'text-gray-200 hover:text-gray-400')}
				>
					<a href="/about" class="flex flex-col items-center text-sm gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><g fill="none" stroke="currentColor" stroke-width="1.5"
								><circle cx="12" cy="9" r="3" /><path
									stroke-linecap="round"
									d="M17.97 20c-.16-2.892-1.045-5-5.97-5s-5.81 2.108-5.97 5"
								/><path
									stroke-linecap="round"
									d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
								/></g
							></svg
						>
						About
					</a>
				</li>
				<li
					class={'relative ' +
						(currentPath === '/projects' ? 'text-cyan-500' : 'text-gray-200 hover:text-gray-400')}
				>
					<a href="/projects" class="flex flex-col items-center text-sm gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><g fill="none" stroke="currentColor" stroke-width="1.5"
								><path
									stroke-linecap="round"
									d="M4.979 6.315C2.993 7.109 2 7.506 2 8s.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4c-.954 0-1.764.237-3 .712"
								/><path
									d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10"
								/><path
									stroke-linecap="round"
									d="M19.021 17.685C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20c.954 0 1.764-.237 3-.712"
								/></g
							></svg
						>
						Projects
					</a>
				</li>
				<li
					class={'relative ' +
						(currentPath === '/contact' ? 'text-cyan-500' : 'text-gray-100 hover:text-gray-400')}
				>
					<a href="/contact" class="flex flex-col items-center text-sm gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
							><g fill="none" stroke="currentColor" stroke-width="1.5"
								><path
									stroke-linecap="round"
									d="M21 17v-5c0-1.84-.552-3.551-1.5-4.977M3 17v-5a9 9 0 0 1 13-8.064M22 15.5v2m-20-2v2"
								/><path
									d="M8 13.845c0-.765 0-1.147-.175-1.413a1 1 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048c-1.232.121-1.848.182-2.29.514a2.1 2.1 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406q.16.277.392.492c.413.38 1.014.5 2.218.736c.847.167 1.271.251 1.584.075a1 1 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01zm8 0c0-.765 0-1.147.175-1.413c.088-.133.204-.244.34-.322c.271-.156.637-.12 1.368-.048c1.232.121 1.848.182 2.29.514c.223.169.41.383.55.63c.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406q-.16.277-.392.492c-.413.38-1.014.5-2.218.736c-.847.167-1.271.251-1.584.075a1 1 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01z"
								/></g
							></svg
						>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
<div
	class={'absolute top-0 w-full min-h-screen z-40 bg-black transition-opacity duration-300 ease-in-out ' +
		(isMobileMenuOpen ? 'opacity-80' : 'opacity-0 hidden')}
></div>
