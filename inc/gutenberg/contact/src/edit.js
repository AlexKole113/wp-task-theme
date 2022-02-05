import { __ } from '@wordpress/i18n';
const { MediaUpload, InspectorControls, RichText } = wp.blockEditor;
const {
	Fragment
} = wp.element;

import { PanelBody, PanelRow, Panel } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

export default function edit( {attributes, setAttributes, isSelected }) {
	const {title, text, backGroundUrl, wc7Shortcode, apiKey, lat, lng, zoom, icon, formText } = attributes;
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
			<section {...useBlockProps({className:'contact editor'})} style={{backgroundImage: `url(${backGroundUrl})`}} >
			<div className="container">
				<div className="contact__text">
					<h2 className="contact__title">
						<RichText
							tagName="span"
							value={ title }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( title ) => setAttributes( {...attributes, title } ) }
							placeholder={ __( 'Editable text...' ) }
						/>
					</h2>
					<p className="contact__excerpt">
						<RichText
							tagName="span"
							value={ text }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( text ) => setAttributes( {...attributes, text } ) }
							placeholder={ __( 'Editable text...' ) }
						/>
					</p>
				</div>
				<div className="contact__group">
					<div className="contact__map">
						<div className="editor-google-data">
							<h4>Google map options </h4>
							<label className={'editor-google-data__control-group'}>
								<span>Api key</span>
								<input type="text" value={apiKey} onChange={(e)=>{setAttributes({...attributes, apiKey: e.target.value })}}/>
							</label>
							<label className={'editor-google-data__control-group'}>
								<span>Latitude</span>
								<input type="text" value={lat} onChange={(e)=>{setAttributes({...attributes, lat: e.target.value })}}/>
							</label>
							<label className={'editor-google-data__control-group'}>
								<span>Longitude</span>
								<input type="text" value={lng} onChange={(e)=>{setAttributes({...attributes, lng: e.target.value })}}/>
							</label>
							<label className={'editor-google-data__control-group'}>
								<span>Zoom</span>
								<input type="number" value={zoom} onChange={(e)=>{setAttributes({...attributes, zoom: e.target.value })}}/>
							</label>
							<label className={'editor-google-data__control-group'}>
								<span>Icon</span>
								<MediaUpload
									onSelect={ ({url}) => { setAttributes({...attributes, icon:url })}  }
									allowedTypes={ [ 'image' ] }
									render={ ({open}) => {
										return  <img className={'editor-google-data__icon'} src={icon ?? 'https://via.placeholder.com/16x16.png'} onClick={open} />;
									}}
								/>
							</label>
						</div>
					</div>
					<div className="contact__form">
						<div className="editor-google-data wpcf7-form custom-form">
							<h3><RichText
								tagName="span"
								value={ formText }
								allowedFormats={ [ 'core/bold', 'core/italic' ] }
								onChange={ ( formText ) => setAttributes( {...attributes, formText } ) }
								placeholder={ __( 'Editable text...' ) }
							/></h3>
							<label className={'editor-google-data__control-group'}>
								<span>WCF7 Shortcode</span>
								<input type={'text'} value={wc7Shortcode} onChange={(e)=>{setAttributes({...attributes, wc7Shortcode: e.target.value })}}/>

							</label>

						</div>

					</div>
				</div>
			</div>
		</section>
		</Fragment>
			)
}
