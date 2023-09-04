import { __ } from '@wordpress/i18n';
const {  RichText, InspectorControls } = wp.blockEditor;
import { PanelBody, PanelRow, TextControl, Panel} from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
const {
	Fragment
} = wp.element;

export default function edit( { attributes, setAttributes, isSelected }) {
	const {primaryText, secondaryText, link} = attributes;
	return (
		<Fragment>
			{ isSelected && (
				<InspectorControls>
					<Panel>
						<PanelBody title="Url Settings" initialOpen={ true } >
							<PanelRow>
								<TextControl
									label="Link URL"
									value={ link }
									onChange={ ( link ) => setAttributes({...attributes,link} ) }
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
			) }
			<div {...useBlockProps({className: `editor-logo-text-container`})}>
				<span className="logo__text-big">
					<RichText
						tagName="p"
						value={ primaryText }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						onChange={ ( primaryText ) => setAttributes( {...attributes, primaryText } ) }
						placeholder={ __( 'Editable text...' ) }
					/>
				</span>
				<span className="logo__text-small">
					<RichText
						tagName="p"
						value={ secondaryText }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						onChange={ ( secondaryText ) => setAttributes( {...attributes, secondaryText } ) }
						placeholder={ __( 'Editable text...' ) }
					/>
				</span>
			</div>
		</Fragment>

	)
}
