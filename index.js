
let monMot = "non";

let reverseMot = [];

let notReverseMot = "";

for(var i = 0; i < monMot.length; i++){
  reverseMot.push(monMot[i]);
}

for(var i = 0; i < monMot.length; i++){
  notReverseMot += reverseMot.pop();
}

if(notReverseMot === monMot) {
  console.log("Le mot est un palaindrome")
} else {
  console.log("Le mot n'est un palaindrome")
}
 