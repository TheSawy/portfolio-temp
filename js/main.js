/*global $, alert console */
$(function() {
/**
 * Adjusting the height of the slider to take the full window height
 */
    $(window).resize(function () {
        $(".slider").height($(window).height());
        
    });

/**
 * projects shuffle functionalities
*/
    $(".selecting-area #ios").click(function () {
        $(".one, .three , .five").fadeOut(1000);
        $(".four, .two , .six").fadeIn(1000);
    });

    $(".selecting-area #web").click(function () {
        $("img").fadeIn(0);
        $(".four, .two , .six").fadeOut(1000);
    });
    $(".selecting-area #all").click(function () {
        $("img").fadeIn(1000);
    
    });
    $(".selecting-area #android").click(function () {
        $("img").fadeIn(1);
        $(".four, .one , .six").fadeOut(1000);
    });
    /* $(".projects-samples img").hover(function () {
        $(this).toggleClass("over");
    }) */
 

/**
* self-made slider for feedback
*/
    (function autoslider() {
        $(".feed-slider .active").each(function() {
            if(!$(this).is (':last-child')){
                $(this).delay(1000).fadeOut(1000,function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoslider();
                })
            }else{
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('active');  
                    $(".feed-slider div:first-child").addClass('active').fadeIn();
                    autoslider();
                })
                
            }
        })
    }());

/**
*  downloaded slider plugin
*/

  

    $('.sliderr').bxSlider({
        pager: false
    });

/**
*  navigating in the sinle-page web functionalities
*/
    // don't target "href" attr when you want to navigate in single page
    // add a new class and target
    $(".ser").click(function () {
        $('html, body').animate({
            scrollTop: $(".feedback").offset().top -18
        },3000) 
    });
    $(".AB").click(function () {
        $('html, body').animate({
            scrollTop: $(".servicies").offset().top -18
        },3000) 
    });
    $(".FB").click(function () {
        $('html, body').animate({
            scrollTop: $(".feedback").offset().top -18
        },3000) 
    });
    $(".PO").click(function () {
        $('html, body').animate({
            scrollTop: $(".projects").offset().top -18
        },3000) 
    });

/**
*  dowloaded scroll plugin
*/
    $('html').niceScroll({
        cursorcolor: "#1ABC9C",
        scrollspeed: 40,
    });
});