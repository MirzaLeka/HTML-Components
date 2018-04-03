
var navActive = false;

$("#openMiniNav").click(() => {

    if (navActive) {
    
  //      $(".outerNavUl").fadeOut(500);
        $(".outerNavUl").animate({
            marginTop: "-130px"
        },1500);
        
        navActive = false;
    }
    else {
//        $(".outerNavUl").fadeIn(500);
        $(".outerNavUl").animate({
            marginTop: "0px"
        },1500);

        
        navActive = true;
    }

});