
import gsap from 'gsap';

export function swipe_direction() {


    let location = window.location.href.split("/").pop();
    let status = document.getElementById("status_nav");
    let learn = document.getElementById("learn_nav");
    let news = document.getElementById("news_nav");
    let index = document.getElementById("index_nav");

    if (location === "index.html") {

        nav_focus(index);

        status.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

    } else if (location === "status.html") {

        nav_focus(status);

        learn.setAttribute("data-transition", "swipe_r");
        news.setAttribute("data-transition", "swipe_r");

    } else if (location === "learn.html") {

        nav_focus(learn);

        status.setAttribute("data-transition", "swipe_l");
        news.setAttribute("data-transition", "swipe_r");

    } else {

        nav_focus(news);

        learn.setAttribute("data-transition", "swipe_l");
        status.setAttribute("data-transition", "swipe_l");

    }

}

function nav_focus(site) {
    var tl = gsap.timeline();
    var old = document.getElementsByClassName("highlighted")[0];

    gsap.to(old, {
        duration: .3,
        backgroundColor: "#2a3342",
        color: "#E0FBFC",
        padding: "10px",
    });

    gsap.to(site, {
        duration: .3,
        backgroundColor: "#ee5a35",
        padding: "10px 20px 10px 20px",
        color: "#181f2b",
        borderRadius: "5px"
    })

    old.removeAttribute('class');

    site.setAttribute("class", "highlighted");

};