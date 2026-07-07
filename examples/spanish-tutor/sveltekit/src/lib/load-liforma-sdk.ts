/** Bump when the CDN bundle changes materially (avatar paths, API, etc.). */
const SDK_BUILD = '6';

const SDK_MARKER = 'data-liforma-sdk';

const PRODUCTION_CDN_BASE_URL = 'https://cdn.liforma.ai';
const LOCAL_API_BASE_URL = 'http://localhost:3001';
const LOCAL_PLAYER_EMBED_URL = 'http://localhost:3002/embed';

const SDK_LOAD_TIMEOUT_MS = 20_000;

let loadPromise: Promise<void> | null = null;

function sdkUrl(): string {
	return `${PRODUCTION_CDN_BASE_URL.replace(/\/$/, '')}/sdk/v2/client.js?b=${SDK_BUILD}`;
}

function isSdkReady(): boolean {
	const globalWindow = window as Window & { Liforma?: { Experience?: unknown } };
	return Boolean(globalWindow.Liforma?.Experience);
}

function existingSdkScript(): HTMLScriptElement | null {
	const el = document.querySelector(`script[${SDK_MARKER}]`);
	return el instanceof HTMLScriptElement ? el : null;
}

function sdkLoadError(url: string): Error {
	if (import.meta.env.DEV) {
		return new Error(
			`Failed to load Liforma SDK from ${url}. ` +
				'Ensure api (:3001) and player (:3002) are running for local embed. ' +
				'Use cdn.liforma.ai npm run dev (:3010) only when testing unpublished SDK changes.'
		);
	}
	return new Error(
		`Failed to load Liforma SDK from ${url}. ` +
			'If v2 was recently added, publish it with npm run deploy in cdn.liforma.ai.'
	);
}

export function loadLiformaSdk(): Promise<void> {
	if (typeof document === 'undefined') {
		return Promise.resolve();
	}

	if (loadPromise) {
		return loadPromise;
	}

	loadPromise = new Promise((resolve, reject) => {
		const url = sdkUrl();
		const existing = existingSdkScript();

		if (existing?.src.includes('/sdk/v2/') && isSdkReady()) {
			resolve();
			return;
		}

		existing?.remove();

		const script = document.createElement('script');
		script.src = url;
		script.setAttribute(SDK_MARKER, 'true');
		script.async = true;

		if (import.meta.env.DEV) {
			script.dataset.apiBaseUrl = LOCAL_API_BASE_URL;
			script.dataset.playerEmbedUrl = LOCAL_PLAYER_EMBED_URL;
		}

		const timeoutId = window.setTimeout(() => {
			loadPromise = null;
			reject(sdkLoadError(url));
		}, SDK_LOAD_TIMEOUT_MS);

		const finish = (ok: boolean) => {
			window.clearTimeout(timeoutId);
			if (!ok || !isSdkReady()) {
				loadPromise = null;
				script.remove();
				reject(sdkLoadError(url));
				return;
			}
			resolve();
		};

		script.onload = () => finish(true);
		script.onerror = () => finish(false);
		document.head.appendChild(script);
	});

	return loadPromise;
}
