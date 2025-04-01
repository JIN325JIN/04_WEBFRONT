

let positionX = 0;
let positionY = 0;
document.addEventListener("keydown",function(e){
  console.log(e.key);
  const bomberman = document.getElementById("bomberman");

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

  box.innerHTML += 
  `<img src="../../images/bomberman/bomb.png"
  style="transform: translate3d(${positionX}px, ${positionY}px, 0);
  position: absolute;">`;
    

  //box.innerHtml += ..을 실행하는 과정에서 dom이 리랜더링됨.
  //기존에 봄버맨을 가리키던 const bomberman= document.querySelector("#bomberman)
  //더이상 유효하지 않은 변수가 됨.
  }
  //z키를 대문자로 Z
  else if(e.key.toUpperCase() =='Z'){

  //그자리에 폭탄이미지를 boomm으로 대체하기 
  box.innerHTML += 
  `<img src="../../images/bomberman/boomm.png"
  style="transform: translate3d(${positionX}px, ${positionY}px, 0);
  position: absolute;">`;

}
//봄버맨의 위치
bomberman.style.transform = `translate3d(${positionX}px, ${positionY}px, 0)`;

});
