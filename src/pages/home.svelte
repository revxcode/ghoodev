<script>
	import { swapAnimations } from '@/lib/animations/animation';
	import { onMount } from 'svelte';

	onMount(() => {
		swapAnimations('.swap-right', { x: -40, y: 0, opacity: 0 }, { x: 0, y: 0, opacity: 1 });
		swapAnimations('.swap-bottom', { x: 0, y: -40, opacity: 0 }, { x: 0, y: 0, opacity: 1 });
		swapAnimations('.swap-up', { x: 0, y: 40, opacity: 0 }, { x: 0, y: 0, opacity: 1 });
	});
</script>

<svelte:head>
	<title>Portfolio | GhooDev</title>
	<meta
		name="description"
		content="Portfolio of GhooDev, a Web Developer specializing in Javascript and TailwindCSS."
	/>
	<meta property="og:title" content="GhooDev Portfolio" />
	<meta property="og:description" content="Showcasing my best web development projects." />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="mx-auto max-w-4xl px-4">
	<h1 class="swap-bottom mt-8 mb-4 py-4 text-5xl font-semibold text-white">
		Hello, I'm
		<span class="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent"
			>GhooDev</span
		>
		<span class="animate-waving inline-block">👋</span>
	</h1>
	<p class="swap-right mb-8 max-w-2xl text-lg text-slate-400">
		A Fullstack Web Developer with a passion for creating beautiful and functional web applications.
		I specialize in
		<a
			href="https://react.dev"
			target="_blank"
			rel="noopener noreferrer"
			class="text-[#61DAFB] hover:underline">React</a
		>,
		<a
			href="https://nodejs.org/en"
			target="_blank"
			rel="noopener noreferrer"
			class="text-[#5FA04E] hover:underline">Node.js</a
		>
		and
		<a
			href="https://tailwindcss.com"
			target="_blank"
			rel="noopener noreferrer"
			class="text-[#06B6D4] hover:underline">Tailwind CSS</a
		>. I love to learn new technologies and improve my skills. Let's build something amazing
		together!
	</p>
	<div class="swap-right flex items-center gap-0.5">
		<button
			type="button"
			class="h-12 rounded-full rounded-r-none border-2 border-cyan-400 px-4 py-2 font-semibold transition-colors duration-200"
			>Continue</button
		>
		<a
			href="https://github.com/revxcode"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="GitHub"
			aria-describedby="github"
			class="h-12 rounded-full rounded-l-none border-2 border-indigo-400 px-4 py-2 font-semibold transition-colors duration-200"
		>
			<svg
				role="img"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				fill="white"
				class="h-8 w-8"
			>
				<title>GitHub</title><path
					d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
				/></svg
			>
		</a>
	</div>
	<div class="mt-10 flex w-full justify-center gap-2 md:justify-start">
		<div
			class="swap-up flex aspect-square w-full flex-col items-center justify-center rounded-lg p-4 text-white md:w-32"
		>
			<h2
				class="bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				03+
			</h2>
			<span class="text-center text-sm text-zinc-400">Years Experience</span>
		</div>
		<div
			class="swap-up flex aspect-square w-full flex-col items-center justify-center rounded-lg p-4 text-white md:w-32"
		>
			<h2
				class="bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				07+
			</h2>
			<span class="text-center text-sm text-zinc-400">Completed Project</span>
		</div>
		<div
			class="swap-up flex aspect-square w-full flex-col items-center justify-center rounded-lg p-4 text-white md:w-32"
		>
			<h2
				class="bg-gradient-to-br from-white to-indigo-400 bg-clip-text text-4xl font-bold text-transparent"
			>
				03+
			</h2>
			<span class="text-center text-sm text-zinc-400">Digital Certificate</span>
		</div>
	</div>
	<div class="flex">showcasing project</div>
</section>
