<script lang="js">
	// @ts-nocheck

	import PersonalImage from '@/assets/Formal.png';
	import { onDestroy, onMount } from 'svelte';
	import { cards } from '@/lib/data/cards.js';
	import { swapAnimations } from '@/lib/animations';
	import gsap from 'gsap';

	let aboutAnimation;

	let animation;

	onMount(() => {
		if (aboutAnimation) {
			swapAnimations('.swap-right', { x: -40, opacity: 0 }, { x: 0, opacity: 1 });
			swapAnimations('.swap-left', { x: 40, opacity: 0 }, { x: 0, opacity: 1 });
			swapAnimations('.swap-bottom', { y: -40, opacity: 0 }, { y: 20, opacity: 1 });

			animation = gsap.fromTo(
				'.avc',
				{ scale: 0.5 },
				{
					scale: 1,
					duration: 0.5,
					ease: 'power2.out',
					onComplete: () => {
						gsap.to('.bg-circle', {
							scale: 1.5,
							duration: 0.5,
							delay: 1.5,
							onStart: () => {
								const bannerBottom = document.querySelector('.banner-bottom');
								if (bannerBottom) {
									gsap.fromTo(
										bannerBottom,
										{ rotate: 0, x: 0, y: 200, opacity: 0 },
										{
											duration: 0.5,
											rotate: -12,
											x: 15,
											y: -20,
											opacity: 1,
											borderTop: '2px solid oklch(0.715 0.143 215.221)',
											onComplete: () => {
												const bannerText = document.querySelector('.banner-text');
												if (bannerText) {
													gsap.fromTo(
														bannerText,
														{
															x: -40
														},
														{
															x: 0,
															opacity: 1,
															duration: 1,
															ease: 'power2.out'
														}
													);
												}
											}
										}
									);
								}
							}
						});
					}
				}
			);
		}
	});

	onDestroy(() => {
		if (animation) {
			animation.kill();
		}
	});
</script>

<section bind:this={aboutAnimation} id="about" class="mx-auto mb-20 max-w-4xl">
	<div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
		<!-- Avatar / Ilustrasi -->
		<div class="avc group flex items-center justify-center">
			<div
				class="relative m-5 flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-full"
			>
				<div
					class="bg-circle absolute z-0 h-48 w-48 rounded-full bg-gradient-to-b from-cyan-500 to-zinc-950 to-80% md:h-64 md:w-64"
				></div>
				<div class="absolute z-10 h-40 w-40 rounded-full bg-zinc-950 md:h-56 md:w-56"></div>
				<img
					src={PersonalImage}
					alt="Avatar"
					class="pointer-events-none z-20 h-52 w-52 object-cover md:h-64 md:w-64"
				/>
				<div class="banner-bottom absolute bottom-2 z-20 h-28 w-full bg-zinc-950 opacity-0">
					<div
						class="font-poppins banner-text pt-2 text-center text-2xl font-bold text-white opacity-0"
					>
						TEGUH ERSYARUDIN {'/>'}
					</div>
				</div>
			</div>
		</div>

		<!-- Dynamic Bio Cards -->
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
								class="h-full w-0 bg-gradient-to-r from-cyan-500 to-zinc-950 to-60% transition-all duration-700 ease-in-out group-hover:w-full"
							></div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
