import { registerBlockType } from '@wordpress/blocks';
import edit from './edit';
import './styles/editor.scss'

registerBlockType( 'task-theme/contact', {
	apiVersion: 2,
	title: 'Contact',
	description: 'Block with Map and Contact form',
	category: 'theme',
	icon: 'superhero-alt',
	attributes: {
		title: {
			type: 'string'
		},
		text: {
			type: 'string'
		},
		formText:{
			type: 'string'
		},
		backGroundUrl: {
			type: 'string'
		},
		wc7Shortcode: {
			type: 'string'
		},
		apiKey: {
			type: 'string'
		},
		lat: {
			type: 'string'
		},
		lng: {
			type: 'string'
		},
		zoom: {
			type: 'string'
		},
		icon: {
			type: 'string'
		},
	},
	edit,
	save: () => null,
} );
