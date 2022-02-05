const { RichText } = wp.blockEditor;
const HeroFeature = ({text ,deleteFeature, setFeatureText}) => (
    <li className="hero-features-list__item">
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86603L1.5 13.0622C0.833332 13.4471 -6.10471e-07 12.966 -5.76822e-07 12.1962L-1.2256e-07 1.80385C-8.8911e-08 1.03405 0.833333 0.552922 1.5 0.937822L10.5 6.13397Z"
                fill="#109CF1"/>
        </svg>
        <RichText
            value={ text }
            allowedFormats={ [ 'core/bold', 'core/italic' ] }
            onChange={ ( text ) => { console.log(text); setFeatureText( text ) } }
            placeholder={ 'Feature text...' }
        />
        <a className={`editor-features-delete-item`} onClick={(e)=>{e.preventDefault(); deleteFeature()}} href="#">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt"
                 className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
                <path fill="currentColor"
                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
            </svg>
        </a>
    </li>
)
export default HeroFeature;
