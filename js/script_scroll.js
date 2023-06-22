$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 300) {
        $('#back_to_top').addClass('active');
    } else {
        $('#back_to_top').removeClass('active');
    }
});

$('#back_to_top').click(function() {
    $('body,html').animate({scrollTop: 0}, 500)
});



var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $(".scroll-mnu").fadeOut();
        } else {
            $(".scroll-mnu").fadeIn();
            console.log(st = $(this).scrollTop());
        }
        lastScrollTop = st;

    
});

