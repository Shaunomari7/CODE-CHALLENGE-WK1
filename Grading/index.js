
const readline = require('readline');
const getGrade = require('./grading');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptForGrade() {
  rl.question("Enter the student's score (between 0 and 100): ", (score) => {
    const grade = getGrade(parseInt(score));
    console.log(`Grade: ${grade}`);
    rl.close();
  });
}

promptForGrade();
