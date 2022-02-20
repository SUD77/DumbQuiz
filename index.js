console.clear();
console.log("Welcome to DumbQuiz\n");


let correctAnswers = 0;
let qCounter = 1;

const readLineSync = require('readline-sync');
let name = readLineSync.question('What is your name?\n');

console.log("\nOk!!! " + name +"," +" Let's check your dumbness!\n");

const questionRepository = [
  { question : "What is the sum of 2 + 2 ?",
    options : ["4","four","3+1","I am stupid"],
    correctAns : "4"
  },

  { question : "What do you see when you look into Mirror ?",
    options : ["Image","Hopelessness",`Dumb ${name}`,"Wrinkles"],
    correctAns : "3"
  },

  { question : "How to correctly define yourself?",
    options : ["Intelligent","Stupid Ass","Crazy","Good"],
    correctAns : "2"
  },

  { question : "What do you call an Ass giving a quiz ?",
    options : ["Intelligent Ass","Ass-instein","Smart Ass",`${name}`],
    correctAns : "4"
  },

  { question : "What is the synonym of Stupid?",
    options : ["Mindless","Foolish","Unintelligent",`${name}`],
    correctAns : "4"
  },
]


function startquiz(question){
  console.log(`Question ${qCounter}:\t ${question.question} \n 1. ${question.options[0]} \n 2. ${question.options[1]} \n 3. ${question.options[2]} \n 4. ${question.options[3]} \n`);

  const attempt = readLineSync.question('\nEnter your answer..... \n');

  if(attempt === question.correctAns){
    correctAnswers++;
    console.log("\nYayayay!!! You are one close to be a Dumb Champion.\n")
  }else{
    console.log("\nIncorrect Answer... You are beyond dumb.. Disappointed. \n");
  }
  qCounter++;
}

questionRepository.forEach(startquiz);

console.log("\nYour Score:\t" + correctAnswers + "\n");

if(correctAnswers == questionRepository.length){
  console.log("Congrats, You're the King of the Dumbs.\n");
}else{
  console.log("Sorry.You are not Dumb enough.\n")
}