// input 태그가 focus를 잃었을 때 (blur) : 요소.addEventListener("blur", () => {})
  const less = document.querySelector("#resNameInput");

  less.addEventListener("blur",()=>{
    if(less){
      
    }
  });


//input type checkbox




/*
<input type ="checkbox" class =checkbox1">
<input type ="text" placeholder="메뉴명" class="foodbox1">
<input type ="text" class ="pricebox1" placeholder="가격">

한줄에 5개
15개 이상은 더이상 메뉴를 추가할수 없습니다 alert창.

checked속성되면 부모태그를 지우고

*/

//수정 버튼을 누르면 추가 삭제 종료 창이 생김

 const addBtn = document.querySelector("#addMenu");//추가버튼

  addBtn.addEventListener("click",()=>{

  
  //1.input요소 생성하기
  const inputcheckbox = document.createElement("input");//<input>

  inputcheckbox.setAttribute("type","checkbox");//<input type = "checkbox">

  inputcheckbox.setAttribute("class","checkbox")//<input type = "checkbox" class="checkbox">


  const inputmenubox = document.createElement("input");//<input>

  inputmenubox.setAttribute("type","text");//<input type = "text">

  inputmenubox.setAttribute("class","foodbox");//<input type = "text" class ="foodbox">

  inputmenubox.setAttribute("placeholder","메뉴명");////<input type = "text" class ="foodbox" placeholder="메뉴명">


  const inputpricebox = document.createElement("input");//<input>

  inputmenubox.setAttribute("type","text");//<input type = "text">

  inputmenubox.setAttribute("class","pricebox");//<input type = "text" class ="pricebox">

  inputmenubox.setAttribute("placeholder","가격");////<input type = "text" class ="foodbox" placeholder="가격">


    
//--------조립하기-------------


//9.li.menu 요소에게 자식으로 체크박스, 메뉴명, 가격추가
menu.append(inputcheckbox,inputmenubox,inputpricebox);

//10.이 완성된 div.row를 컨테이너의 마지막 자식으로 추가하기 
container.append(menu);



});






 
 //2.row요소에 class추가하기
checkbox1.classList.add("menu");//<li class = "row"></li>

 //.span요소 생성하기
const menuspan = document.createElement("span");//<span></span>

 //7.span태그에 class 추가하기
  menuspan.classList.add("menu-name");//<span class ="menu-name"></span>


//.span요소 생성하기
 const pricespan = document.createElement("span");//<span></span>

 //7.span태그에 class 추가하기
 pricespan.classList.add("menu-price");//<span class ="menu-price"></span>


//  console.log(row);



//4.type = number 추가하기
// input.type="number";
input.setAttribute("type","number");//<input type = "number">


//5. "input-number" 추가하기
// input.setAttribute("class","test");
input.classList.add("input-number");//<input type="number" class = "input-number">



//8.span태그사이에 내용으로 &times; 추가하기 (innerHTML 사용)
//&times : x표시
//span.innerHTML ="&times;";//<span class ="remove-row">&times;</span>


//=> 단순히 = 는 html요소로 해석해서 문자열로 추가하겠다는 의미라서 리렌더링 일어나지않음
//리렌더링은 기존요소에 새로운요소를 누적할때 일어남.


//--------조립하기-------------


//9.li.menu 요소에게 자식으로 menuspan, pricespan 추가
menu.append(menuspan,pricespan);

//10.이 완성된 div.row를 컨테이너의 마지막 자식으로 추가하기 
container.append(menu);

// console.log(row);

//******************** 

//클릭된 x버튼의 부모요소를 제거
//x버튼은 span태그 : 부모: menu

//1.만들어진 x버튼 span 에 이벤트 리스너 추가

span.addEventListener("click",(e)=>{
  
  //2.현재 이벤트가 발생한 요소 (클릭된 x버튼)의 부모요소를 선택(탐색)

  const parent = e.target.parentElement; //: target 은 span 태그

  //3.부모요소 제거하기
  parent.remove();

});




//만약에 수정버튼을 누르면 히든으로 되어있는 버튼들을 보여달라.
const updateBtn = document.getElementById("updateBtn");
const editContainer = document.querySelector(".edit-container");
const editBtn = document.getElementById("exitBtn");


updateBtn.addEventListener("click",()=>{
  editContainer.classList.remove("b-hidden");
  editContainer.classList.remove("updateBtn");// 수정버튼보이기
});

exitBtn.addEventListener("click",()=>{
  editContainer.classList.add("b-hidden");//완료버튼 숨기기
});
