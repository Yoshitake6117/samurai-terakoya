$(function() {
  $(window).scroll(function() {
    //let scrollPos = $(this).scrollTop() + $(window).height() ;
    let scrollPos = $(this).scrollTop() ;

    console.log('scrollPos',scrollPos);
    if( scrollPos == 0 ) {
      $('body').css('background-color','orange');
      $('.fadein-char').removeClass('fadein-after');
      $('.fadein-img').removeClass('fadein-after') ;
    }

    if( scrollPos >= 1000) {
      $('body').css('background-color','blue') ;
    }
    if( scrollPos >= 1250) {
      $('.fadein-char').addClass('fadein-after');
    }

    if( scrollPos >= 1350) {
      $('.fadein-img').addClass('fadein-after') ;
    }

    if( scrollPos >= 1500) {
      $('body,html').animate({scrollTop:0},1000) ;
    }

  }) ;

})