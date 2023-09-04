import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss'

registerBlockType( 'task-theme/modal', {
	apiVersion: 2,
	title: 'Text with Modal',
	description: 'Second Section block',
	category: 'theme',
	icon: 'superhero-alt',
	attributes: {
		title: {
			type: 'text'
		},
		text: {
			type: 'text'
		},
		backGroundUrl: {
			type: 'string'
		},
		buttonText: {
			type: 'string'
		},
		buttonType:{
			type: 'string',
			default: 'success-green'
		},
		buttonLink: {
			type: 'string'
		}
	},
	edit,
	save: () => null,
} );
