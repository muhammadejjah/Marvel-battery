$(function () {
    "use strict";
    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass('active-nav');
        $(this).addClass('active-nav');
    });
    $(".fa-bars").on("click", function () {
        $(this).toggleClass("rotate-scale-down", "rotate-scale-up");
    });
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop()
        if (scrollTop > 100) {
            $(".navbar").css({
                "background-color": "var(--nav-color)",
                "box-shadow": "0 0 10px #777"
            });
            $(".navbar").addClass("fadeInDown");
        }
        else {
            $(".navbar").css({
                "background-color": "transparent",
                "box-shadow": "none"
            });
            $(".navbar").removeClass("fadeInDown");
        };
    });
    $(".btn").on("click", function () {
        $(".btn").toggleClass("close");
        $(".input").toggleClass("inclicked");
    })
    let controller = false
    let whatsapp = () => {
        if (controller) {
            $(".wa-circle").css("box-shadow", "0 0 5px #373170")
            $("#wa,#down").toggleClass("opacity-0");
            $(".tech-sup").addClass("open-tech");
            $(".sales").addClass("open-sales");
        }
        else {
            $(".wa-circle").css("box-shadow", "inset 0 0 5px #373170")
            $("#wa,#down").toggleClass("opacity-0");
            $(".tech-sup").removeClass("open-tech");
            $(".sales").removeClass("open-sales");
        }


    }
    $(".wa-circle").on("click", function () {
        controller = !controller;
        whatsapp()
    });
    let darkMood = JSON.parse(localStorage.getItem("darkMood"))
    const darkModeFun = () => {
        if (darkMood === true) {
            $(":root").css({
                "--body-color": "#282828",
                "--main-text-color": "#ffff",
                "--nav-color": "#141414",
                "--form-color": "#f9ebeb85"
            });
            $("footer").css({
                "background-color": "#141414",
                "background-image": "none",
                "box-shadow": "none"
            });
            $(".landing").css("filter", "brightness(90%)");

        }
        else {
            $(":root").css({
                "--body-color": " #ffff",
                "--main-text-color": "#373170",
                "--nav-color": "#ffff",
                "--form-color": "white"
            });
            $("footer").css({
                "background-color": "#141414",
                "background-image": "linear-gradient(180deg, #0E83B1, #0B71A8, #144D8B, #3C2866)",
                "box-shadow": "0 0 8px 20px #0E83B1"
            });
            $(".landing").css("filter", "brightness(100%)");

        }
    }
    let dark = JSON.parse(localStorage.getItem("darkMood"))
    window.onload = () => {
        if (dark === null) {
            localStorage.setItem("darkMood", "false")
            darkModeFun()
        }
        else {
            localStorage.setItem("darkMood", darkMood)
            darkModeFun()
        }
    }
    $(".darkMood").on("click", function () {
        darkMood = !darkMood
        if (darkMood) {
            localStorage.setItem("darkMood", "true")
            darkModeFun()
            $(".darkMood").css("color", "#F89D1B");
            $(".dark-icon").addClass("opacity-0");
            $(".light-icon").removeClass("opacity-0");
        }
        else {
            localStorage.setItem("darkMood", "false")
            darkModeFun()
            $(".darkMood").css("color", "black");
            $(".light-icon").addClass("opacity-0");
            $(".dark-icon").removeClass("opacity-0");
        };
    });
    darkModeFun()


})

