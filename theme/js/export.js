/* ===================================
 shrink navigation
 ====================================== */
$(window).scroll(function () {
    bind_shrink_header();
});

function bind_shrink_header() {
    var transparentNotSticky = $('nav').hasClass('transparent-not-sticky');
    if(transparentNotSticky){
      return false;
    }
    if ($('nav').hasClass('shrink-header')) {
        $('.shrink-header').addClass('shrink-nav');
        // $('section:first').addClass('header-margin-top');
        console.log(1);
    } else if ($('nav').hasClass('shrink-big-header')) {
        $('.shrink-big-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-big');
        console.log(2);
    } else if ($('nav').hasClass('shrink-medium-header')) {
        $('.shrink-medium-header').addClass('shrink-nav');
        $('section:first').addClass('header-margin-top-medium');
        console.log(3);
    } else if ($('nav').hasClass('shrink-transparent-header-dark')) {
        $('.shrink-transparent-header-dark').addClass('shrink-nav');
        // $('section:first').removeClass('header-margin-top');
        console.log(4);
    } else if ($('nav').hasClass('shrink-transparent-header-light')) {
        $('.shrink-transparent-header-light').addClass('shrink-nav');
        // $('section:first').removeClass('header-margin-top');
        console.log(5);
    } else {
        $('.shrink-header').removeClass('shrink-nav');
        $('section:first').removeClass('header-margin-top');
        console.log(6);
    }

    if ($(window).scrollTop() > 10) {
        $('nav').addClass('shrink');
    } else {
        $('nav').removeClass('shrink');
    }
}

setTimeout(function () {
    $(window).scroll();
}, 500);
