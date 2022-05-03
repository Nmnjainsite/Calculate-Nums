var input = document.querySelector("#input");
var inputTxt = document.querySelector("#input-txt");

var btnPlus = document.querySelector("#btn-plus");
var btnMinus = document.querySelector("#btn-minus");
var btnMultiply = document.querySelector("#btn-multiply");
var btnDivide = document.querySelector("#btn-divide");
var output = document.querySelector("#output")

function add(a,b){
    var sum = a+b;
    return sum;
}


function clickHandler(){
    var answer = (Number(input.value)+Number(inputTxt.value) )
  output.innerText = answer;


}


function clickHandler2(){
    var answer2 = (Number(input.value)-Number(inputTxt.value) )
  output.innerText = answer2;


}

function clickHandler3(){
    var answer2 = (Number(input.value)*Number(inputTxt.value) )
  output.innerText = answer2;


}

function clickHandler4(){
    var answer2 = (Number(input.value)/Number(inputTxt.value) )
  output.innerText = answer2;


}
    

btnPlus.addEventListener("click", clickHandler)
btnMinus.addEventListener("click", clickHandler2)
btnPlus.addEventListener("click", clickHandler)
btnMultiply.addEventListener("click", clickHandler3)
btnDivide.addEventListener("click", clickHandler4)