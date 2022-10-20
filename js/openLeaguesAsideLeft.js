var count;
$(document).ready(function(){   
    $("#aside-left__league-container__league-group__open-id").click(function(){
        
        slideTable("#aside-left__league-container__table-info__anchor");
        if(count == 1) {
            rotateButtonUp("#aside-left__league-container__league-group__open-id");
            count = 0;
        }else{
            rotateButtonDown("#aside-left__league-container__league-group__open-id");
            count = 1;
        }
    });

});
    
function slideTable(table) {
    $(table).slideToggle(1000);
     
}

function rotateButtonDown(button) {
    $(button).animate(
        { deg: 180 },
        {
            duration: 100,
            step: function(now){
                $(this).css({transform: 'rotate(' + now + 'deg)'});
            }
        },
    );
}

function rotateButtonUp(button) {
    $(button).animate(
        { deg: 0 },
        {
            duration: 100,
            step: function(now){
                $(this).css({transform: 'rotate(' + now + 'deg)'});
            }
        },
    );
}
