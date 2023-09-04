import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss';

registerBlockType( 'task-theme/widget-button', {
	apiVersion: 2,
	title: 'Button theme',
	description: 'Button theme',
	category: 'widgets',
	icon: 'id',
	attributes: {
		text: {
			type: 'string',
		},
		buttonType: {
			type: 'string',
			default: 'success-white'
		},
		buttonLink: {
			type: 'string',
		}
	},
	edit,
	save: () => null,
} );
