let userScore= 0;

let visitorName= prompt('Hey, welcome! What\'s your name?')
//console.log('visitor name')
alert (`Nice to meet you, ${visitorName}. Lets play a guessing game so you can get to know me! Yes or no responses please.`);

let birdQuestion= prompt('One of my favorite hobbies is to bird watch, yes or no?').toLowerCase();
// console.log('if birdQuestion=== yes, correct');//
if (birdQuestion === 'yes' || birdQuestion === 'y'){
  alert('I love birds, I keep track of the birds I\'ve seen.');
  userScore++;
}
else if(birdQuestion === 'no' || birdQuestion === 'n'){
  alert('I do bird watch, my favorite sighting was that of an Indigo Bunting.');
}else {
  alert('That wasn\'t a yes or no answer. That\'s not fun.');
}

let pythonQuestion = prompt('Was Python my first coding language?').toLowerCase();
// console.log('if pythonQuestion=== yes, correct');//
if (pythonQuestion === 'yes' || pythonQuestion === 'y'){
  alert('You are correct, python for the win!');
  userScore++;
}
else if (pythonQuestion === 'no'|| pythonQuestion ==='n'){
  alert('Python was my first coding language, still learning');
}
else{
  alert(`C'mon, ${visitorName}. Humor me.`);
}

let sonQuestion= prompt('Am I a mom?').toLowerCase();
console.log('sonQuestion=== yes, correct');//
if (sonQuestion === 'yes' || sonQuestion === 'y'){
  alert('You\'re right! He\'s is a sweet little person.');
  userScore++;
}
else if (sonQuestion === 'no' || sonQuestion === 'n'){
  alert('I actually have a little human who calls me "mom".');
}
else{
  alert('There\'s only 2 more, questions left. Hang in there.');
}

let swimmingQuestion = prompt('Do I know how to swim?').toLowerCase();
// console.log('if swimmingQuestion=== yes, correct');//
if (swimmingQuestion === 'yes' || swimmingQuestion === 'y'){
  alert('Unfortunately I don\'t know how to swim. I am currently learning.');
}
else if (swimmingQuestion === 'no' || swimmingQuestion === 'n'){
  alert('You are correct! I am learning right now, I just taught myself how to freestyle. Breathing... that I need help with.');
  userScore++;
}
else{
  alert('Swimming against the tide here, huh?');
}

let keyboardQuestion= prompt('Did I go out my way to purchase a loud keyboard for this class?').toLowerCase();
// console.log('if keyboardQuestion=== yes, correct');//
if (keyboardQuestion === 'yes' || keyboardQuestion === 'y'){
  alert('You guessed right! I love the clicking clacking sounds.');
  userScore++;
}
else if (keyboardQuestion === 'no' || keyboardQuestion === 'n'){
  alert('I did buy a keychron keyboard. The sound of the keys is soothing to me.');
}
else{
  alert('You made it! Just one last message.');
}


let age=30;
let ageAttempts=4;
while(ageAttempts>0){
  let ageGuess= prompt("How old am I? Guess between 25 and 35.");
  ageAttempts--;
  let correct= false;
  if (ageGuess==age){
    alert('You are correct, three decades. 30 years old....just old.');
    ageAttempts=0;
    correct=true;
    userScore++;
  }else if (ageGuess>age){
    alert('Not quite a dinosaur yet. Keep guessing.');
  }else if(ageGuess<age){
    alert('Too low *knees crack*. Try again.');
  }if (ageAttempts==0 && correct== false){
    alert('All great guesses, but I\'m 30 years old.');
  }
}


// let fruitAttempt= 6;
// let fruitLoop = ['mango', 'grapefruit', 'watermelon', 'strawberries'];
// while(fruitAttempt>0){
//   let fruitGuess= prompt('I love fruit, guess some one of my favorites.').toLowerCase();
//   fruitAttempt--;
//   let correct= false;
//   if (fruitGuess==fruitLoop){
//     alert(`Correct! I enjoy eating $[fruitGuess].`)
//     fruitAttempt=0;
//     correct=true;
//     userScore++;
//   }else if(fruitGuess != fruitLoop ){
//     alert('That sounds delicious, but it\'s not one of my favorites. Try again.');
//   }
//   if (fruitAttempt== 0 && correct==false){
//     alert(`All good guesses, but some of my favorite fruits are ${fruitLoop[0][3]} and ${fruitLoop[3]}.`);
//   }
// } 
// // for (;i<=fruitAttempt; fruitGuess=== fruits){
// //   alert("You guessed right! Keep going!");
// //   userScore++;
// // }


alert(`Thank for allowing me to share with you, ${visitorName}. You guessed ${userScore} out of 7 answers correctly. If you want to know a little more about me keep reading.`);

