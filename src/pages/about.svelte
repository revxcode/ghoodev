<script lang="js">
	// @ts-nocheck

	import formal from '@/assets/formal.png';
	import { onDestroy, onMount } from 'svelte';
	import { cards } from '@/lib/data/cards.js';
	import { swapAnimations } from '@/lib/animations/animation';
	import { avatarAnimation } from '@/lib/animations/aboutAnimation';
	import gsap from 'gsap';

	let aboutAnimation;
	let avAnimation;

	onMount(() => {
		if (aboutAnimation) {
			swapAnimations('.swap-right', { x: -40, opacity: 0 }, { x: 0, opacity: 1 });
			swapAnimations('.swap-left', { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
			swapAnimations('.swap-bottom', { y: -40, opacity: 0 }, { y: 20, opacity: 1 });

			avAnimation = avatarAnimation();
		}
	});

	onDestroy(() => {
		if (avAnimation) {
			avAnimation.kill();
		}
	});
</script>

<svelte:head>
	<title>About | GhooDev</title>
	<meta
		name="description"
		content="Portfolio of GhooDev, a Web Developer specializing in Javascript and TailwindCSS."
	/>
	<meta property="og:title" content="GhooDev Portfolio" />
	<meta property="og:description" content="Showcasing my best web development projects." />
	<meta property="og:type" content="website" />
</svelte:head>

<section bind:this={aboutAnimation} id="about" class="mx-auto mb-20 max-w-4xl px-4">
	<div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
		<!-- Avatar / Ilustrasi -->
		<div class="avatar-container group flex items-center justify-center">
			<div
				class="masking relative m-5 flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-full"
			>
				<div
					class="bg-circle absolute z-0 h-48 w-48 rounded-full bg-gradient-to-b from-cyan-500 from-10% to-zinc-950 to-70% md:h-64 md:w-64"
				></div>
				<div class="absolute z-10 h-40 w-40 rounded-full bg-zinc-950 md:h-56 md:w-56"></div>
				<img
					src={formal}
					alt="Avatar"
					class="pointer-events-none z-20 h-52 w-52 object-cover md:h-64 md:w-64"
				/>
				<div class="banner-bottom absolute bottom-2 z-20 h-48 w-full bg-zinc-950 opacity-0">
					<div
						class="font-poppins banner-text pt-2 text-center text-2xl font-bold text-white opacity-0"
					>
						TEGUH ERSYARUDIN {'/>'}
					</div>
				</div>
			</div>
		</div>

		<div class="space-y-6">
			<h2
				class="swap-bottom inline-block border-b-2 border-cyan-500 pb-2 text-4xl font-bold text-white"
			>
				About Me
			</h2>
			{#each cards as card}
				<div class="bg-initial group relative p-6">
					<div class="flex gap-2">
						<h3 class="swap-left mb-2 text-xl font-semibold text-white">{card.title}</h3>
					</div>
					<p class="swap-left text-sm leading-relaxed text-gray-400">{card.desc}</p>
					<div class="group relative inline-block w-full">
						<div class="absolute bottom-0 left-0 h-0.5 w-full bg-zinc-900">
							<div
								class="swap-left h-full w-full bg-gradient-to-r from-cyan-500 to-zinc-950 to-60% transition-all duration-700 ease-in-out group-hover:w-full md:w-0"
							></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.masking {
		overflow: hidden;
		clip-path: polygon(50% -1%, 85% 5%, 100% 25%, 100% 100%, 0% 100%, 0% 25%, 15% 5%);
	}
</style>
