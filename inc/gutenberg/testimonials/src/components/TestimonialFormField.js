import { ToggleControl } from '@wordpress/components';

const TestimonialFormField = ({name, setFieldName, label, setFieldLabel, type, setFieldType, showOnFront, setShowOnFront, deleteField }) => {
   const fieldTypes = ['text', 'number', 'email', 'tel', 'date']

   return (<div className="single-input-group">
        <div className={`fields-data-set`}>
            <label className={`fields-data-set__item`}>
                <span className={`fields-data-set__item_label`}>Field Name</span>
                <input className={`fields-data-set__item_input`} type="text" value={name} onChange={(e) => {
                    setFieldName(e.target.value)
                }}/>
            </label>
            <label className={`fields-data-set__item`}>
                <span className={`fields-data-set__item_label`}>Field Label</span>
                <input className={`fields-data-set__item_input`} type="text" value={label} onChange={(e) => {
                    setFieldLabel(e.target.value)
                }}/>
            </label>
            <label className={`fields-data-set__item`}>
                <span className={`fields-data-set__item_label`}>Field Type</span>
                <select onChange={(e)=>{setFieldType(e.target.value)}}>
                    {
                        fieldTypes.map((allowedType) => <option selected={allowedType === type} key={allowedType} value={allowedType}>{allowedType}</option>)
                    }
                </select>
            </label>
            <div className={`fields-data-set__item-show-on-front`}>
                <ToggleControl
                    label="Show data from this field in reviews"
                    help={
                        showOnFront
                            ? 'The data from this field will be shown in reviews in the public part of the site'
                            : 'Data from this field is visible only in the admin panel'
                    }
                    checked={ showOnFront }
                    onChange={ () => { setShowOnFront(!showOnFront) } }
                />
            </div>



        </div>
        <div className={`single-input-group__delete-field`}>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                deleteField()
            }}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt"
                     className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path>
                </svg>
            </a>
        </div>
    </div>)
};
export default TestimonialFormField;
