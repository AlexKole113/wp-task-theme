import { Loader } from 'google-maps';


const googleMapCustomization = () => {

    const containers = document.querySelectorAll('.contact-google-map')

    containers.forEach((container) => {
        const apiKey = container.getAttribute('data-key');
        const lat = container.getAttribute('data-lat');
        const lng = container.getAttribute('data-lng');
        const zoom = container.getAttribute('data-zoom') * 1;
        const icon = container.getAttribute('data-icon');

        const loader = new Loader(apiKey, {});
        loader.load()
            .then((google)=>{

                let map = new google.maps.Map(container, {
                    center: new google.maps.LatLng( lat, lng ),
                    zoom,
                });

                const marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    icon,
                    map,
                });
            })

    })

}

export default googleMapCustomization;
