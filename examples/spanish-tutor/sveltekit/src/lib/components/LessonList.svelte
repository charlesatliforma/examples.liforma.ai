<script lang="ts">
	import type { Lesson } from '$lib/lessons';

	type Props = {
		lessons: Lesson[];
		selectedId: string | null;
		sessionActive: boolean;
		onselect: (id: string) => void;
	};

	let { lessons, selectedId, sessionActive, onselect }: Props = $props();
</script>

<ul class="lesson-list" role="list">
	{#each lessons as lesson (lesson.id)}
		<li>
			<button
				type="button"
				class="lesson-btn"
				class:selected={selectedId === lesson.id}
				disabled={sessionActive}
				aria-pressed={selectedId === lesson.id}
				onclick={() => onselect(lesson.id)}
			>
				<span class="lesson-top">
					<span class="lesson-title">{lesson.title}</span>
					<span class="lesson-level">{lesson.level}</span>
				</span>
				<span class="lesson-desc">{lesson.description}</span>
			</button>
		</li>
	{/each}
</ul>

{#if sessionActive}
	<p class="lock-note" role="status">
		End the current session before choosing another lesson.
	</p>
{/if}

<style>
	.lesson-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.lesson-btn {
		width: 100%;
		text-align: left;
		padding: 0.85rem 1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		background: var(--bg-elevated);
		cursor: pointer;
		transition:
			border-color 0.15s,
			background 0.15s;
	}

	.lesson-btn:hover:not(:disabled) {
		border-color: var(--border-strong);
		background: var(--bg-subtle);
	}

	.lesson-btn.selected {
		border-color: var(--accent);
		background: var(--accent-subtle);
	}

	.lesson-btn:disabled {
		opacity: 0.55;
		cursor: not-allowed;
	}

	.lesson-top {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 0.25rem;
	}

	.lesson-title {
		font-weight: 600;
		color: var(--text);
	}

	.lesson-level {
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.lesson-desc {
		font-size: 0.875rem;
		color: var(--text-muted);
	}

	.lock-note {
		margin: 0.75rem 0 0;
		font-size: 0.8125rem;
		color: var(--text-muted);
	}
</style>
