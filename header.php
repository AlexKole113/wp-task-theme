<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package task-theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#site-main"><?php esc_html_e( 'Skip to content', 'task-theme' ); ?></a>
    <header class="header">
        <section class="container">
            <div class="header__group">
                <div class="logo">
                    <!--   LOGO-AREA   -->
                    <div class="logo__image">
                        <?php the_custom_logo(); ?>
                    </div>
                    <!--    WIDGET-AREA   -->
                    <div class="logo__text">
                        <?php dynamic_sidebar( 'sidebar-header-1' ); ?>
                    </div>
                </div>

                <!--   WP-STANDARD-MENU + WIDGET -->
                <nav class="main-navigation">
                    <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                        <svg class="ham hamRotate ham4" viewBox="0 0 100 100">
                            <path
                                    class="line top"
                                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
                            <path
                                    class="line middle"
                                    d="m 70,50 h -40" />
                            <path
                                    class="line bottom"
                                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
                        </svg>
                    </button>
                    <div class="menu-mainmenu-container">

                        <?php
                            wp_nav_menu( [
                                'theme_location' => 'menu-1',
                                'menu'            => '',
                                'container'       => '',
                                'container_class' => '',
                                'container_id'    => '',
                                'menu_class'      => 'menu',
                                'menu_id'         => '',
                                'before'          => '',
                                'after'           => '',
                                'link_before'     => '',
                                'link_after'      => '',
                                'items_wrap'      => '<ul class="menu nav-menu %2$s">%3$s</ul>',
                                'depth'           => 0,
                                'walker'          => '',
                            ] );
                        ?>

                        <!--   WIDGET-AREA -->
                        <div class="menu-button">
                            <?php dynamic_sidebar( 'sidebar-header-2' ); ?>
                        </div>
                    </div>
                </nav>


            </div>
        </section>
    </header>


