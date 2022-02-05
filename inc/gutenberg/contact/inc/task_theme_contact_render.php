<?php
function task_theme_contact_render($attrs) {
    extract($attrs);
    return ('        
     <section class="contact" style="background-image: url('.esc_url($backGroundUrl) .'">
            <div class="container">
                <div class="contact__text">
                    <h2 class="contact__title">' . wp_kses_post($title) .'</h2>
                    <p class="contact__excerpt">' . wp_kses_post($text) .'</p>
                </div>
                <div class="contact__group">
                    <div class="contact__map">
                        <div data-key="' . esc_attr($apiKey) .'" data-lat="' . esc_attr($lat) .'" data-lng="' . esc_attr($lng) .'" data-zoom="' . esc_attr($zoom) .'" data-icon="' . esc_attr($icon) .'" class="contact-google-map"></div>
                    </div>
                    <div class="contact__form ">
                        <div class="custom-form">
                            <h3>' . wp_kses_post($formText) . '</h3>
                            ' . do_shortcode($wc7Shortcode) .'
                        </div>
                    </div>
                </div>
            </div>
        </section>
');
}
