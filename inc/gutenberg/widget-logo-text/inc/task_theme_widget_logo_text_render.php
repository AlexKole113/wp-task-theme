<?php
function task_theme_widget_logo_text_render($attributes) {
    extract($attributes);
    return (' 
        <a href="' . esc_url($link) . '" >
            <span class="logo__text-big">' . wp_kses_post($primaryText) . '</span>
            <span class="logo__text-small">' . wp_kses_post($secondaryText) . '</span>
        </a>
    ');
}
