<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package task-theme
 */

get_header();
?>

    <main id="site-main">
        <?php
        if ( have_posts() ) {
            while (have_posts()) {
                the_post();
                get_template_part('template-parts/content', get_post_type());

            }
            the_posts_navigation();
        } else {
            get_template_part('template-parts/content', 'none');
        }
        ?>
    </main>


<?php
//get_sidebar();
get_footer();
