<script lang="js">
	// @ts-nocheck

	import HeaderLayout from './header-layout.svelte';
	let { children } = $props();
	import gsap from 'gsap';
	import { onDestroy, onMount } from 'svelte';
	import { xlines, ylines } from '@/lib/stores/xylines';
	import { get } from 'svelte/store';
	import { isMobile } from '@/lib/hooks/useMediaQuery';

	let x;
	let y;

	onMount(() => {
		if (!$isMobile) {
			const linex = document.querySelector('.linex');
			const liney = document.querySelector('.liney');

			gsap.fromTo(
				linex,
				{
					top: get(xlines) + '%'
				},
				{
					top: (x = Math.floor(Math.min(Math.random() * 60, 80))) + '%',
					duration: 2,
					ease: 'power2.inOut'
				}
			);

			gsap.fromTo(
				liney,
				{
					left: get(ylines) + '%'
				},
				{
					left: (y = Math.floor(Math.min(Math.random() * 60, 80))) + '%',
					duration: 2,
					ease: 'power2.inOut'
				}
			);

			xlines.set(x);
			ylines.set(y);
		}
	});
</script>

<HeaderLayout />
<div hidden={$isMobile}>
	<div class="liney absolute top-0 left-[20%] z-0 h-full w-px bg-gradient-to-b via-cyan-500"></div>
	<div class="linex absolute top-[80%] left-0 z-0 h-px w-full bg-gradient-to-r via-cyan-500"></div>
</div>
<div class="grid-effect absolute top-0 right-0 left-0 z-10 min-h-screen"></div>
<main class="relative flex flex-col">
	<div class="z-20 container mx-auto">
		{@render children()}
	</div>
</main>
