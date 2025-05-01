<script>
	export let show = false;
</script>

{#if show}
	<div class="overlay">
		<div class="neon-loader"></div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999;
		backdrop-filter: blur(10px);
	}

	.neon-loader {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		border: 4px solid transparent;
		border-top: 4px solid cyan;
		box-shadow: 0 0 10px cyan;
		animation:
			spin 1s linear infinite,
			pulse 1.5s infinite alternate;
	}

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes pulse {
		from {
			box-shadow: 0 0 10px cyan;
		}
		to {
			box-shadow: 0 0 20px cyan;
		}
	}
</style>
