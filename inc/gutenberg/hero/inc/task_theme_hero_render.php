<?php
function task_theme_hero_render($attributes) {
    require_once 'task_theme_hero_feature.php';
    require_once  get_template_directory() . '/inc/gutenberg/components/Buttons/render/task_theme_button.php';

    extract($attributes);


    $features_html  = '';
    $buttons_html   = '';

    if( $features ) {
        foreach ( $features as $feature ) $features_html .= task_theme_hero_feature( $feature );
    }
    if( $buttons ) {
        foreach ( $buttons as $button ) $buttons_html .= task_theme_button( $button );
    }


    return ('        
    <section class="hero" style="background-image: url('. esc_url($backGroundUrl) .')">
        <div class="container">
            <div class="hero-group">
                <div class="hero-text">
                    <header class="hero-text__subtitle">' . wp_kses_post($preTitle) . '</header>
                    <h1 class="hero-text__title">' . wp_kses_post($title) . '</h1>
                    <div class="hero-text__content">
                        <p>' . wp_kses_post($text) . '</p>
                    </div>
                    <ul class="hero-features-list">
                        '. $features_html .'
                    </ul>
                    <footer class="hero-buttons">
                        ' . $buttons_html . '
                    </footer>
                </div>
                <div class="hero-picture">
                    <picture>
                        <source srcset="'. esc_url($imgUrl) .'" media="(min-width: 1024px)">
                        <img src="'. esc_url($imgUrl) .'" alt="' . esc_attr($title) . '" title="' . esc_attr($title) . '" width="600" height="400">
                    </picture>
                </div>
            </div>
        </div>
    </section>
');
}
