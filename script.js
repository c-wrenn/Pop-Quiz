//var timer = 0;
var startButton = document.querySelector("#startquiz");
var questionsContainer = document.getElementById('questions-container');
//var question1 = document.querySelector("box-question");
var question1 = document.getElementById('countdown');
var number1 = document.createElement("div"); 
var boxQuestionEl = document.querySelector(".box-question");
var index = 0;
//Selects elements for questions and options
//const questions_options= document.querySelector("questions-container");
//Selects elements for the quiz results after quiz is completed
//const quiz_results=document.querySelector(".quiz_results");
//const quit_btn= document.querySelector(".reset-btn .quit");
//const reset_btn= quiz_done.querySelector(".buttons .reset"); 

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    //adds hidden class to start button
startButton.setAttribute("class", "hidden" );
questionsContainer.removeAttribute("class");
// startButton.onclick = ()=>{
    //adds
// questions_options.classList.add("")
// }

// we'll have an array of objects.
// each object is going to have a question and an array of answers
var questions = [
    {
        question: "How many fingers am I holding up?",
        answers: ["one", "two", "three", "four"]
    },
    {
        question: "What is your favorite pizza?",
        answers: ["one", "two", "three", "four"]
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

// as a person clicks on an answer, it will increment our index
// remove the current question and answer from the dom
// and replace it with the next question and answers (using our index to keep track)
function quesCount() {
//var ques = questions{question};
//var answerchoices = questions {answers};
var ques1= document.querySelector("options-list")
//var ques1= document.querySelector("#questions-container");
ques1.textContent= questions[0] + "this is a question";
    //document.body.appendChild();
    console.log(questions[0]);
    index++

    
}

// If Quit button is clicked
//quit_btn.onclick = ()=>{
// quiz_results.classList.remove("activequestion")   //hide the quiz result box
//}
quesCount();
setTimer();
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


//we need a carosel box that uses a click eventlistener to go the next image to 