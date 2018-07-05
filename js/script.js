function count(mynumber){
  var number=0;
  if(mynumber>100) {
  alert("Number is greater than 100!")
}
    else{
    alert("Hello!"+" You have entered "+mynumber+".")
    }
  if(mynumber%2==0) {
        startingNumber=0
}
    else {
      startingNumber=1
    }
  for(i=startingNumber;i<=mynumber;i+=2) {
    number=number+i+"<br>"
}

document.getElementById("output").innerHTML=number;

}
