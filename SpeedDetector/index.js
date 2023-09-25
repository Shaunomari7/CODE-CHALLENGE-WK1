
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calculateSpeedStatus = require('./speedDetector');

function promptForSpeed() {
  rl.question("Enter the speed of the car (in km/h): ", (speed) => {
    const speedStatus = calculateSpeedStatus(parseFloat(speed));
    console.log(speedStatus);
    rl.close();
  });
}

promptForSpeed();
