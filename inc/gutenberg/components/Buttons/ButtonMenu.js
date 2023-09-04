const ButtonMenu = ({deleteButton, buttonType, setButtonType, linkUrl, setButtonUrl }) => (
        <div className={`button-menu`}>
            <div className={'button-options-section'}>
                {
                    deleteButton && (
                        <a href={'#'} onClick={(e)=> {e.preventDefault(); deleteButton()}}>
                            <span>Delete button</span>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt"
                                 className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512">
                                <path fill="currentColor"
                                      d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                            </svg>
                        </a>
                    )
                }

            </div>
            <div className={'button-url-section'}>
                <label>
                   <span className={'title-menu'}>URL</span>
                    <input type="text" value={linkUrl} onChange={(e)=>{ setButtonUrl(e.target.value) }}/>
                </label>
            </div>

            <div className={'button-type-section'}>
                <p className={'title-menu'}>Button Type</p>
                <a className={buttonType === 'hero-video' ? 'active-button-type' : null} href="#" onClick={(e)=>{e.preventDefault(); setButtonType('hero-video')}} > Hero video</a>
                <a className={buttonType === 'success-green' ? 'active-button-type' : null} href="#" onClick={(e)=>{e.preventDefault(); setButtonType('success-green')}} > Success green</a>
                <a className={buttonType === 'success-white' ? 'active-button-type' : null} href="#" onClick={(e)=>{e.preventDefault(); setButtonType('success-white')}} > Success white</a>
                <a className={buttonType === 'success-big' ? 'active-button-type' : null} href="#" onClick={(e)=>{e.preventDefault(); setButtonType('success-big')}} > Success big</a>
            </div>
        </div>
);
export default ButtonMenu;
