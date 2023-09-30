const textData = ['ウル','トラ','ソウル'];

const viewText = document.getElementById('textchar');
let getChar = '';
let getText = '';
let random = 0 ;
let bingo = 0 ;
let txtCnt = 0 ;
const chkChar ='ウルトラソウル';

const createText = () => {
  const id = setInterval( () => {
    let random = Math.floor(Math.random() * textData.length);
    getChar = textData[random] ;
    viewText.textContent += getChar ;

    if( (getChar == textData[0]) && (bingo == 0) ) {
      /* ウル */
      bingo = 1 ;
    } else if( (getChar == textData[1]) && (bingo == 1) ) {
      /* トラ */
      bingo = 2 ;
    } else if( (getChar == textData[2]) && (bingo == 2) ) {
      /* ソウル */
      bingo = 3 ;
    } else {
      bingo = 0 ; /* 最初から・・ */
    }

    if( bingo == 3 ) {
      clearInterval(id) ;
      console.log('OK!!!!!!!!!!!!!!!!!') ;
      setTimeout( () => {
        alert('はーい！') ;
      }, 500);
    }

  }, 100);

};

$('#btn1').on('click', function() {
  console.log('ボタンクリック');

  createText() ;


});
