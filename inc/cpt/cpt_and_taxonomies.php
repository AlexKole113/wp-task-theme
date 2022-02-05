<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}
add_action( 'init', function() {
    $cpt_name = 'Testimonial';
    $labels = array(
        'name'               => $cpt_name . 's',
        'singular_name'      => $cpt_name,
        'add_new'            => 'Add ' . $cpt_name,
        'add_new_item'       => 'Add new ' . $cpt_name,
        'edit_item'          => 'Edit ' . $cpt_name,
        'new_item'           => 'New ' . $cpt_name,
        'all_items'          => 'All ' . $cpt_name . 's',
        'view_item'          => 'View ' . $cpt_name,
        'search_items'       => 'Find ' . $cpt_name,
        'not_found'          => $cpt_name. 's not found',
        'not_found_in_trash' => $cpt_name . 's not found in trash',
        'menu_name'          => $cpt_name . 's'
    );
    $args = array(
        'labels'        => $labels,
        'public'        => true,
        'show_ui'       => true,
        'show_in_rest'  => true,
        'has_archive'   => true,
        'menu_icon'     => 'dashicons-format-chat',
        'menu_position' => 5,
        'supports'      => array( 'title', 'editor', 'comments', 'author', 'thumbnail', 'excerpt', 'custom-fields' )
    );
    register_post_type('testimonials', $args );
}, 0 );


add_action( 'rest_api_init', function(){
    $namespace = 'testimonials/v1';
    $rout = '/data/';
    $rout_params = [
        'methods'  => 'GET',
        'callback' => 'task_theme_get_all_testimonials_with_matafields',
        'permission_callback' => function( $request ){
            return true;
        },
    ];
    register_rest_route( $namespace, $rout, $rout_params );
} );
function task_theme_get_all_testimonials_with_matafields( WP_REST_Request $request ){
    $response = [];
    $testimonials = get_posts([ 'post_type' => 'testimonials']);
    foreach ($testimonials as $testimonial ){
        $data = [
           'id'   => $testimonial->ID,
           'text' => $testimonial->post_content,
           'meta' => []
        ];
        $all_meta = get_post_meta( $testimonial->ID );
        foreach ($all_meta as $metafield => $metavalue) {
            $data['meta'][$metafield] = $metavalue[0];
        }
        $response[] = $data;
    }

    return $response;
}




