const questions = [

  {question: 'Group spends 9 hours returning jewelry', answers: ['Ocean\'s 8', 'The Lord of the Rings', 'Return of Jewel Thief', 'Reservoir Dogs'], correct: 'The Lord of the Rings'},

  {question: 'Talking frog convinces son to kill his dad', answers: ['Star Wars', 'Muppets Most Wanted', 'Fear and Loathing in Las Vegas', 'Tucker and Dale vs Evil'], correct: 'Star Wars'},

  {question: 'Noseless guy has unhealthy obsession with a teenage boy', answers: ['The Elephant Man', 'The Hunchback of Notre Dame', 'Harry Potter', 'One Hour Photo'], correct: 'Harry Potter'},

  {question: 'The one where Jennifer Aniston lost her man in front of the world', answers: ['A Mighty Heart', 'By the Sea', 'Mr and Mrs Smith', 'Atonement'], correct: 'Mr and Mrs Smith'},

  {question: 'Kid comes out of the closet', answers: ['Say My Name', 'The Chronicles of Narnia', 'Love, Simon', 'Twilight'], correct: 'The Chronicles of Narnia'},

  {question: 'A family\'s first AirBnB experience goes very wrong', answers: ['The Shining', 'National Lampoon\'s Vacation', 'The Holiday', 'Home Alone'], correct: 'The Shining'},

  {question: 'Paranoid billionaire afraid of immigrant', answers: ['Wall Street', 'Arbitrage', 'Batman vs Superman', 'Citizen Kane'], correct: 'Batman vs Superman'},

  {question: 'I\'m not supposed to talk about it', answers: ['The Secretary', 'The Secret', 'Anger Management', 'Fight Club'], correct: 'Fight Club'},

  {question: 'Reclusive weirdo and his mutant employees lure children into factory', answers: ['The Hunt', 'Chocolat', 'Charlie and the Chocolate Factory', 'Forrest Gump'], correct: 'Charlie and the Chocolate Factory'},

  {question: 'Man buys singing rabbit from china town, rabbit gets wet and breeds lizards, lizards destroy town', answers: ['Gremlins', 'North', 'Who Framed Roger Rabbit', 'Donnie Darko'], correct: 'Gremlins'}

];

var currentQuestion = 0;
var score = 0;
var uiQuestion = 1;

//0. Load Quiz
$('#start-button').click(function(e) {

  e.preventDefault();

  $('fieldset').html('<legend class="js-question">Group spends nine hours returning jewelry</legend><label for="answer1"></label><input type="button" id="answer1" class="row" value="Ocean\'s 8"><label for="answer2"></label><input type="button" id="answer2" class="row"  value="The Lord of the Rings"><label for="answer3"></label><input type="button" id="answer3" class="row"  value="Return of Jewel Thief"><label for="answer4"></label><input type="button" id="answer4" class="row"  value="Reservoir Dogs">');

});

// 1. Display question
function displayQuestion() {
$('.question-number').html(uiQuestion);
$('.js-question').html(questions[currentQuestion].question);

for (let i = 0; i < questions[currentQuestion].answers.length; i++) {
  $('#answer' + (i + 1)).val(questions[currentQuestion].answers[i]);
}

};

// 2. Users pick an answer

$('fieldset').on('click', 'input[type="button"]', function() {
  checkAnswer(this.value);
});

// 3. Users find out whether the answer is right or wrong
function checkAnswer(ans) {
  if (ans === questions[currentQuestion].correct) {
   $('.quiz-data__feedback').html('<p class="correct">Correct!</p>');
   if (score < questions.length) {
     score++;
     };
    $('.score').html(score);
    nextQuestion();
  } else {
    $('.quiz-data__feedback').html('<p class="incorrect">Incorrect!<br> <span class="right-answer"> The answer was: ' + questions[currentQuestion].correct + '</span></p>');
    nextQuestion();
  }
}

// 4. Quiz data is updated and new question is displayed
// If final question, final score is shown
function nextQuestion() {
  if (uiQuestion < questions.length) {
  currentQuestion++;
  uiQuestion++;
  displayQuestion();
} else {
  $('fieldset').html('<legend>Your final score was: ' + score + ' out of ' + questions.length + '</legend><label for="start-button"><button id="start-button" role="button" name="start-button">Begin Again</button>');
}
};