<script lang="js">
	// @ts-nocheck

	import HeaderLayout from './header-layout.svelte';
	let { children } = $props();
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import { xlines, ylines } from '@/lib/stores/xylines';
	import { get } from 'svelte/store';

	let x;
	let y;

	onMount(() => {
		const linex = document.querySelector('.linex');
		const liney = document.querySelector('.liney');

		gsap.fromTo(
			linex,
			{
				top: get(xlines) + '%'
			},
			{
				top: (x = Math.floor(Math.min(Math.random() * 100, 80))) + '%',
				duration: 1.5,
				ease: 'power2.inOut'
			}
		);

		gsap.fromTo(
			liney,
			{
				left: get(ylines) + '%'
			},
			{
				left: (y = Math.floor(Math.min(Math.random() * 100, 80))) + '%',
				duration: 1.5,
				ease: 'power2.inOut'
			}
		);

		xlines.set(x);
		ylines.set(y);
	});
</script>

<HeaderLayout />
<div class="liney absolute top-0 left-[20%] z-0 h-full w-px bg-white/10">
	<div class="h-full w-full bg-gradient-to-b via-cyan-500"></div>
</div>
<div
	class="linex absolute top-[80%] left-0 z-0 h-px w-full bg-white/10 bg-gradient-to-r via-cyan-500"
></div>
<div class="grid-effect absolute top-0 right-0 left-0 z-10 min-h-screen"></div>
<main class="relative flex flex-col">
	<div class="z-20 container mx-auto px-4">
		{@render children()}
	</div>
</main>
