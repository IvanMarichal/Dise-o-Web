$(document).ready(function(){
    $(".nav__hamburger-container__main-group").hide();
    $(".nav__hamburger-container__btn").hide();
    $(".nav__hamburger-container__cross").hide();
    if ($(window).width() < 620) {
        $(".nav__hamburger-container__main-group").hide();
        $(".nav__hamburger-container__cross").hide();
        $(".nav__hamburger-container__btn").show();
        $(".nav__hamburger-container__btn").click(function(){
            $(".nav__hamburger-container__main-group").slideToggle(1200);
            $(".nav__hamburger-container__btn").hide();
            $(".nav__hamburger-container__cross").show();
        });
        $(".nav__hamburger-container__cross").click(function(){
            $(".nav__hamburger-container__main-group").slideToggle(1200);
            $(".nav__hamburger-container__cross").hide();
            $(".nav__hamburger-container__btn").show();
        });
    }
    
});