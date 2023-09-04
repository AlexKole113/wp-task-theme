<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
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
