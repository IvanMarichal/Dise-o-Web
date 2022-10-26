$(document).ready(function(){
    $(".aside-right__ad-container__ad-delete").click(function(){
        $(".section-modal").show(120);
    });
    $(".section-modal__close").click(function(){
        $(".section-modal").hide(100);
    });
});