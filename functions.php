<?php
/**
 * task-theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package task-theme
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function task_theme_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on task-theme, use a find and replace
		* to change 'task-theme' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'task-theme', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Header Main Menu', 'task-theme' ),
            'menu-2' => esc_html__( 'Footer Menu', 'task-theme' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'task_theme_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'task_theme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function task_theme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'task_theme_content_width', 640 );
}
add_action( 'after_setup_theme', 'task_theme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function task_theme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Header Logo Text', 'task-theme' ),
			'id'            => 'sidebar-header-1',
			'description'   => esc_html__( 'Add widgets here.', 'task-theme' ),
			'before_widget' => '',
			'after_widget'  => '',
			'before_title'  => '',
			'after_title'   => '',
		)
	);
    register_sidebar(
        array(
            'name'          => esc_html__( 'Header Button Area', 'task-theme' ),
            'id'            => 'sidebar-header-2',
            'description'   => esc_html__( 'Add widgets here.', 'task-theme' ),
            'before_widget' => '',
            'after_widget'  => '',
            'before_title'  => '',
            'after_title'   => '',
        )
    );

    register_sidebar(
        array(
            'name'          => esc_html__( 'Footer Logo Text', 'task-theme' ),
            'id'            => 'sidebar-footer-1',
            'description'   => esc_html__( 'Add widgets here.', 'task-theme' ),
            'before_widget' => '',
            'after_widget'  => '',
            'before_title'  => '',
            'after_title'   => '',
        )
    );
    register_sidebar(
        array(
            'name'          => esc_html__( 'Footer Under Logo Area', 'task-theme' ),
            'id'            => 'sidebar-footer-2',
            'description'   => esc_html__( 'Add widgets here.', 'task-theme' ),
            'before_widget' => '',
            'after_widget'  => '',
            'before_title'  => '',
            'after_title'   => '',
        )
    );
}
add_action( 'widgets_init', 'task_theme_require_plugins' );


require_once dirname( __FILE__ ) . '/inc/class-tgm-plugin-activation.php';
function task_theme_require_plugins() {

    $plugins = [
        'name'               => 'Contact Form 7',
        'slug'               => 'contact-form-7',
        'source'             => 'https://downloads.wordpress.org/plugin/contact-form-7.5.5.4.zip',
        'required'           => true,
    ];
    $config = [
        'has_notices'  => true,
        'dismiss_msg'  => 'Plugin for the work of the contact form of this theme',
        'is_automatic' => true,
    ];


    tgmpa( $plugins, [] );

}
add_action( 'tgmpa_register', 'task_theme_require_plugins' );

/**
 * Enqueue scripts and styles.
 */
function task_theme_scripts() {

	wp_enqueue_style( 'task-theme-style-dist', get_template_directory_uri() . '/front-src/dist/style.min.css', [], _S_VERSION );
    wp_enqueue_style( 'task-theme-style', get_stylesheet_uri(), ['task-theme-style-dist'], _S_VERSION );
	//wp_style_add_data( 'task-theme-style', 'rtl', 'replace' );

	//wp_enqueue_script( 'task-theme-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );
    wp_enqueue_script( 'task-theme-script-dist', get_template_directory_uri() . '/front-src/dist/main.min.js', [], _S_VERSION, true );
    wp_localize_script( 'task-theme-script-dist', 'taskThemeData', [
        'nonce' => wp_create_nonce('testimonials_import' ),
        'ajaxurl' => admin_url( 'admin-ajax.php' )
    ] );

    //    GSAP
    //    wp_enqueue_script( 'task-theme-script-GSAP', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426', array(), _S_VERSION, true );
    //    wp_enqueue_script( 'task-theme-script-GSAP-2', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js', array(), _S_VERSION, true );
    //    wp_enqueue_script( 'task-theme-script-GSAP-3', get_template_directory_uri() . '/front-src/common/gsap/scripts/gsap-setup.js', array(), _S_VERSION, true );


	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'task_theme_scripts' );


add_filter( 'wpcf7_autop_or_not', '__return_false' );

function task_theme_admin_scripts( $hook_suffix ){
    wp_enqueue_style( 'task-theme-style-dist', get_template_directory_uri() . '/front-src/dist/style.min.css', array(), _S_VERSION );
}
add_action( 'admin_enqueue_scripts', 'task_theme_admin_scripts' );


/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Theme Gutenberg blocks.
 */
require get_template_directory() . '/inc/gutenberg/hero/index.php';
require get_template_directory() . '/inc/gutenberg/second-section/index.php';
require get_template_directory() . '/inc/gutenberg/testimonials/index.php';
require get_template_directory() . '/inc/gutenberg/modal/index.php';
require get_template_directory() . '/inc/gutenberg/contact/index.php';
require get_template_directory() . '/inc/gutenberg/widget-button/index.php';
require get_template_directory() . '/inc/gutenberg/widget-logo-text/index.php';

/**
 * Theme CPT.
 */
require get_template_directory() . '/inc/cpt/cpt_and_taxonomies.php';

/**
 * Other theme functionalities.
 */
require get_template_directory() . '/inc/import/import.php';


