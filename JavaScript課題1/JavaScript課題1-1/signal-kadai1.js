$(function() {
  let tglred = 0 ;
  let tglyel = 0 ;
  let tglble = 0 ;

  //赤ボタン
  $('#btn-1').on('click', function() {
    if( tglred === 0) {
      $('#red').css('background-color','red') ;
      tglred = 1 ;
    } else {
      $('#red').css('background-color','white') ;
      tglred = 0 ;
    }
  });

    //黄色ボタン
  $('#btn-2').on('click', function() {
    if( tglyel === 0) {
      $('#yellow').css('background-color','yellow') ;
      tglyel = 1 ;
    } else {
      $('#yellow').css('background-color','white') ;
      tglyel = 0 ;
    }
  });

    //緑ボタン
  $('#btn-3').on('click', function() {
    if( tglble === 0) {
      $('#green').css('background-color','green') ;
      tglble = 1 ;
    } else {
      $('#green').css('background-color','white') ;
      tglble = 0 ;
    }
 
  });

}) ;
