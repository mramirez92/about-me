let visitorName= prompt('Hey, welcome! What\'s your name?')
alert (`Nice to meet you, ${visitorName}. Lets play a guessing game so you can get to know me! Yes or no responses please.`);

let birdQuestion= prompt('One of my favorite hobbies is to bird watch, yes or no?').toLowerCase();

if (birdQuestion === 'yes'){
  alert('I love birds, I keep track of the birds I\'ve seen.');
}
else if(birdQuestion === 'no'){
  alert('I do bird watch, my favorite sighting was that of an Indigo Bunting.');
}else {
  alert('That wasn\'t a yes or no answer. That\'s not fun.');
}

let pythonQuestion = prompt('Was Python my first coding language?').toLowerCase();

if (pythonQuestion === 'yes'){
  alert('You are correct, python for the win!');
}
else if (pythonQuestion === 'no'){
  alert('Python was my first coding language, still learning');
}
else{
  alert(`C'mon, ${visitorName}. Humor me.`);
}

let sonQuestion= prompt('Am I a mom?').toLowerCase();

if (sonQuestion === 'yes'){
  alert('You\'re right! He\'s is a sweet little person.');
}
else if (sonQuestion === 'no'){
  alert('I actually have a little human who calls me "mom".');
}
else{
  alert('There\'s only 2 more, questions left. Hang in there.');
}

let swimmingQuestion = prompt('Do I know how to swim?').toLowerCase();

if (swimmingQuestion === 'yes'){
  alert('Unfortunately I don\'t know how to swim. I am currently learning.');
}
else if (swimmingQuestion === 'no'){
  alert('You are correct! I am learning right now, I just taught myself how to freestyle. Breathing... that I need help with.');
}
else{
  alert('Swimming against the tide here, huh?');
}

let keyboardQuestion= prompt('Did I go out my way to purchase a loud keyboard for this class?').toLowerCase();
if (keyboardQuestion === 'yes'){
  alert('You guessed right! I love the clicking clacking sounds.');
}
else if (keyboardQuestion === 'no'){
  alert('I did buy a keychron keyboard. The sound of the keys is soothing to me.');
}
else{
  alert('You made it! Just one last message.');
}

alert(`Thank for allowing me to share with you, ${visitorName}. If you want to know a little more about me keep reading.`);

