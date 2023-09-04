function animateFrom(elem, direction) {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if(elem.classList.contains("gs_reveal_fromLeft")) {
        x = -150;
        y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 150;
        y = 0;
    }
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
        duration: 1.8,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}
function hide(elem) {
    gsap.set(elem, {autoAlpha: 0});
}
window.addEventListener("load", function() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
        if(  window.innerWidth > 1024 ){
            hide(elem);
        }
        ScrollTrigger.create({
            trigger: elem,
            start: "top bottom",
            onEnter: function() { window.innerWidth > 1024 ? animateFrom(elem) : null },
            onEnterBack: function() { window.innerWidth > 1024 ? animateFrom(elem, -1) : null },
            onLeave: function() { window.innerWidth > 1024 ? hide(elem) : null }
        });
    });
});
