const mobileMainMenuToggle = (btnSelector, maxWidth = 1024 ) => {
    document.querySelector(btnSelector).addEventListener('click',(e)=>{
        e.preventDefault();
        document.body.classList.toggle('mobile-menu-open')
    })
     window.addEventListener('resize', () => {
         if( window.innerWidth > maxWidth && document.body.classList.contains('mobile-menu-open')){
             document.body.classList.remove('mobile-menu-open')
         }
     })

}
export default mobileMainMenuToggle;
