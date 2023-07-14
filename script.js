window.onscroll = function () {  
    var scrolled = window.scrollY;
    var w = window.innerWidth;
    console.log(scrolled);
    if (w > 1050) {
        /* normal header */
        if (scrolled < 623) {
            document.getElementById("header").classList.remove("scrolled1");
            document.getElementById("header").classList.remove("scrolled2");
        };
        /* first div */
        if (scrolled > 623 && scrolled < 1670) {
            document.getElementById("header").classList.remove("scrolled2");
            document.getElementById("header").classList.add("scrolled1");
        };
        /* second div */
        if (scrolled >= 1670) {
            document.getElementById("header").classList.remove("scrolled1");
            document.getElementById("header").classList.add("scrolled2");
        };
    };
};   


var btn = false;
function btn_control() {
    if (btn == false) {
        btn = true
    } else {
        btn = false
    };
    if (btn == true) {
        document.getElementById("header_links_menu").classList.add("menu-on");
        document.getElementById("menu-btn").classList.add("clicked");
    };
    if (btn == false) {
        document.getElementById("header_links_menu").classList.remove("menu-on");
        document.getElementById("menu-btn").classList.remove("clicked");
    };
};
