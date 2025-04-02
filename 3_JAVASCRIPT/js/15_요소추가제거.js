//요소/remove(): 요소 제거 

// 공통적으로 사용되는 요소를 전역변수로 선언
const addBtn = document.querySelector("#add");//추가버튼
const calcBtn = document.querySelector("#calc");//계산버튼

const container = document.querySelector(".container");//가장 바깥쪽 div
//동적으로 만들어진 요소를 최종적으로 붙여야하는 요소

//추가버튼 클릭시
addBtn.addEventListener("click",()=>{
  // <div class="row">
  //<input type="number" class="input-number">
  //<span class="remove-row">&times;</span>
//</div>



//1.div요소 생성하기
const row = document.createElement("div");

//2.row요소에 class추가하기
row.classList.add("row");//<div class = "row"></div>

//3.input요소 생성하기
const input = document.createElement("input");//<input>


//4.type = number 추가하기
// input.type="number";
input.setAttribute("type","number");//<input type = "number">


//5. "input-number" 추가하기
// input.setAttribute("class","test");
input.classList.add("input-number");//<input type="number" class = "input-number">


//6.span요소 생성하기
const span = document.createElement("span");//<span></span>

//7.span태그에 class remove row추가하기
span.classList.add("remove-row");//<span class ="remove-row"></span>


//8.span태그사이에 내용으로 &times; 추가하기 (innerHTML 사용)
//&times : x표시
span.innerHTML ="&times;";//<span class ="remove-row">&times;</span>


//=> 단순히 = 는 html요소로 해석해서 문자열로 추가하겠다는 의미라서 리렌더링 일어나지않음
//리렌더링은 기존요소에 새로운요소를 누적할때 일어남.


//--------조립하기-------------


//9.div.row 요소에게 자식으로 input, span 추가
row.append(input,span);



//10.이 완성된 div.row를 컨테이너의 마지막 자식으로 추가하기 
container.append(row);



// console.log(row);

//******************** */

//클릭된 x버튼의 부모요소를 제거
//x버튼은 span태그 : 부모: row 



//1.만들어진 x버튼 span 에 이벤트 리스너 추가

span.addEventListener("click",(e)=>{
  
  //2.현재 이벤트가 발생한 요소 (클릭된 x버튼)의 부모요소를 선택(탐색)

  const parent = e.target.parentElement; //: target 은 span 태그

  //3.부모요소 제거하기
  parent.remove();

});



});
//------------------------
//계산버튼 클릭시
calcBtn.addEventListener("click",()=>{

  //1. 모든 클래스가 input-number인 요소 얻어오기
  const numbers = document.querySelectorAll(".input-number");

  //2.for문 으로 모든 요소 접근 하여 작성된 값 (value)얻어와 (문자열로 얻어와지니까)
  //숫자로 형변환 Number()한 후 
  // 합계 저장변수 sum 에 누적


  let sum = 0;
  
  for(let i =0; i<numbers.length;i++){
    sum+= Number(numbers[i].value);
  }

  //3.for문 끝나면 alert로 결과 출력
  alert("결과 : "+sum);


});