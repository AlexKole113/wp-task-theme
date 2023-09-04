<?php
function task_theme_modal_render($attrs) {
    require_once  get_template_directory() . '/inc/gutenberg/components/Buttons/render/task_theme_button.php';

    extract($attrs);

    $modal_id = mt_rand(1,100);

    return ('        
     <section class="modal-additional" style="background-image: url('. esc_url($backGroundUrl) .')">
            <div class="container">
                <div class="modal-additional__text">
                    <h2 class="modal-additional__title">
                        '. wp_kses_post( $title ) .'
                    </h2>
                    <p class="modal-additional__excerpt">
                        '. wp_kses_post( $text ) .'
                    </p>
                </div>
                <div class="modal-additional__button-area">
                    ' . task_theme_button([ 'buttonType' => $buttonType, 'linkUrl' => "#modal-$modal_id", 'text' => $buttonText]) . '
                    <div class="modal-container" id="modal-' . esc_attr($modal_id) . '">
                        <div class="modal-background">
                            <div data-frame="' . esc_url($buttonLink) .'" class="modal">
                                <iframe title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <a data-modal="#modal-1" href="#" class="modal__close" >
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
');
}
