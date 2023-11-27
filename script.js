var startButton = document.querySelector("#startquiz");
var questionsContainer = document.getElementById('questions-container');
var questionText = document.querySelector(".q-title");

//Timer Variables
var secondsLeft = 30;
var timeEl = document.querySelector("#timer");
var mainEl = document.getElementById("main");

var question1 = document.getElementById('countdown');
var number1 = document.createElement("div"); 
var boxQuestionEl = document.querySelector(".box-question");
var correctMessage = document.querySelector("#correct_answer");
var wrongMessage = document.querySelector("#incorrect_answer");

//Selects answer choices
var answer_aText = document.querySelector("#answer-a");
var answer_bText = document.querySelector("#answer-b");
var answer_cText = document.querySelector("#answer-c");
var answer_dText = document.querySelector("#answer-d");
//questions array holds the quiz questions.
var index = 0;
var questions = [
    {
        question: "What is Javascript?",
        answers: ["A programming language", "A city in Europe", "A store", "A medical tool"]
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<script>", "<javascript>", "<js>", "<scripting>"]
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: ["True", "False", "Maybe", "Sometimes"]
    },
    {
        question: "How do you write Hello World in an alert box?",
        answers: ["alert", "msg", "alertBox", "msgBox"]
    },
    {
        question: "What does MVC stand for?",
        answers: ["Model-View-Controllers", "Minnesota-Voucher-Camp", "Marble-Velocity-Curve", "May-Viking-Cup"]
    }
]; //end of global variables

//Starts Timer & displays question
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    //adds hidden class to start button
startButton.setAttribute("class", "hidden" );
questionsContainer.removeAttribute("class");
startTimer();
displayQuestion();

})


function displayQuestion() {
    correctMessage.classList.add("hidden");
    wrongMessage.classList.add("hidden");
  
    console.log(correctMessage);
    console.log(wrongMessage);
    //Adds click event to answer choices
answer_aText.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer(event);
   
})
answer_bText.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer(event);
    
})
answer_cText.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer(event);
    
})
answer_dText.addEventListener("click", function(event) {
    event.preventDefault();
    checkAnswer(event);
   
})

    //Makes the test text content, the quiz question and answers in my array 
questionText.textContent = questions[index].question;
answer_aText.textContent = questions[index].answers[0];
answer_bText.textContent = questions[index].answers[1];
answer_cText.textContent = questions[index].answers[2];
answer_dText.textContent = questions[index].answers[3];


}
function startTimer() {
   
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent =  secondsLeft + " seconds remaining.";
        
        if(secondsLeft === 0) {
        clearInterval(timeInterval);
        //questionsLoop();
            //outofTime();
        }
    //every second the timer loses a second as time descreases
    },1000);
    }
function checkAnswer(event) {
    console.log("checkAnswer")
        //Stop timer
        
//console.log(event,"event")
console.log("-------")
console.log(event.target.textContent,"event.target")
console.log(questions[index].answers[0])
        //Check if the correct answer is chosen
   // var selectedAnswer= document.querySelector(".option");
        // Check if the selected answer is correct
    if (event.target.textContent === questions[index].answers[0]) {
        // Correct answer

        correctMessage.classList.remove("hidden");
        wrongMessage.classList.add("hidden");
        questionsLoop();
       
    } else {
        console.log("incorrect");
        // Incorrect answer
        console.log(correctMessage);
    console.log(wrongMessage, 'Wrong message')
       
        wrongMessage.classList.remove("hidden");
        correctMessage.classList.add("hidden");
 //index++
questionsLoop();
}}    

//setTimeout();
//Displays question box once startbutton is clicked


// as a person clicks on an answer, it will increment our index
// remove the current question and answer from the dom
// and replace it with the next question and answers (using our index to keep track)


//index++;
    
    // Move to the next question after a brief delay
    setTimeout(function() {
        // Increment the question index
       // index++;
     
        // Reset the timer and question display
        //secondsLeft = 30;
        timeEl.textContent = " ";
        correctMessage.classList.add("hidden");
        wrongMessage.classList.add("hidden");
        // Display the next question and start the timer again
       // displayQuestion();
        //startTimer();
    }, 2000);


//places  timer on page
//function timeBox(){
    timeEl.textcontent = " ";
    var timeoutBox = document.createElement("box");

    timeoutBox.setAttribute("style", "font-size:20px; font-color:black; border-radius:5px ;")
  
  mainEl.appendChild(timeoutBox);
//}
//create a loop to read through array to move to the next question.
function questionsLoop() {
    index++
    questionText.textContent = questions[index].question;
    answer_aText.textContent = questions[index].answers[0];
    answer_bText.textContent = questions[index].answers[1];
    answer_cText.textContent = questions[index].answers[2];
    answer_dText.textContent = questions[index].answers[3];
    // for (index = 0; index < questions.length; index++) {
    //    // const element = questions[index];
        
    //         console.log("Array is attempting to iterate!");
    // }
}