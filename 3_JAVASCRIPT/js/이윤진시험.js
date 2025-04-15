const box = document.querySelector("#box");
const backgroundcolor = document.querySelector("#backgroundcolor");
const total = document.querySelector("#total");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const color = document.getElementById("color");
const size = document.getElementById("size");
const bold = document.getElementById("bold");
const horizon = document.querySelector("#horizon");
const allign = document.querySelector("#align");



document.querySelector("#changeButton").addEventListener("click",function(){
 
    box.style.backgroundColor=box.value;
    box.style.Color=color.value;
    box.style.backgroundColor=box.value;
    total.innerText= total.value;
    box.style.border =box.value;
    box.style.height=height.value;
    box.style.width=width.value;
    box.style.size=size.value;
    total.horizon=total.value;
    total.allign=total.value;
  
});

