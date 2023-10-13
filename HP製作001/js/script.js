$(function() {

  //カルーセル
  $('.carousel').slick({
    autoplay: true,
    fade : true,
    speed : 3000,
    dots: false,
    infinite: true,
    auotplaySpeed: 5000,
    arrows: false,
  });

  //アニメーション
  $('#logo').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100) ;
  });
  $('#logo').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

  $('.menu').on('mouseover', function() {
    $(this).animate({
      opacity: 0.5,
    }, 100) ;
  });
  $('.menu').on('mouseout', function() {
    $(this).animate({
      opacity: 1.0,
    }, 100);
  });

 /* TOP 表示　*/
  $(window).scroll(function() {
    const backBtn = document.getElementById('back-btn') ;
    const scrollVallue = document.scrollingElement.scrollTop ;
    console.log('scroll',scrollVallue) ;

    if ( scrollVallue >= 100) {
      backBtn.style.display = 'inline';
    } else {
      backBtn.style.display = 'none' ;
    }

    /* SERVICEのフェードイン表示 */
    /* Hear Set */
    if( scrollVallue >= 800) {
      $('.img-left1').addClass('fadein-after') ;
      $('.comment-l1').addClass('fadein-afterChar');
    }
    /* Shammpoo　*/
    if( scrollVallue >= 1300 ) {
      $('.img-right').addClass('fadein-after') ;
      $('.comment-r').addClass('fadein-afterChar');
    }
   /* kimono */
    if( scrollVallue >= 1900 ) {
      $('.img-left2').addClass('fadein-after') ;
      $('.comment-l2').addClass('fadein-afterChar') ;
    }

  }) 
 
  /* 滑らかスクロール　*/
  $('a[href^="#"]').click(function() {
    let href = $(this).attr("href");
    let target = $(href == "#" || href =="" ? 'html' : href);
    let position = target.offset().top ;
    console.log('href,target,position',href,target,position);
    let speed = 1500 ;
    
    $("html, body").animate({
      scrollTop: position 
    }, speed, "swing") ;
    return false ;
  }) ;

  // スクロールしたときにセクションをフェードイン
  $(window).scroll(function() {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function() {
      const position = $(this).offset().top;
      if(scrollAmount > position- windowHeight) {
        $(this).addClass('fade-in');
      }
    });
  });

  //サムネイル画像をクリック
  $('.modal').on('click', function() {
    console.log('サムネイルクリック') ;
    //レイヤー表示
    $('#layer').show() ;
    $('#back-btn').prop("disabled",true) ;
    //画像のパス取得
    let str = $(this).attr("href") ;
    console.log('str',str);
    $('#w-top #bodal-img').attr('src', str) ;
    $('#w-top #bodal-img').show() ;
    return false ;
  }) ;

  //クローズボタンクリック
  $('#cls-btn').on('click', function() {
    $('#layer').hide() ;
    $('#w-top #bodal-img').attr('src',"") ;
    $('#w-top #bodal-img').hide() ;
    $('#back-btn').prop("disabled",false) ;
    return false;
  }) ;
}) ;