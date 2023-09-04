<?php
add_action( 'init', function() {

    $version = '1.0';
    $block_namespace = 'task-theme';
    $block_name = 'modal';

    wp_register_script(
        $block_namespace . '_' . $block_name . '_script',
        get_template_directory_uri() . '/inc/gutenberg/'. $block_name .'/build/index.js',
        ['wp-blocks', 'wp-element', 'wp-components', 'wp-editor', 'jquery' ],
        $version
    );

    wp_register_style(
        $block_namespace . '_' . $block_name .  '_style-editor',
        get_template_directory_uri() . '/inc/gutenberg/'. $block_name .'/build/index.css',
        [],
        $version
    );

    // TODO: move the styles of each block to the folder with Gutenberg component ->

    //    wp_register_style(
    //        $block_namespace . '_' . $block_name .  '_style-main',
    //        get_template_directory_uri() . '/inc/gutenberg/'. $block_name .'/build/index.css',
    //        [],
    //        $version
    //    );

    require_once 'inc/task_theme_modal_render.php';
    register_block_type(
        $block_namespace . '/' . $block_name ,
        [
            // 'style' => $block_namespace . '_' . $block_name .  '_style-main', // General block style slug
            'editor_style' => $block_namespace . '_' . $block_name  . '_style-editor', // Editor block style slug
            'editor_script' => $block_namespace . '_' . $block_name . '_script',
            'render_callback' => 'task_theme_modal_render', // The render callback
        ]
    );
});

