import { browser } from '$app/environment';

export type Theme = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'liforma-examples-theme';

function systemPrefersDark(): boolean {
	return browser && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function resolveTheme(theme: Theme): 'light' | 'dark' {
	if (theme === 'system') {
		return systemPrefersDark() ? 'dark' : 'light';
	}
	return theme;
}

function applyTheme(resolved: 'light' | 'dark'): void {
	if (!browser) return;
	document.documentElement.dataset.theme = resolved;
}

export function initTheme(): void {
	if (!browser) return;
	const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system';
	applyTheme(resolveTheme(stored));

	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		const current = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system';
		if (current === 'system') {
			applyTheme(resolveTheme('system'));
		}
	});
}

export function toggleTheme(): void {
	if (!browser) return;
	const stored = (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? 'system';
	const resolved = resolveTheme(stored);
	const next = resolved === 'dark' ? 'light' : 'dark';
	localStorage.setItem(STORAGE_KEY, next);
	applyTheme(next);
}
