import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss';

registerBlockType( 'task-theme/hero', {
	apiVersion: 2,
	title: 'HERO',
	description: 'HERO block',
	category: 'theme',
	icon: 'id',
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
		features: {
			type: 'array',
			query: {
				text: {
					type: 'string'
				}
			},
			default:[{}]
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
