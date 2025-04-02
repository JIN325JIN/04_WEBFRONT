//Window.setTimeout()

document.getElementById("btn1").addEventListener("click",()=>{

  setTimeout(function(){
    alert("3초후 출력!");
  },3000);

});


//Window.setInterVal()

let InterVal;//setInterval을 저장하기 위한 전역 변수

//현재시간 문자열로 반환 함수
function currentTime(){

  const now = new Date();

  //console.log(now)
  let hour = now.getHours();//시
  let min = now.getMinutes();//분
  let sec = now.getSeconds();//초


  if(hour<10) hour ="0"+hour;
  if(min<10) min ="0" + min;
  if(sec<10) sec ="0"+sec;

  return hour +":"+ min+":"+sec;

}


//currentTime();
function clockFn(){
  const clock = document.getElementById("clock");
  clock.innerText= currentTime();//hour +":"+min+":"+sec;


  Interval = setInterval(function(){
    clock.innerText= currentTime();
  },1000);
}

clockFn();//함수호출


document.getElementById("stop").addEventListener("click",()=>{
  clearInterval(Interval);
});