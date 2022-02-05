import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss';

registerBlockType( 'task-theme/widget-logo-text', {
	apiVersion: 2,
	title: 'Logo text',
	description: 'Logo text',
	category: 'widgets',
	icon: 'id',
	attributes: {
		primaryText: {
			type: 'string'
		},
		secondaryText: {
			type: 'string'
		},
		link : {
			type: 'string'
		}
	},
	edit,
	save: () => null,
} );
