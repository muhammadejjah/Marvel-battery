$(function () {
    "use strict";
    $(".nav-link").on("click", function () {
        $(".nav-link").removeClass('active');
        $(this).addClass('active');
    });
    $(".navbar-toggler-icon").on("click", function () {
        $(this).toggleClass("rotate-scale-down", "rotate-scale-up");
    });
    $(window).on("scroll", function () {
        var scrollTop = $(window).scrollTop() 
        if(scrollTop>80){
            $(".navbar").css({
                "background-color": "white",
                "box-shadow": "0 0 10px #777"
            });
            $(".navbar").addClass("fadeInDown");
        }
        else{
            $(".navbar").css({
                "background-color": "transparent",
                "box-shadow": "none"
            });
            $(".navbar").removeClass("fadeInDown");
        }
    });
})