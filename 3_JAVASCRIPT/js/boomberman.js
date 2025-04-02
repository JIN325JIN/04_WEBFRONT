
let positionX = 0;//x좌표 방향대로 이동했는지 기억해줄 변수
let positionY = 0;//y좌표 방향대로 얼마만큼 이동했는지 기억해줄 변수


document.addEventListener("keydown",function(e){
  console.log(e.key);
  const bomberman = document.getElementById("bomberman");
  // const bomberman=document.querySelector("#bomberman");

  //ArrowLeft
  if(e.key=="ArrowLeft"){
    positionX-=10;
  }
   //ArrowRight
 else if(e.key=="ArrowRight"){
    positionX+=10;
  }
  //ArrowUp
  else if(e.key=="ArrowUp"){
    positionY-=10;
  }
  //ArrowDown
  else if(e.key=="ArrowDown"){
    positionY+=10;
  }

  //x키를 대문자로 X
 else if(e.key.toUpperCase() =='X'){

  //box.innerHtml += ..을 실행하는 과정에서 dom이 리랜더링됨.
  //기존에 봄버맨을 가리키던 const bomberman= document.querySelector("#bomberman)
  //더이상 유효하지 않은 변수가 됨.


  // box.innerHTML += 
  // `<img src="../../images/bomberman/bomb.png"
  // style="transform: translate(${positionX}px, ${positionY}px);
  // position: absolute;">`;


  const box = document.querySelector("#box");
  box.innerHTML +=
  `<img src="../../images/bomberman/bomb.png"
  class ="bomb"
  style ="transform:translate(${positionX})px,${positionY}px);
  position:absolute"
  >`;
  //x를 누를때마다 누적하는거니까 += 로 해야 덮어씌우는게 안되고, 누적이 됨!!!!

  }

  
  //z키를 대문자로 Z
  else if(e.key.toUpperCase() =='Z'){

  //그자리에 폭탄이미지를 boomm으로 대체하기 
  // box.innerHTML += 
  // `<img src="../../images/bomberman/boomm.png"
  // style="transform: translate3d(${positionX}px, ${positionY}px, 0);
  // position: absolute;">`;
  explodeBomb(); 

}


//봄버맨의 위치
bomberman.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;//px필수

});


const explodeBomb =()=>{
  const bombs = document.querySelectorAll(".bomb");
  //bombs 유사배열 형태



  //for .. of 문 : 배열같은 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
// for(타입 변수명 : 배열)
for(let bomb of bombs){
  boom.src="../../images/boomm.png";
}


}