<script lang="ts">
	import { cn } from '@/lib/utils';
	import '../app.css';
	import { onMount } from 'svelte';
	import { sections } from '@/lib/stores/scroll';
	import { get } from 'svelte/store';

	let { children } = $props();
	let scrollY: number = $state(0);
	let onScroll: boolean = $state(false);

	const scrollToSection = (name: string) => {
		const currentSections = get(sections);
		currentSections[name]?.scrollIntoView({ behavior: 'smooth' });
	};

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
			if (scrollY > 0) {
				onScroll = true;
			} else {
				onScroll = false;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class={cn(
		'fixed z-20 flex w-full items-center justify-between px-12 py-4 transition-all',
		onScroll && 'bg-white/60 shadow-sm backdrop-blur-sm'
	)}
>
	<button
		type="button"
		onclick={() => scrollToSection('heroSection')}
		class="font-poppins text-2xl uppercase">TE</button
	>
	<nav class="flex gap-12 text-sm">
		<button
			type="button"
			onclick={() => scrollToSection('aboutSection')}
			class="text-neutral-600 hover:text-neutral-800">About</button
		>
		<button
			type="button"
			onclick={() => scrollToSection('skillsSection')}
			class="text-neutral-600 hover:text-neutral-800">Skills</button
		>
		<button
			type="button"
			onclick={() => scrollToSection('projectsSection')}
			class="text-neutral-600 hover:text-neutral-800">Projects</button
		>
		<button
			type="button"
			onclick={() => scrollToSection('contactSection')}
			class="text-neutral-600 hover:text-neutral-800">Contact</button
		>
	</nav>
</header>
<main class="min-h-screen w-full">
	{@render children()}
</main>
