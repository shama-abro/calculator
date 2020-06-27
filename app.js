function getNum(num) {

  var result = document.getElementById("result");
result.value += num;
}

function clearRsl(){
  var result = document.getElementById("result");
  result.value = "";
}

 function getresult(){
  var result = document.getElementById("result");
  //  result.value = eval(result);
result.value = eval(result.value)
}