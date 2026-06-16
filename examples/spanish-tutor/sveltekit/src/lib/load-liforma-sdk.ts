const SDK_URL = 'https://cdn.liforma.ai/sdk/v1/client.js';
const SDK_MARKER = 'data-liforma-sdk';

let loadPromise: Promise<void> | null = null;

export function loadLiformaSdk(): Promise<void> {
	if (typeof document === 'undefined') {
		return Promise.resolve();
	}

	if (loadPromise) {
		return loadPromise;
	}

	loadPromise = new Promise((resolve, reject) => {
		const existing = document.querySelector(`script[${SDK_MARKER}]`);
		if (existing) {
			resolve();
			return;
		}

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
