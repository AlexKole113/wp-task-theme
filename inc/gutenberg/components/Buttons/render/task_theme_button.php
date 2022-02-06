<?php
function task_theme_button ( $button ) {
    extract($button);

    switch ( $buttonType ) {
        case ('hero-video') :
            return ('
              <a href="'. esc_url($linkUrl) .'" class="theme-button hero-video" target="_blank" role="button" >
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M38.9427 4.00767C38.4853 2.431 37.137 1.188 35.4267 0.766334C32.3243 3.82463e-07 19.887 0 19.887 0C19.887 0 7.44967 3.82463e-07 4.3473 0.766334C2.63702 1.188 1.28868 2.431 0.831277 4.00767C-5.92679e-08 6.86767 0 14.6667 0 14.6667C0 14.6667 -5.92679e-08 22.4657 0.831277 25.3257C1.28868 26.9023 2.63702 28.1453 4.3473 28.567C7.44967 29.3333 19.887 29.3333 19.887 29.3333C19.887 29.3333 32.3243 29.3333 35.4267 28.567C37.139 28.1453 38.4853 26.9023 38.9427 25.3257C39.774 22.4657 39.774 14.6667 39.774 14.6667C39.774 14.6667 39.774 6.86767 38.9427 4.00767ZM15.9096 21.0173V8.316L27.8418 14.6667L15.9096 21.0173Z" fill="#109CF1"/>
                    </svg>
                    <span>'. wp_kses_post($text) .'</span>
                </a>      
            ');
        case ('success-white'):
            return ('
              <a href="' . esc_url($linkUrl) . '" class="theme-button success-white" role="button"><span>'. wp_kses_post($text) .'</span></a>      
            ');
        case ('success-green') :
            return (' <a href="' . esc_url($linkUrl) . '" class="theme-button success" role="button"><span>'. wp_kses_post($text) .'</span></a>');
        case ('success-big') :
            return ('<a href="' . esc_url($linkUrl) . '"  class="theme-button button-big success "><span>'. wp_kses_post($text) .'</span></a>');
        default:
            return ('');

    }
}
