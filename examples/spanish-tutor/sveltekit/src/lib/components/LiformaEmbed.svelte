<script lang="ts">
	import { onMount } from 'svelte';
	import { loadLiformaSdk } from '$lib/load-liforma-sdk';

	type Props = {
		experienceId: string;
		onready?: () => void;
		onclose?: () => void;
		onerror?: (message: string) => void;
	};

	let { experienceId, onready, onclose, onerror }: Props = $props();

	let host: HTMLDivElement | undefined = $state();
	let loading = $state(true);
	let loadError = $state<string | null>(null);

	function handleClose(): void {
		onclose?.();
	}

	onMount(() => {
		loadLiformaSdk()
			.then(() => {
				loading = false;
				onready?.();
			})
			.catch((err: unknown) => {
				const message = err instanceof Error ? err.message : 'Failed to load Liforma SDK';
				loadError = message;
				onerror?.(message);
			});
	});

	$effect(() => {
		if (!host || loading || loadError) return;

		const element = host.querySelector('liforma-experience');
		if (!(element instanceof HTMLElement)) return;

		element.addEventListener('close', handleClose);
		return () => element.removeEventListener('close', handleClose);
	});
</script>

<div class="embed-shell">
	{#if loading}
		<div class="state-panel" role="status">
			<div class="spinner" aria-hidden="true"></div>
			<p>Loading Liforma avatar…</p>
		</div>
	{:else if loadError}
		<div class="state-panel error" role="alert">
			<p><strong>Could not load avatar</strong></p>
			<p>{loadError}</p>
			<p class="hint">Check your network connection and that the Liforma CDN is reachable.</p>
		</div>
	{:else}
		<div class="embed-host" bind:this={host}>
			<liforma-experience experience-id={experienceId}></liforma-experience>
		</div>
	{/if}
</div>

<style>
	.embed-shell {
		min-height: 420px;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--bg-elevated);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
	}

	.embed-host {
		min-height: 420px;
	}

	.embed-host :global(liforma-experience) {
		display: block;
		width: 100%;
		min-height: 420px;
	}

	.state-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		min-height: 420px;
		padding: 2rem;
		text-align: center;
		color: var(--text-muted);
	}

	.state-panel.error {
		color: var(--error);
		background: var(--error-bg);
	}

	.state-panel .hint {
		font-size: 0.875rem;
		color: var(--text-muted);
		max-width: 28rem;
	}

	.spinner {
		width: 2rem;
		height: 2rem;
		border: 2px solid var(--border);
		border-top-color: var(--accent);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
