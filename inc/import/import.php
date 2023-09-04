<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

require_once 'post_creator.php';
add_action( 'wp_ajax_testimonials_import', 'task_theme_testimonials_import_cb' );
add_action( 'wp_ajax_nopriv_testimonials_import', 'task_theme_testimonials_import_cb' );


function task_theme_testimonials_import_cb() {

    if ( !isset( $_POST['testimonials_nonce'] ) ) wp_die();
    if ( !wp_verify_nonce( $_POST['testimonials_nonce'], 'testimonials_import' ) ) wp_die();

    $data_from_form =  json_decode(str_replace("\\",'', filter_var($_POST['testimonials_data'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES) ));

    foreach ( $data_from_form as $field_data ) {
        if( $field_data['name'] === 'most-important' && !empty( $field_data['value'] ) ) wp_die();
    }

    $data_for_import = [];
    foreach ( $data_from_form as $field_name => $field_val ){
        if( $field_name === 'most-important' ) continue;
        $data_for_import[$field_name] = $field_val;
    }

    if ( post_creator( $data_for_import  ) )  wp_send_json_success();
    wp_send_json_error();
}
