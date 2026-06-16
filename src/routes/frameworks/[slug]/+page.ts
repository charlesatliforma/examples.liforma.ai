import { error } from '@sveltejs/kit';
import { getFramework, isSupportedFramework } from '$lib/frameworks';
import { examples } from '$lib/examples';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	if (!isSupportedFramework(params.slug)) {
		error(404, 'Framework not found');
	}

	const framework = getFramework(params.slug);
	if (!framework) {
		error(404, 'Framework not found');
	}

	const relatedExamples = examples.filter((example) =>
		example.frameworks.includes(framework.slug)
	);

	return { framework, relatedExamples };
};
