$(function(){
    $(".navigation__toggle").click(function(){
        $(".navigation").toggleClass("navigation-active");
        $(".navigation__toggle").toggleClass("toggle-active");
    })

    $(".header__slider").slick({
        dots: true,
        appendArrows:$(".header__slider"),
    });


    $("a[href^='#']").click(function() {
        const going = $(this).attr('href');
        $("html, body").animate({scrollTop: $(going).offset().top + "px"}, 1000)
    })

    $("button[id^='#']").click(function() {
        const going = $(this).attr('href');
        $("html, body").animate({scrollTop: $(going).offset().top + "px"}, 1000)
    })


    
});