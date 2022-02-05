import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss'

registerBlockType( 'task-theme/second-section', {
	apiVersion: 2,
	title: 'Second Section',
	description: 'Second Section block',
	category: 'theme',
	icon: 'align-right',
	attributes: {
		preTitle: {
			type: 'string'
		},
		title: {
			type: 'string'
		},
		text: {
			type: 'string'
		},
		imgUrl: {
			type: 'string'
		},
		backGroundUrl: {
			type: 'string'
		},
		imageOrder: {
			type: 'string',
			default: 'L'
		},
		buttons: {
			type: 'array',
			query: {
				text: {
					type: 'string'
				},
				linkUrl:{
					type: 'string'
				},
				buttonType: {
					type: 'string'
				}
			},
			default:[{}]
		},
	},
	edit,
	save: () => null,
} );
