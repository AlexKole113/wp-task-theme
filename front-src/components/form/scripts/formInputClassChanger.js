const formInputClassChanger = ({formCSSSelector, labelTextSelector, actionCssClass, inputsCssSelector }) => {
    const forms = document.querySelectorAll(formCSSSelector);
    const mainHandler = (field)=>{
        field.addEventListener('focus',(e)=>{
            const label = e.target.parentElement.parentElement.parentElement.querySelector(labelTextSelector);
            if(label ) label.classList.add(actionCssClass);
        })
        field.addEventListener('blur', eventHandler);
        field.addEventListener('change',eventHandler);
    }
    const eventHandler = (e)=>{
        const label = e.target.parentElement.parentElement.parentElement.querySelector(labelTextSelector);
        if(e.target.value.length && label ){
            label.classList.add(actionCssClass)
        } else {
            label.classList.remove(actionCssClass)
        }
    }
    forms.forEach((form)=>{
        if(form.querySelector(labelTextSelector)){
            inputsCssSelector.forEach((selectorCSS) => {
                const inputs = form.querySelectorAll(selectorCSS)
                inputs.forEach(mainHandler);

            })
        }
    })
}

export default formInputClassChanger;
