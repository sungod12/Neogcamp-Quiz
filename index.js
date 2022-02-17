

// const username=readlineSync.question("What is your name?\n");
// console.log(`Welcome ${username}`);

// const age=readlineSync.question("What is your age?\n");
// if (age>25)
//   console.log("You are equal to required age!");
// else
//   console.log("Sorry.You are less than the required age")

// let score=0;
// function checkAnswer(question,answer){
//     const UsersAnswer=readlineSync.question(question);
//     if (answer==UsersAnswer){
//       score++;
//       console.log("You were right!");
//     }else{
//       console.log("Better luck next time.")
//     }
// }
// checkAnswer("What is square root of 9?",3);

// var numberOfStars = readlineSync.question('Enter the number of stars you want to print');
// printPattern(numberOfStars);

// function printPattern(numberOfStars){
//   for(let i=0;i<numberOfStars;i++){
//     for(let j=0;j<numberOfStars-i;j++){
//       process.stdout.write("*");
//     }
//     console.log("");
//   }
// }

const readLine = require('readline-sync');
let scores = [{ 'name':'Suresh','score': 4 }, {'name':'William','score': 2 }];
const questions = [{
  question: "Who was India's first President?",
  options: ['Dr.Rajendra Prasad', 'Sarvepalli Radhakrishnan', 'Jawaharlal Nehru', 'Sarvepalli Radhakrishnan'],
  answer: 'Dr.Rajendra Prasad'
}, {
  question: "Who created India's Space program? ",
  options: ['Dr Homi J Bhabha', 'Prof.Vikram Sarabhai', 'Dr.APJ Abdul Kalam', 'Satish Dhawan'],
  answer: 'Prof.Vikram Sarabhai'
},
{
  question: "Which is cleanest city of India in 2022?",
  options: ['Delhi', 'Mumbai', 'Indore', 'Surat'],
  answer: 'Indore'

},
{
  question: "Who started green revolution in India? ",
  options: [' Norman E Borlaug', 'M.S Swaminathan', 'Dr.APJ Abdul Kalam', 'Indira Gandhi'],
  answer: 'M.S Swaminathan'
},
{
  question: "Who is founder of People Group? ",
  options: ['Anupam Mittal', 'Ashneer Grover', 'Aanchal Mittal', 'Aman Gupta'],
  answer: 'Anupam Mittal'
},
];

let name="";
function greet() {
  name = readLine.question('What is your name?\n');
  console.log(`\nWelcome ${name} to The India Quiz`);
  console.log("Lets check how well do you know your country.\n");
  
}



function displayQuestions() {
  let currentIdx = 0;
  let score = 0;
  while (currentIdx < questions.length) {
    console.log(`${currentIdx + 1}:${questions[currentIdx].question}`);
    usersAnswer = readLine.keyInSelect(questions[currentIdx].options, 'Which is the right answer?');
    if (questions[currentIdx].options[usersAnswer] === questions[currentIdx].answer) {
      score++;
    }
    currentIdx++;
    console.log("");
  }
  console.log(`Your score is ${score}`);
  scores.push({ name,score });
  console.clear(); 
}


function displayScores() {
  console.log("!!!!Scores!!!!");
  scores.map((val) => console.log(`${val.name}:${val.score}`));
}

function checkHighScore() {
  let topper=false;
  let userDetails=scores[scores.length-1];
  for(let i=0;i<scores.length;i++){
    if (userDetails.score>scores[i].score)
          topper=true;
  }
  if (topper==true)
    console.log(`Congratulations ${userDetails.name}!!!.You have achieved a high score.Send me a screenshot in order to update.`);
  return;
}

greet();
displayQuestions();
displayScores();
checkHighScore();
















