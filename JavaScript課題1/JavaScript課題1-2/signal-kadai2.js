$(function() {
  let type = 0;

  const timer = () => {

    const id = setInterval(() => {

      switch(type) {
        case 0:  //緑
          $('#green').css('background-color','green') ;
          $('#yellow').css('background-color','white') ;
          $('#red').css('background-color','white') ;
          type = 1 ;
          break;
        case 1:  //黄色点灯
          $('#green').css('background-color','white') ;
          $('#yellow').css('background-color','yellow') ;
          $('#red').css('background-color','white') ;
          type = 2 ;
          break;
        case 2:  //赤点灯
          $('#green').css('background-color','white') ;
          $('#yellow').css('background-color','white') ;
          $('#red').css('background-color','red') ;
          type = 0 ;
          break;
        default:
          break;
      }

    }, 3000);
  };

  //処理スタート
  //スタート時は緑表示
  $('#green').css('background-color','green') ;
  type = 1 ; //次の黄色指示 

  //3秒タイマースタート
  timer() ;
  
}) ;
