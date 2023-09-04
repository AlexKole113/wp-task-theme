const modalToggler = (cssSelector) => {
    document.querySelectorAll(cssSelector).forEach(( item ) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget.getAttribute('href');

            console.log(target)

            document.body.classList.add('modal-active')
            document.querySelector(target).classList.remove('out')
            document.querySelector(target).classList.remove('one')
            document.querySelector(target).classList.add('one')
            const frameSrc = document.querySelector(target).querySelector('[data-frame]').getAttribute('data-frame')
            document.querySelector(target).querySelector('iframe').setAttribute('src', frameSrc )
        })
    })

    document.querySelectorAll('.modal-container').forEach((item)=>{
        item.addEventListener('click', (e) => {
            document.body.classList.remove('modal-active')
            e.currentTarget.classList.add('out')
            item.querySelector('iframe').setAttribute('src', '')
        })
    })
    document.querySelectorAll('.modal__close').forEach((link)=>{
        link.addEventListener('click', (e) => e.preventDefault() )
    })
}

export default modalToggler;
