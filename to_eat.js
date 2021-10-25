//If you have less than 20 minutes, you want your program to tell you to pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates.
//If you have at least 20 minutes but no more than 30 (because you've been working hard and are ahead of schedule), you want your program to tell you that you deserve a break and could try a place in Gastown.
//If you have more than 30 minutes, you want your program to remind you that this is a bootcamp after all and you should probably reconsider.



function whatToDoForLunch(hungry, availableTime) {
  
  if (hungry == false) {
    console.log("good ,your not hungry keep working")
  } else if( hungry && availableTime <= 20 ) {

  console.log("pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates.");

  } else if (hungry && availableTime < 30 || availableTime > 20  ) {          
    console.log("you deserve a break and could try a place in Gastown.");

  } else if (hungry && availableTime >= 30) {
    console.log("this is a bootcamp after all and you should probably  reconsider"); 
  } else 
  { console.log("____")
}
}



console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
console.log("---");
