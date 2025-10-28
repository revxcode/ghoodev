<script lang="ts">
	import { cn } from '@/lib/utils';
	import '../app.css';
	import { onMount } from 'svelte';
	import { sections } from '@/lib/stores/scroll';
	import { get } from 'svelte/store';
	import { Menu, X } from '@lucide/svelte';

	let { children } = $props();
	let scrollY: number = $state(0);
	let onScroll: boolean = $state(false);
	let isOpen: boolean = $state(false);

	const scrollToSection = (name: string) => {
		const currentSections = get(sections);
		currentSections[name]?.scrollIntoView({ behavior: 'smooth' });
		isOpen = false;
	};

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			onScroll = scrollY > 0;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class={cn(
		'fixed z-20 flex w-full items-center justify-between px-6 py-4 transition-all',
		onScroll && 'bg-white/60 shadow-sm backdrop-blur-sm'
	)}
>
	<!-- Logo -->
	<button
		type="button"
		onclick={() => scrollToSection('heroSection')}
		class="font-poppins text-2xl uppercase"
	>
		TE
	</button>

	<!-- Tombol Burger (Mobile) -->
	<button class="block md:hidden" onclick={() => (isOpen = !isOpen)}>
		{#if isOpen}
			<X class="h-6 w-6" />
		{:else}
			<Menu class="h-6 w-6" />
		{/if}
	</button>

	<!-- Navigation (Desktop) -->
	<nav class="hidden gap-12 text-sm md:flex">
		{#each [['aboutSection', 'About'], ['skillsSection', 'Skills'], ['projectsSection', 'Projects'], ['contactSection', 'Contact']] as [key, label]}
			<button
				type="button"
				onclick={() => scrollToSection(key)}
				class="text-neutral-600 transition-colors hover:text-neutral-800"
			>
				{label}
			</button>
		{/each}
	</nav>

	<!-- Navigation (Mobile Dropdown) -->
	{#if isOpen}
		<div
			class="animate-fade-in absolute top-full left-0 flex w-full flex-col items-center gap-4 bg-white py-6 shadow-md md:hidden"
		>
			{#each [['aboutSection', 'About'], ['skillsSection', 'Skills'], ['projectsSection', 'Projects'], ['contactSection', 'Contact']] as [key, label]}
				<button
					type="button"
					onclick={() => scrollToSection(key)}
					class="text-lg font-medium text-neutral-700 transition-colors hover:text-black"
				>
					{label}
				</button>
			{/each}
		</div>
	{/if}
</header>

<main class="min-h-screen w-full">
	{@render children()}
</main>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in {
		animation: fade-in 0.25s ease-out;
	}
</style>
