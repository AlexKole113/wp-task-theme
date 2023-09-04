import Api from "../../../api/Api";


class Testimonials {

    static getTemplateItem = ({renderInfo, text}) => (`
                                <div class="testimonials-item">
                                   ${ renderInfo.reduce((a,[name,val] ) => (a + `<p class="testimonials-item__data">${name} : <span>${val}</span></p>`),''  ) }
                                   <p class="testimonials-item__text">${text}</p>
                                 </div>`)

    getData = () => Api.getTestimonials();

    constructor({container, loadingIndicator, perPage, form}) {
        this.container = container;
        this.form = form;
        this.loadingIndicator = loadingIndicator;
        this.paginationState = 1;
        this.perPage = perPage;
        this.fieldsForShow = container.getAttribute('data-fields').split(',');
        this.data = null;
    }

    paginationHandler = () => {
        this.container.addEventListener('click', (e) => {
            e.preventDefault();
            if(e.target.hasAttribute('data-testimonial-page')){
                const page = e.target.getAttribute('data-testimonial-page') * 1;
                this.paginationState = page;
                this.render();
            }
        })
    }

    render = () => {
        let startFrom = (this.paginationState > 0 ? this.paginationState - 1 : 0) * this.perPage;
        let html = ``;
        for( let i = startFrom; i < startFrom + this.perPage; i += 1) {
            if(typeof this.data[i] !== 'undefined'){
                const renderInfo = [];
                for(const name in this.data[i]){
                    if(this.fieldsForShow.includes(name)) renderInfo.push( [ name, this.data[i][name] ] )
                }
                html +=  Testimonials.getTemplateItem({ renderInfo, text: this.data[i].text } );
            }
        }

        this.container.innerHTML =  this.paginationRender() + html;
    }

    paginationRender = () => {
        let navigation = '';
        navigation += `<div class="testimonials__pagination">`;

        for(let i = 1; i <= Math.ceil(this.data.length / this.perPage); i+=1 ) {
            navigation += `<a href="#" class="${ this.paginationState === i ? `active-page` : '' }" data-testimonial-page="${i}">${i}</a>`;
        }
        navigation += `</div>`;
        return navigation;
    }
å
    build = () =>
        this.getData()
            .then((data) => {
                const dataApp = data.map(( testimonial ) => {
                  const { meta } = testimonial;
                  return { ...testimonial, ...meta }
                })
                this.data = dataApp;
                this.render()
                this.paginationHandler();
            })

    sendListener = () => {
        this.form.addEventListener( 'submit', (e) => {
            e.preventDefault();
            const namedFields = e.currentTarget.querySelectorAll('[name]');
            const submiter = e.submitter;
            const data = {}
            namedFields.forEach((field) => { data[ field.getAttribute('name') ] = field.value });

            submiter.disabled = true;
            //const originalButtonText = submiter.querySelector('span').textContent;
            submiter.querySelector('span').textContent = "Everything is under control"

            Api.sendTestimonial(data)
            .then((data)=>{
                console.log(data)
                //submiter.querySelector('span').textContent = originalButtonText;
                submiter.querySelector('span').textContent = 'Message sent.';
                submiter.disabled = false;
            })
            .catch((e)=>{
                console.log(e)
                submiter.querySelector('span').textContent = 'error';
                submiter.disabled = false;
            })

        })
    }
}
export default Testimonials;
