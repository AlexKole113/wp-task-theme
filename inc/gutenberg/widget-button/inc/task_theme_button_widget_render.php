<?php
function task_theme_button_widget_render($attributes) {
    require_once  get_template_directory() . '/inc/gutenberg/components/Buttons/render/task_theme_button.php';
    extract($attributes);
    return  task_theme_button( ['buttonType' => $buttonType ? $buttonType : 'success-white', 'linkUrl' => $buttonLink , 'text' => $text]);
}
