<?php
function task_theme_second_section_render($attrs) {
    require_once  get_template_directory() . '/inc/gutenberg/components/Buttons/render/task_theme_button.php';
    extract($attrs);

    if( $buttons ) {
        foreach ( $buttons as $button ) $buttons_html .= task_theme_button( $button );
    }

    $text = '<p>' . str_replace('<br>','</p><p>', $text)  .'</p>';

    return ('        
     <section class="second-section" style="background-image: url('. esc_url($backGroundUrl) .')">
            <div class="container">
                <div class="second-section__group">
                    <div class="second-section-picture '. esc_attr("{$imageOrder}-order") .'">
                        <picture>
                            <source srcset="'. esc_url($imgUrl) .'" media="(min-width: 1024px)">
                            <img src="'. esc_url($imgUrl) .'" alt="' . esc_attr($title) . '" title="' . esc_attr($title) . '" width="600" height="400">
                        </picture>
                    </div>
                    <div class="second-section-text">
                        <header class="second-section-text__subtitle">' . wp_kses_post($preTitle) . '</header>
                        <h2 class="second-section-text__title">' . wp_kses_post($title) . '</h2>
                        <div class="second-section-text__content">
                            <p>' . wp_kses_post($text) . '</p>
                        </div>
                        <footer class="second-section-text-buttons">
                             ' . $buttons_html . '
                        </footer>
                    </div>
                </div>
            </div>
        </section>
');
}
