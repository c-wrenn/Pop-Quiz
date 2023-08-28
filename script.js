//var timer = 0;
var startButton = document.querySelector("#startquiz");
var questionsContainer = document.getElementById('questions-container');
//var question1 = document.querySelector("box-question");
var question1 = document.getElementById('countdown');
var number1 = document.createElement("div"); 
var boxQuestionEl = document.querySelector(".box-question");
var index = 0;

var correct = document.querySelector("#correct_answer");
var wrong = document.querySelector("#incorrect_answer");

//var questionText;
var questionText = document.querySelector(".q-title");
//Selects answer choices
var answer_aText = document.querySelector("#answer-a");
var answer_bText = document.querySelector("#answer-b");
var answer_cText = document.querySelector("#answer-c");
var answer_dText = document.querySelector("#answer-d");
//questions array holds the quiz questions.
var questions = [
    {
        question: "How many fingers am I holding up?",
        answers: ["one", "two", "three", "four"]
    },
    {
        question: "What is your favorite pizza?",
        answers: ["ccc", "ffff", "toast", "four"]
    },
    {
        question: "How many times should you shower a week?",
        answers: ["one", "two", "three", "four"]
    },
    {
        question: "How many hours will it take?",
        answers: ["five", "ten", "seven", "four"]
    },
    {
        question: "How many fingers am I holding up?",
        answers: ["one", "two", "three", "four"]
    }
];



function quesCount() {
      //Makes the test text content the quiz question and answers in my array 
questionText.textContent = questions[index].question;
answer_aText.textContent = questions[index].answers[0];
answer_bText.textContent = questions[index].answers[1];
answer_cText.textContent = questions[index].answers[2];
answer_dText.textContent = questions[index].answers[3];

//Create click event for answer choices
//When an answer choice is clicked, the timer will stop and the next question
// is displayed, by reading through our questions array.
//Once the next question is displayed we want to start the timer again by calling the setTimer function.

//Adds clcik event to answer choices

answer_aText.addEventListener("click", function(event) {
    event.preventDefault();
   ques1correct();
})
answer_bText.addEventListener("click", function(event) {
    event.preventDefault();
   ques1correct();
})
answer_cText.addEventListener("click", function(event) {
    event.preventDefault();
   ques1correct();
})
answer_dText.addEventListener("click", function(event) {
    event.preventDefault();
    //stops timer
    //We might want to not use the outoftime function and instead just call the starttimer function again.
   // outofTime();
   ques1correct();
})



index++;

    }
    //this function will contain an if statement if the correct answer is clicked
function ques1correct() {
answer_aText = true;
answer_bText = false;
answer_cText = false;
answer_dText = false;

    if(answer_aText.clicked == true) {

        //hides Wrong! to display correct!
        wrong.setAttribute("class", "hidden_Wrong" );
     
    } else { (answer_bText.clicked == false || answer_cText.clicked == false || answer_dText.clicked == false)
        //hides Correct! to display wrong!
        correct.setAttribute("class", "hidden_Correct" );
    };
};

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    //adds hidden class to start button
startButton.setAttribute("class", "hidden" );
questionsContainer.removeAttribute("class");

quesCount();
setTimer();

// as a person clicks on an answer, it will increment our index
// remove the current question and answer from the dom
// and replace it with the next question and answers (using our index to keep track)


   //hide the quiz result box

})


var secondsLeft = 30;
var timeEl = document.querySelector("#timer");
var mainEl = document.getElementById("main");

//timer function
function setTimer() {
var timeInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent =  secondsLeft + " seconds remaining.";
    if(secondsLeft === 0) {
        clearInterval(timeInterval);

        outofTime();
    }
//every second the timer loses a second as time descreases
},1000);
}
//stops timer
function outofTime(){
    timeEl.textcontent = " ";
    var timeoutBox = document.createElement("box");

    timeoutBox.setAttribute("style", "font-size:20px; font-color:black; border-radius:5px ;")
  
  mainEl.appendChild(timeoutBox);
}
//setTimeout(() {}, 30000);


