<?php
function task_theme_testimonials_field_render ($field_data) {
    extract($field_data);

    $available_fields = ['text', 'number', 'email', 'tel', 'date'];
    $pattern = '';

    if ( !in_array($type, $available_fields) ) $type = 'text';
    if ( !isset($required) ) $required = 'required';
    if ( $type === 'tel' ) {
        $pattern = 'pattern=[0-9]{3}-[0-9]{2}-[0-9]{2}';
        $tip = '(Format 123-45-67)';
    }

    return('
        <p class="single-input-group">
            <label class="single-input-group__block">
                <span>
                    <input type="' . esc_attr($type) .'" name="' . esc_attr($name) .'" class="wpcf7-form-control wpcf7-text single-input-group__input" ' . esc_attr($pattern) . ' ' . esc_attr($required) . ' data-label="' . esc_attr($label) . '" aria-invalid="false">
                </span>
                <span class="single-input-group__text">' . wp_kses_post($label) .' '. wp_kses_post($tip) .'</span>
            </label>
        </p>
    
    ');
}
