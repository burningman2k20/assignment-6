function myFunction(){
  document.getElementById('myDropdown').classList.toggle("show");
}

function myFunction2(){
  document.getElementById('otherDropdown').classList.toggle("show-two");
}

function getStarted(){
  alert("Geting Started button clicked!")
}

function switchImageOne(){
  var x = document.getElementByClassName("service-column-one");
   document.getElementByClassName("service-column-one").src = "service-1-2.png";
}

//function switchImage(){
//  var x = document.getElementById("myP").tagName;
 //document.getElementById("demo").innerHTML = x;
//}

//function contactUS() {
//  var txt;
//  var person = prompt("Please enter your Name:", "Name");
//  var person = prompt("Please enter your Email:", "mail@adress.com");
//  if (person == null || person == "") {
    //txt = "User cancelled the prompt.";
  //} else {
//    txt = "Hello " + person + "! How are you today?";
//  }
//  document.getElementById("demo").innerHTML = txt;
//}
