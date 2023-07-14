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