class Api {

    static mainRoute  = '/wp-json/';

    static getTestimonials = () => fetch(Api.mainRoute + 'testimonials/v1/data').then(r => r.json())

    static sendTestimonial = ( data ) => {
        // //  JQ variant TODO: clear ->
        // // '?XDEBUG_SESSION_START=PHPSTORM1'
        //  new Promise((res) => {
        //   jQuery.post( ajaxurl + '?XDEBUG_SESSION_START=PHPSTORM15', { easy_videos_data: data, action: 'easy_videos_import' , easy_videos_nonce: easyVideosData.nonce, }, ( response ) => {
        //     res(response);
        //   } );
        //  }
        const body = new FormData();
        body.append('action', 'testimonials_import');
        body.append('testimonials_nonce', window.taskThemeData.nonce );
        body.append('testimonials_data', JSON.stringify( data ) );
        return fetch( window.taskThemeData.ajaxurl, {
            method: "POST",
            credentials: 'same-origin',
            body
        }).then(r => r.json())
    }

}

export default Api;
