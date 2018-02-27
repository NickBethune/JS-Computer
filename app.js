var numButs=document.getElementsByClassName("num");
var opButs = document.getElementsByClassName("op");
var ent=document.getElementById("submit");
var num1="";
var haveNum1=false;
var num2="";
var haveNum2=false;
var op;
var eq = document.getElementById("equation");


//Initializers
ent.addEventListener("click", function(){haveNum2 = true;updateEq(); });
for(var i = 0; i<numButs.length; i++){
  numButs[i].addEventListener("click", function(){
    setNum(this.innerHTML);
    updateEq();
  });
}

for(var i = 0; i<opButs.length; i++){
  opButs[i].addEventListener("click", function(){setOp(this.innerHTML); updateEq();});
}


//Functions

function updateEq(){
  var str = "";
  if(!haveNum1){
    str+=num1;
  }
  if(haveNum1 && op){
    str+=num1+" "+op+" ";
  }
  if(!haveNum2){
    str +=num2;
  }
  if(haveNum2){
    str+=num2+" = "+evaluate();
  }
  console.log(str);
  eq.innerHTML = str;
}

function setOp(operator){
  if(!haveNum1){
    haveNum1=true;
    op = operator;
  }

}

function setNum(num){
  if(op){
    num2 += num;
    console.log("num2");
  }
  else{
    num1 += num;

  }
}
function evaluate(){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  var sum;
  if(op){
    switch(op){
      case "+":
        sum= num1+num2||0;
        break;
      case "-":
        sum= num1-num2||0;
        break;
      case "x":
        sum= num1*num2;
        break;
      case "/":
        sum= num1/num2||1;
        break;
    }
  }
  else{sum = num1;}

  haveNum1 = false;
  haveNum2 = false;
  num1="";
  num2="";
  op = "";
  return sum;
}
