//문자열.toLowerCase(): 영어를 모두 소문자로 변경 (A->a)
//문자열.toUpperCase(): 영어를 모두 대문자로 변경 (a->A)





//화면에 존재하는 key 모두 얻기
const keybox = document.querySelectorAll(".key")

//누르면 핑크
//화면 문서 자체에서 키가 눌러지는걸 감지했을때 
document.addEventListener("keydown",function(e){
  console.log(e.key);

  //입력된 키를 대문자로 바꿔서 일치하는 case 실행 (case)
  if(e.key.toUpperCase() =='Q'){
    keybox[0].style.backgroundColor="magenta";
  }
  if(e.key.toUpperCase() =='W'){
    keybox[1].style.backgroundColor="magenta";
  }
  if(e.key.toUpperCase() =='E'){
    keybox[2].style.backgroundColor="magenta";
  }
  if(e.key.toUpperCase() =='R'){
    keybox[3].style.backgroundColor="magenta";
  }

});

// //떼면 흰색 
document.addEventListener("keyup",function(e){

if(e.key.toUpperCase() =='Q'){
  keybox[0].style.backgroundColor="white";
}
if(e.key.toUpperCase() =='W'){
  keybox[1].style.backgroundColor="white";
}
if(e.key.toUpperCase() =='E'){
  keybox[2].style.backgroundColor="white";
}
if(e.key.toUpperCase() =='R'){
  keybox[3].style.backgroundColor="white";
}

});



/*선생님 코드
document.addEventListener("keydown",function(e){
  console.log(e.key);

  //입력된 키를 대문자로 바꿔서 일치하는 case 실행 (case)
  switch(e.key.toLowerCase()){
  case 'q' : idx = 0; 
  break;
  case 'w' : idx = 1; 
  break;
  case 'e' : idx = 2; 
  break;
  case 'r' : idx = 3; 
  break;
  default : return;
  break;//함수 종료
  }


  key[idx].style.backgroundColor ="deepPink"
});

*/



/*선생님 코드
//화면에 존재하는 key 모두 얻기
const keys = document.querySelectorAll(".key")

//키보드가 눌리든 떼지든 키보드 이벤트 핸들러 함수 
function changeKeyColor(e,color){
                  //매개변수 e : 이벤트 종료 객체
                  //color : 색상 

  const keyMap ={'q' :0 , 'w':1 ,'e':2,'r':3}; //매핑

  const idx = keyMap[e.key.toLowerCase()];
  //keyMap['q']->0
  //keyMap['w']->1
  //keyMap['e']->2
  //keyMap['r']->3


  //keyMap에 없는 값 입력되었을때 idx는 undefined 
  if(idx!=undefined){
    keys[idx].style.backgroundColor = color;
    //keys[idx]요소 배경색을 매개변수로 전달받은 color 변경
  }


}

//키가 눌렸을때 실행되는 이벤트 리스터
document.addEventListener("keydown",(e)=>changeKeyColor(e,"deepPink"));
document.addEventListener("keyup",(e)=>changeKeyColor(e,"white"));
// document.addEventListener("keydown",function(e){changeKeyColor(e);});//둘이 같음


*/