const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyQuestion = function(question, answers, nextQuestion) {
  rl.question(question, (answer) => {
    answers.push(answer);

    if(nextQuestion) {
      nextQuestion(answers);
    } else {
      rl.close();
      const generatedProfile = `${answers[0]} loves listening to ${answers[2]} while ${answers[1]}, devouring ${answers[4]} for ${answers[3]}, prefers ${answers[5]} over any other sport, and is amazing at ${answers[6]}.`
      return console.log(generatedProfile);
    }
  })
};

const questionOne = () => {
  surveyQuestion(`What's your name? Nicknames are also acceptable `, [], questionTwo);
}

const questionTwo = (answers) => {
  surveyQuestion(`What's an activity you like doing? `, answers, questionThree);
}

const questionThree = (answers) => {
  surveyQuestion(`What do you listen to while doing that? `, answers, questionFour);
}

const questionFour = (answers) => {
  surveyQuestion(`Which meal is your favourite? (ex. brunch or brunch) `, answers, questionFive);
}

const questionFive = (answers) => {
  surveyQuestion(`What's your favourite thing to eat for that meal? `, answers, questionSix);
}

const questionSix = (answers) => {
  surveyQuestion(`Which sport is your absolute favourite? `, answers, questionSeven);
}

const questionSeven = (answers) => {
  surveyQuestion(`What is your superpower? In a few words, tell us what you're amazing at `,answers, null);
}

questionOne();



