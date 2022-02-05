import { __ } from '@wordpress/i18n';
const { MediaUpload, InspectorControls, RichText } = wp.blockEditor;
const {
	Fragment
} = wp.element;

import { PanelBody, PanelRow, Panel } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import TestimonialFormField from "./components/TestimonialFormField";

export default function edit( {attributes, setAttributes, isSelected }) {

	const {title, text, backGroundUrl, formTitle, formButtonTitle, testimonialsPerPage, formFields} = attributes;

	//features
	const addField = () => {
		setAttributes({
			...attributes,
			formFields:[ ...formFields ,
				{
					name: '',
					label: '',
					type: 'text'
				}
			]
		})
	}
	const deleteField = ( fieldNum ) => {
		const newformFields = [...formFields];
		setAttributes({
			...attributes,
			formFields: newformFields.filter((v,i) => i !== fieldNum)
		})
	}
	const setFieldName = ( fieldNum, name ) => {
		console.log(fieldNum, name)
		const newFields= [...formFields];
		newFields[fieldNum].name = name;
		setAttributes({
			...attributes,
			formFields: newFields
		})
	}
	const setFieldLabel = ( fieldNum, label ) => {
		const newFields = [...formFields];
		newFields[fieldNum].label = label;
		setAttributes({
			...attributes,
			formFields: newFields
		})
	}
	const setFieldType = ( fieldNum, fieldType ) => {
		const newFields = [...formFields];
		newFields[fieldNum].type = fieldType;
		setAttributes({
			...attributes,
			formFields: newFields
		})
	}
	const setShowOnFront = ( fieldNum, showOnFront ) => {
		const newFields = [...formFields];
		newFields[fieldNum].showOnFront = showOnFront;
		setAttributes({
			...attributes,
			formFields: newFields
		})
	}

	console.log(attributes)

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
		<section {...useBlockProps({className: 'testimonials'})} style={{backgroundImage: `url(${backGroundUrl})`}} >
			<div className="container">
				<div className="testimonials__text">
					<h2 className="testimonials__title">
						<RichText
							tagName="span"
							value={ title }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( title ) => setAttributes( {...attributes, title } ) }
							placeholder={ __( 'Editable text...' ) }
						/>
					</h2>
					<p className="testimonials__excerpt">
						<RichText
							tagName="span"
							value={ text }
							allowedFormats={ [ 'core/bold', 'core/italic' ] }
							onChange={ ( text ) => setAttributes( {...attributes, text } ) }
							placeholder={ __( 'Editable text...' ) }
						/>
					</p>
				</div>
				<div className="testimonials__group">
					<div className="testimonials-collection">

						<div className={`editor-testimonials-options`}>
							<label className={`editor-testimonials-options__item`}>
								<span className={`editor-testimonials-options__item_label`}>Testimonials per page</span>
								<input className={`editor-testimonials-options__item_input`}
									type="number"
									value={testimonialsPerPage}
									onChange={(e)=> setAttributes({...attributes, testimonialsPerPage : e.target.value})}
								/>
							</label>
						</div>
					</div>
					<div className="testimonials__form">
						<form className="wpcf7-form custom-form" noValidate="novalidate" data-status="init">
							<h3>
								<RichText
									tagName="span"
									value={ formTitle }
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
									onChange={ ( formTitle ) => setAttributes( {...attributes, formTitle } ) }
									placeholder={ __( 'Editable text...' ) }
								/>
							</h3>

							{
								formFields.map((opts,fieldNum)=><TestimonialFormField
									key={fieldNum}
									{...opts}
									deleteField={()=>deleteField(fieldNum)}
									setFieldName={(text)=>{setFieldName(fieldNum,text)}}
									setFieldLabel={(text)=>{setFieldLabel(fieldNum,text)}}
									setFieldType={(text)=>{setFieldType(fieldNum,text)}}
									setShowOnFront={(val)=>{setShowOnFront(fieldNum,val)}}
								/>)
							}

							<div className={`editor-testimonials-fields-add-button__container`}>
								<a className={`editor-testimonials-fields-add-button__link`} href={`#`} onClick={(e)=>{e.preventDefault(); addField()}}>
									+ add Field
								</a>
							</div>

							<div className="single-input-group">
								<div className="wpcf7-form-control has-spinner wpcf7-submit single-input-group__submit theme-button button-big success-white">
									<RichText
										tagName="span"
										value={ formButtonTitle }
										allowedFormats={ [ 'core/bold', 'core/italic' ] }
										onChange={ ( formButtonTitle ) => setAttributes( {...attributes, formButtonTitle } ) }
										placeholder={ __( 'Editable text...' ) }
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		</Fragment>
	)
}
