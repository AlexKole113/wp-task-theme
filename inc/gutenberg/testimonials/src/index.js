import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss'

registerBlockType( 'task-theme/testimonials', {
	apiVersion: 2,
	title: 'Testimonials',
	description: 'Second Section block',
	category: 'theme',
	icon: 'buddicons-groups',
	attributes: {
		title: {
			type: 'string'
		},
		text: {
			type: 'string'
		},
		backGroundUrl: {
			type: 'string'
		},
		formTitle: {
			type: 'string'
		},
		formButtonTitle: {
			type: 'string'
		},
		testimonialsPerPage: {
			type: 'string',
			default: '5'
		},
		formFields: {
			type: 'array',
			query: {
				name: {
					type: 'string'
				},
				label: {
					type: 'string'
				},
				type: {
					type: 'string'
				},
				showOnFront: {
					type: 'boolean',
					default: true
				}
			},
			default: [{}]
		}


	},
	edit,
	save: () => null,
} );
