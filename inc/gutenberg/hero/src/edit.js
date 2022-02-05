import { __ } from '@wordpress/i18n';
const { MediaUpload, InspectorControls, RichText } = wp.blockEditor;
const {
	Fragment
} = wp.element;

import { PanelBody, PanelRow, Panel } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

import ButtonTheme from "../../components/Buttons/ButtonTheme";
import HeroFeature from "./components/HeroFeature";


export default function edit( { attributes, setAttributes, isSelected }) {

	const {preTitle,title,text, imgUrl, backGroundUrl, features, buttons} = attributes;


	//buttons
	const addButton = () => {
		setAttributes({
			...attributes,
			buttons:[ ...buttons , {
				text:'',
				linkUrl: '#',
				buttonType: 'success-green'
			}]
		})
	}
	const deleteButton = (buttonNum) => {
		const newButtons = [...buttons];
		setAttributes({
			...attributes,
			buttons: newButtons.filter((v,i) => i !== buttonNum)
		})
	}
	const setButtonText = (buttonNum, text) => {
		const newButtons = [...buttons];
		newButtons[buttonNum].text = text;
		setAttributes({
			...attributes,
			buttons: newButtons
		})
	}
	const setButtonUrl = (buttonNum, url) => {
		const newButtons = [...buttons];
		newButtons[buttonNum].linkUrl = url;
		setAttributes({
			...attributes,
			buttons: newButtons
		})
	}
	const setButtonType = (buttonNum, type) => {
		const newButtons = [...buttons];
		newButtons[buttonNum].buttonType = type;
		setAttributes({
			...attributes,
			buttons: newButtons
		})
	}

	//features
	const addFeature = () => {
		setAttributes({
			...attributes,
			features:[ ...features , {
				text: '',
			}]
		})
	}
	const deleteFeature = ( featureNum ) => {
		const newFeatures = [...features];
		setAttributes({
			...attributes,
			features: newFeatures.filter((v,i) => i !== featureNum)
		})
	}
	const setFeatureText = ( featureNum, text ) => {
		const newFeatures = [...features];
		newFeatures[featureNum].text = text;
		setAttributes({
			...attributes,
			features: newFeatures
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
			<section {...useBlockProps( {className: 'hero' })} style={{backgroundImage: `url(${backGroundUrl})` }} >
				<div className="container">
					<div className="hero-group">
						<div className="hero-text">
							<header className="hero-text__subtitle">
								<RichText
									tagName="span"
									value={ preTitle }
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
									onChange={ ( preTitle ) => setAttributes( {...attributes, preTitle } ) }
									placeholder={ __( 'Editable text...' ) }
								/>
							</header>
							<h1 className="hero-text__title">
								<RichText
									tagName="span"
									value={ title }
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
									onChange={ ( title ) => setAttributes( {...attributes, title } ) }
									placeholder={ __( 'Editable text...' ) }
								/>
							</h1>
							<div className="hero-text__content">
								<RichText
									tagName="p"
									value={ text }
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
									onChange={ ( text ) => setAttributes( {...attributes, text } ) }
									placeholder={ __( 'Editable text...' ) }
								/>
							</div>
							<a className={`editor-hero-add-button`} href={`#`} onClick={(e)=> {e.preventDefault(); addFeature()}}>
								+ add Feature
							</a>
							<ul className="hero-features-list">
								{
									features.map( (opts, i) => <HeroFeature key={i} {...opts} deleteFeature={()=>{deleteFeature(i)}} setFeatureText={(text)=>{ setFeatureText(i,text) }}  />)
								}

							</ul>
							<footer className="hero-buttons">
								{
									buttons.map((opts,i) => <ButtonTheme
										key={i}
										{...opts}
										deleteButton={()=>{deleteButton(i)}}
										setButtonText={(val)=>{setButtonText(i,val)}}
										setButtonUrl={(val)=>{setButtonUrl(i,val)}}
										setButtonType={(val)=>{setButtonType(i,val)}}
									/>)
								}
							</footer>
							<a className={`editor-hero-add-button`} href={`#`} onClick={(e)=> {e.preventDefault(); addButton()}}>
								+ add Button
							</a>
						</div>
						<div className="hero-picture">
							<picture>
								<MediaUpload
									onSelect={ ({url}) => { setAttributes({...attributes, imgUrl:url })}  }
									allowedTypes={ [ 'image' ] }
									render={ ({open}) => {
										return  <img className={'hero-background-image-editor'} src={imgUrl ?? 'https://via.placeholder.com/608x630.png' }  onClick={open} />;
									}}
								/>
							</picture>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
}
