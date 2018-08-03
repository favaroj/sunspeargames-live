$(window).scroll(function(){
    var wScroll = $(window).scrollTop();

    $('.parallax-img').css('background-position', 'center '+(wScroll*.12)+ 'px');
})