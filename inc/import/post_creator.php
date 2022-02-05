<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function post_creator( $data ) {
        $post_attrs = [
                'post_title'     => mb_substr($data['message'], 0, 10) . '...',
                'post_content'   => $data['message'],
                'post_status'    => 'publish',
                'post_type'      => 'testimonials',
                'comment_status' => 'close',
                'ping_status'    => 'close',
            ];
        //$meta_field = [];
        //$post_attrs['meta_input']['form_fields_data'] = json_encode($meta_field);

        $post_id = wp_insert_post( $post_attrs , true );
        if( is_wp_error( $post_id ) ) return false;

        foreach ( $data as $data_field_name => $data_field_val ) {
            if($data_field_name === 'message') continue;
            update_post_meta( $post_id, $data_field_name, $data_field_val );
        }


        return true;
}
