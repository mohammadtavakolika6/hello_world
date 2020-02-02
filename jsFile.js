var btn=document.getElementById("btn");
var txt=document.getElementById("inputtxt");
var ul=document.querySelector("ul");
function addsheets(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(txt.value));
    ul.appendChild(li);
    txt.value="";
}
btn.addEventListener("click",function () {
    if(txt.value.length > 0) {
        addsheets();
    }
    });
txt.addEventListener("keypress",function (event) {
    if(txt.value.length > 0 && event.keyCode===13) {
        addsheets();
    }
});
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("grad");
function changeColor(){
    body.style.background="Linear-gradient(to right," + color1.value +","+ color2.value + ")";
}
color1.addEventListener("input",changeColor);
color2.addEventListener("input",changeColor);

let name="mohammad";
const fname="tavakolikia";
 

