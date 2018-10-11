$(document).ready(function(){
$(window).scroll(function() {
    var sliderHeight = 60,
		winTop = $(window).scrollTop();

    if (winTop >= sliderHeight) {
        $("#sticky").addClass("sticky");
    } else {
        $("#sticky").removeClass("sticky");}
    });
});