/** @typedef {'Beginner' | 'Intermediate'} LessonLevel */

/**
 * @typedef {Object} Lesson
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {LessonLevel} level
 * @property {string} goal
 * @property {string} experienceId
 */

/** @type {Lesson[]} */
export const lessons = [
	{
		id: 'cafe-conversation',
		title: 'Café Conversation',
		description: 'Order drinks and snacks in a Spanish café.',
		level: 'Beginner',
		goal: 'Practise greeting the waiter, ordering a drink, asking for the bill, and saying thank you.',
		experienceId: 'exp_01DEMO1SPANISHCAFE'
	},
	{
		id: 'hotel-check-in',
		title: 'Hotel Check-in',
		description: 'Check into a hotel and ask about your room.',
		level: 'Beginner',
		goal: 'Practise giving your name, confirming a reservation, asking about breakfast, and finding your room.',
		experienceId: 'exp_01DEMO1SPANISHHOTEL'
	},
	{
		id: 'asking-directions',
		title: 'Asking for Directions',
		description: 'Ask where places are and understand simple directions.',
		level: 'Beginner',
		goal: 'Practise asking for directions to a station, museum, or restaurant.',
		experienceId: 'exp_01DEMO1SPANISHDIRECTIONS'
	},
	{
		id: 'shopping-clothes',
		title: 'Shopping for Clothes',
		description: 'Ask for sizes, colours, and prices in a clothes shop.',
		level: 'Beginner',
		goal: 'Practise asking for a size, describing colours, and asking how much something costs.',
		experienceId: 'exp_01DEMO1SPANISHSHOP'
	}
];
