var wrapper=document.body.querySelector(".wrapper");
var dragon=10;
var user=5
var inputNumber = Number(prompt("How many times would you like to hit the dragon?"))
if(inputNumber<5){
 var damage = Math.floor(Math.random() * 5);
  for(var i=0; i<5;i--){
    dragon=dragon-damage
  }
}else{
  for(var i=0; i<5;i--){
    dragon=dragon-1
  }
}
if(dragon>=10){
  wrapper.innerHTML= "You beat the dragon!"
}if(dragon<10){
  wrapper.innerHTML= "You lost. Try again another time!"
}