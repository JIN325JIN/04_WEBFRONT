//매개변수 , 전달인자 예제 확인
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

//2개의 값을 전달받아 콘솔로 단순 출력하는 함수
function print1(num,str){//함수 선언

  //함수 정의
  console.log(`${num}은/는 ${str}입니다.`);
}

//btn1 클릭시 input1의 값을 읽어와 print1이라는 함수 호출
btn1.addEventListener("click",function(){
  const value = input1.value;

  if(value.length==0){
    //value의 길이가 0 은 value에 아무것도 입력되지 않은것.
    console.log("값을 입력해주세요")
    return;//함수 종료 + 호출한곳으로 돌아간다.

  }
  let result;//입력된 값이 0인지 양수인지 음수인지 저장
  if(Number(value)===0){
    result ="0";
  }else if (Number(value)>0){
    result = "양수";
  }else{
    result = "음수";
  }

  //함수 호출 (두개의 값을 전달 받아 "123은 양수입니다"출력)
  print1(value,result);
});

//매개변수로 배열 전달하기
function ArrayTest(arr,num){
  //매개변수 전달 받은 배열의 모든 요소 출력하기
  for (let i=0; i<arr.length;i++){

    //arr[i]에 있는 값이 멜론과 일치하면 해당 요소의 값을 딸기로 재대입해라
    if(arr[i]=='멜론')arr[i]="딸기";
    num=100;

    console.log(`${i}번 인덱스 값 : ${arr[i]}`)
  }
}
//#btn2a 클릭되었을때
document.querySelector("#btn2a").addEventListener("click",function(){
  const arr = ["사과","바나나","멜론"];

  let x=0;//원시타입 
  ArrayTest(arr,x);

  console.log("arr[2]:",arr[2]);
  //왜 멜론이 아니라 딸기로 출력된가?
  //배열-> 참조형 
  //숫자,boolean : 원시타입. 기본타입
  //arr은 배열 == 즉, 참조형
  //arrayTest()함수에 전달인자로 arr을 전달하면 arr에 저장된 주소만 보내서 함수를 수행
  //(깊은 복사가 아닌 얕은복사)
  console.log(x);
});

//매개변수로 요소 전달하기
function btn2bFn(el){
  //매개변수 el(element) :이벤트가 발행한 요소 
  el.style.backgroundColor = "yellow";
}

//매개변수로 함수 전달하기
function print2(fn){
  console.log(`a+b=${fn(3,4)}`);
}

//매개변수로 함수 전달하기
document.querySelector("#btn2c").addEventListener("click",function(){
  
  //함수도 변수에 저장 가능! 변수명 == 함수명
  const sumFn = function (a,b){
    return a+b;//함수를 종료 : 값(a+b)를 가지고 호출한 곳으로 돌아감
  }

  //print2 함수에 전달인자로 sumFn을 전달 
  print2(sumFn);

});

//화살표함수 
//클래스가 arrow인 요소를 모두 얻어옴(배열)
const arrowList = document.querySelectorAll(".arrow");

//화살표 함수 기본 형태
arrowList[0].addEventListener("click",()=>{alert("화살표 함수 기본 형태 연습");

});

//매개변수가 1개인 경우 : ()생략 가능
arrowList[1].addEventListener("click",e=>{
  e.target.style.backgroundColor ="pink";
});
// arrowList[1].addEventListener("click",(e)=>{})



/*
이 둘이 같음
function test(){

}
const test=(){

}
*/
  //return 한줄만 작성된 경우
  
  const twoNumberPlus =(otherFn)=>{
    const input1 = Number(prompt("첫번째 값"));
    const input2 = Number(prompt("두번째 값"));
    
    alert(otherFn(input1,input2));
  }
  
  arrowList[2].addEventListener("click",()=>{

twoNumberPlus((a,b)=>a+b);
//twoNumberPlus((a,b)=>{return a+b});

  });

  //return 한줄인데 object타입을 반환하는 경우
  function printobject(otherFn){

    const obj = otherFn("홍길동",20);

    console.log(`obj.name : ${obj.name}`);
    console.log(`obj.age : ${obj.age}`);
  }
  

  arrowList[3].addEventListener("click",()=>{

    printobject((name,age)=>{
      return{"name":name,"age":age}
    });
      //{"name":"홍길동","age":20}
      //JS객체 object타입 ! => return 한줄이어도 생략 불가
    
  });

  //즉시실행함수
  (()=>{
    console.log("즉시 실행 함수 입니다.");
  })();