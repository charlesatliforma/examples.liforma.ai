/** Bump when the CDN bundle changes materially (avatar paths, API, etc.). */
const SDK_BUILD = '4';

const SDK_URL = `https://cdn.liforma.ai/sdk/v1/client.js?b=${SDK_BUILD}`;
const SDK_MARKER = 'data-liforma-sdk';

let loadPromise: Promise<void> | null = null;

function existingSdkScript(): HTMLScriptElement | null {
	const el = document.querySelector(`script[${SDK_MARKER}]`);
	return el instanceof HTMLScriptElement ? el : null;
}

export function loadLiformaSdk(): Promise<void> {
	if (typeof document === 'undefined') {
		return Promise.resolve();
	}

	if (loadPromise) {
		return loadPromise;
	}

	loadPromise = new Promise((resolve, reject) => {
		const existing = existingSdkScript();
		if (existing?.src.includes(`b=${SDK_BUILD}`)) {
			resolve();
			return;
		}

		existing?.remove();

		const script = document.createElement('script');
		script.src = SDK_URL;
		script.setAttribute(SDK_MARKER, 'true');
		script.async = true;
		script.onload = () => resolve();
		script.onerror = () => reject(new Error('Failed to load Liforma SDK'));
		document.head.appendChild(script);
	});

	return loadPromise;
}
