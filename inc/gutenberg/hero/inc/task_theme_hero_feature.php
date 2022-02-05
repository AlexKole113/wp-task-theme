<?php
function task_theme_hero_feature ( $feature ) {
    extract($feature);
    return ('
    <li class="hero-features-list__item">
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 6.13397C11.1667 6.51888 11.1667 7.48112 10.5 7.86603L1.5 13.0622C0.833332 13.4471 -6.10471e-07 12.966 -5.76822e-07 12.1962L-1.2256e-07 1.80385C-8.8911e-08 1.03405 0.833333 0.552922 1.5 0.937822L10.5 6.13397Z" fill="#109CF1"/>
        </svg>
        <span>' . wp_kses_post($text) .'</span>
    </li>
    ');
}
