
function addButtonValue(whichButton){
  document.getElementById('result').value += whichButton;
  console.log("it's working")
}


function clearScreen(){
  document.getElementById('result').value ="";
}

function equalsAnswer(){
   document.getElementById('result').value = eval(document.getElementById('result').value);
}

function change(){
  
  if( document.getElementById('result').value>0){
    document.getElementById('result').value = "-"+ document.getElementById('result').value;
  }else if(document.getElementById('result').value<0){
    document.getElementById('result').value = document.getElementById('result').value*-1;
  }
}








