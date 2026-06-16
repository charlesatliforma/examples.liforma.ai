<script lang="ts">
	type Props = {
		prompt: string;
		label?: string;
	};

	let { prompt, label = 'AI agent prompt' }: Props = $props();

	let copied = $state(false);

	async function copy(): Promise<void> {
		try {
			await navigator.clipboard.writeText(prompt);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch {
			/* clipboard unavailable */
		}
	}
</script>

<section class="prompt-box" aria-label={label}>
	<div class="prompt-header">
		<h3>{label}</h3>
		<button type="button" class="btn secondary" onclick={copy}>
			{copied ? 'Copied' : 'Copy prompt'}
		</button>
	</div>
	<pre>{prompt}</pre>
</section>

<style>
	.prompt-box {
		margin: 2rem 0;
		padding: 1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: var(--bg-subtle);
	}

	.prompt-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		margin-bottom: 0.75rem;
	}

	.prompt-header h3 {
		margin: 0;
		font-size: 1rem;
	}

	pre {
		margin: 0;
		white-space: pre-wrap;
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		line-height: 1.55;
		color: var(--text-muted);
	}
</style>
