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
    getText = '';
    getText = viewText.textContent.substring(txtCnt,txtCnt+7) ;

    if( getText.length >= 7) {
      if( chkChar == getText) {
        /* 一致　*/
        viewText.textContent = viewText.textContent.slice(0,txtCnt+7) ;
        clearInterval(id) ;
        console.log('OK!!!!!!!!!!!!!!!!!') ;
        setTimeout( () => {
          alert('はーい！') ;
        }, 500);
      } else {
        txtCnt++ ;
      }
    }

  }, 100);

};

$('#btn1').on('click', function() {
  console.log('ボタンクリック');

  createText() ;


});
