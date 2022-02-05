import { __ } from '@wordpress/i18n';
import ButtonTheme from "../../components/Buttons/ButtonTheme";

const { MediaUpload, InspectorControls, RichText } = wp.blockEditor;
const {
	Fragment
} = wp.element;

import { PanelBody, PanelRow, Panel } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

export default function edit( {attributes, setAttributes, isSelected }) {

	const {title, text, backGroundUrl, buttonText, buttonType, buttonLink } = attributes;

	const setButtonText = (buttonText) => {
		setAttributes({
			...attributes,
			buttonText
		})
	}
	const setButtonUrl = (buttonLink) => {
		setAttributes({
			...attributes,
			buttonLink
		})
	}

	const setButtonType = (buttonType) => {
		setAttributes({
			...attributes,
			buttonType
		})
	}

	return (
		<Fragment>
			{ isSelected && (
				<InspectorControls>
					<Panel>
						<PanelBody title="Background settings" initialOpen={ true } >
							<PanelRow>
								<MediaUpload
									onSelect={ ({url}) => { setAttributes({...attributes, backGroundUrl:url })}  }
									allowedTypes={ [ 'image' ] }
									render={ ({open}) => {
										return  <img className={'hero-background-image-editor'} src={backGroundUrl ?? 'https://via.placeholder.com/250x125.png'} onClick={open} />;
									}}
								/>
							</PanelRow>
						</PanelBody>
					</Panel>
				</InspectorControls>
			) }
			<section {...useBlockProps({className:'modal-additional'})} >
				<div className="container">
					<div className="modal-additional__text">
						<h2 className="modal-additional__title">
							<RichText
								tagName="span"
								value={ title }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( title ) => setAttributes( {...attributes, title } ) }
								placeholder={ __( 'Editable text...' ) }
							/>
						</h2>
						<p className="modal-additional__excerpt">
							<RichText
								tagName="span"
								value={ text }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( text ) => setAttributes( {...attributes, text } ) }
								placeholder={ __( 'Editable text...' ) }
							/>
						</p>
					</div>
					<div className="modal-additional__button-area">
						<ButtonTheme
							text={buttonText}
							setButtonText={setButtonText}
							linkUrl={buttonLink}
							setButtonUrl={setButtonUrl}
					        buttonType={buttonType}
							setButtonType={setButtonType}
						/>
					</div>
				</div>
			</section>
		</Fragment>
	)
}
