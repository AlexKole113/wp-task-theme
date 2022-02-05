<?php
function task_theme_testimonials_render($attrs) {
    require_once 'task_theme_testimonials_field_render.php';

    extract($attrs);

    $fields_html = '';
    $fields_from_testimonials_in_front = '';

    foreach ( $formFields as $field ) {
        $fields_html .= task_theme_testimonials_field_render( $field );
        if( isset( $field['showOnFront'] ) &&  true === $field['showOnFront'] ) {
            $fields_from_testimonials_in_front .= $field['name'] . ',';
        }
    }

    return ('        
     <section class="testimonials" style="background-image: url('. esc_url($backGroundUrl) .')">
            <div class="container">
                <div class="testimonials__text">
                    <h2 class="testimonials__title">' . wp_kses_post($title) . '</h2>
                    <p class="testimonials__excerpt">' . wp_kses_post($text) . '</p>
                </div>
                <div class="testimonials__group">
                    <div data-perpage="' . esc_attr($testimonialsPerPage) . '" data-fields="' . esc_attr( rtrim($fields_from_testimonials_in_front,',')) . '" class="testimonials-collection"></div>
                    <div class="testimonials__form">
                        <form class="wpcf7-form custom-form testimonials-form" >
                            <h3>' . wp_kses_post($formTitle) . '</h3>
                            <p class="single-input-group">
                                <label class="single-input-group__block">
                                    <span>
                                        <input type="text" name="most-important" class="wpcf7-form-control wpcf7-text single-input-group__input" aria-invalid="false">
                                    </span>
                                    <span class="single-input-group__text">Most Important Info</span>
                                </label>
                            </p>
                            ' . $fields_html . '
                            <p class="single-input-group">
                                <label class="single-input-group__block">
                                        <span>
                                            <textarea name="message" class="wpcf7-form-control wpcf7-textarea single-input-group__textarea" aria-invalid="false"></textarea>
                                        </span>
                                    <span class="single-input-group__text">Additional Info</span>
                                </label>
                            </p> 
                            <p class="single-input-group">
                                <button type="submit" class="wpcf7-form-control has-spinner wpcf7-submit single-input-group__submit theme-button button-big success"><span>' . wp_kses_post($formButtonTitle) . '</span></button>
                                <span class="wpcf7-spinner"></span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
');
}
