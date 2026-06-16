import type { SupportedFramework } from '$lib/frameworks';

export type ExampleMetadata = {
	slug: string;
	title: string;
	description: string;
	category: string;
	frameworks: SupportedFramework[];
	features: string[];
	githubPath: string;
	liveDemoUrl: string;
	specPath: string;
};

export const examples: ExampleMetadata[] = [
	{
		slug: 'spanish-tutor',
		title: 'Spanish Tutor',
		description:
			'Practise Spanish with an animated AI tutor. Lesson-based app pattern with close-before-switch UX.',
		category: 'Education',
		frameworks: ['sveltekit', 'vanilla'],
		features: ['Avatar Experience', 'Microphone', 'Transcript', 'Learning objective', 'Lessons'],
		githubPath: 'examples/spanish-tutor',
		liveDemoUrl: 'https://www.liforma.ai/meet/demo-spanish-cafe',
		specPath: 'examples/spanish-tutor/spec.md'
	}
];

export function getExample(slug: string): ExampleMetadata | undefined {
	return examples.find((example) => example.slug === slug);
}

export function implementationSourcePath(
	example: ExampleMetadata,
	framework: SupportedFramework
): string {
	return `${example.githubPath}/${framework}`;
}

export function isImplementationAvailable(
	example: ExampleMetadata,
	frameworkSlug: string
): boolean {
	return example.frameworks.includes(frameworkSlug as SupportedFramework);
}
