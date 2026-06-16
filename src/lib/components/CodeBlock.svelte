<script lang="ts">
	type Props = {
		code: string;
		lang?: string;
		filename?: string;
	};

	let { code, lang = 'text', filename }: Props = $props();

	let copied = $state(false);

	async function copy(): Promise<void> {
		try {
			await navigator.clipboard.writeText(code);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch {
			/* clipboard unavailable */
		}
	}
</script>

<div class="code-block">
	{#if filename}
		<div class="code-header">
			<span class="filename">{filename}</span>
		</div>
	{/if}
	<div class="code-inner">
		<pre><code class="lang-{lang}">{code}</code></pre>
		<button type="button" class="copy-btn" onclick={copy} aria-label="Copy code">
			{copied ? 'Copied' : 'Copy'}
		</button>
	</div>
</div>

<style>
	.code-block {
		margin: 1.25rem 0 1.5rem;
		border-radius: var(--radius);
		overflow: hidden;
		border: 1px solid var(--border-strong);
		background: var(--bg-code);
		box-shadow: var(--shadow-sm);
	}

	.code-header {
		padding: 0.5rem 1rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.03);
	}

	.filename {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: #a1a1aa;
	}

	.code-inner {
		position: relative;
	}

	pre {
		margin: 0;
		padding: 1.1rem 1.15rem;
		overflow-x: auto;
	}

	code {
		font-family: var(--font-mono);
		font-size: 0.8125rem;
		line-height: 1.6;
		color: #e4e4e7;
		background: none;
		border: none;
		padding: 0;
		white-space: pre;
	}

	.copy-btn {
		position: absolute;
		top: 0.65rem;
		right: 0.65rem;
		padding: 0.3rem 0.55rem;
		font-size: 0.75rem;
		font-weight: 500;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: var(--radius-sm);
		background: rgba(255, 255, 255, 0.06);
		color: #d4d4d8;
		cursor: pointer;
	}

	.copy-btn:hover {
		background: rgba(255, 255, 255, 0.1);
	}
</style>
