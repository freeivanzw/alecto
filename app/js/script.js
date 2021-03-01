$(function(){
    $(".navigation__toggle").click(function(){
        $(".navigation").toggleClass("navigation-active");
        $(".navigation__toggle").toggleClass("toggle-active");
    })

    $(".header__slider").slick({
        dots: true,
        appendArrows:$(".header__slider"),
    });
});