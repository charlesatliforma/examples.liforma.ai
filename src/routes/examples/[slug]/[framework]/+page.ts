import { error } from '@sveltejs/kit';
import { getExample, isImplementationAvailable } from '$lib/examples';
import { getFramework, isSupportedFramework } from '$lib/frameworks';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const example = getExample(params.slug);
	if (!example) {
		error(404, 'Example not found');
	}

	if (!isSupportedFramework(params.framework)) {
		error(404, 'Framework not found');
	}

	const framework = getFramework(params.framework);
	if (!framework) {
		error(404, 'Framework not found');
	}

	const hasImplementation = isImplementationAvailable(example, params.framework);
	const runnable = hasImplementation && framework.available;

	return { example, framework, runnable, hasImplementation };
};
