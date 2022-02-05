import { useBlockProps } from '@wordpress/block-editor';


import ButtonTheme from "../../components/Buttons/ButtonTheme";

export default function edit( { attributes, setAttributes,}) {
	const {text, buttonType, buttonLink} = attributes;
	return (
		<div {...useBlockProps({className: `editor-button-container container`})} >
			<ButtonTheme
				text={text}
				linkUrl={buttonLink}
				buttonType={buttonType}
				setButtonText={(text)=>{ setAttributes({...attributes, text}) }}
				setButtonUrl={(buttonLink)=>{ setAttributes({...attributes, buttonLink}) }}
				setButtonType={(buttonType)=>{ setAttributes({...attributes, buttonType}) }}
			/>
		</div>

	)
}
