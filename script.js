//var timer = 0;
var startButton = document.querySelector("#startquiz");
//var question1 = document.querySelector("box-question");
var question1 = document.getElementById('countdown');
var number1 = document.createElement("div"); 


startButton.addEventListener("click", function() {
    startButton.preventDefault();
var ques1 = document.createElement("ol");

var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");


number1.textContent ="this is question1";

number1.appendChild(ques1);
number1.setAttribute("style", "font-size:20px;");
ques1.setAttribute("style", "background-color: #333333;  padding: 20px; color:white")

ques1.appendChild(li1);
ques1.appendChild(li2);
ques1.appendChild(li3);
ques1.appendChild(li4);

li1.textContent = "Tacos and magaritas";
li2.textContent = "Pizza";
li3.textContent = "MacandCheese";
li4.textContent = "Waffles and Syrup";

li1.setAttribute("style", "padding: 5px; margin-left:35px; background:#555");
li2.setAttribute("style", "padding: 5px; margin-left:35px; background:#ccc");
li3.setAttribute("style", "padding: 5px; margin-left:35px; background:#555");
li4.setAttribute("style", "padding: 5px; margin-left:35px; background:#ccc");
})


var secondsLeft = 30;
var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("main");

//timer function
function setTimer() {
var timeInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "You currently have" + secondsLeft + "left to chose an answer.";
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

    timeoutBox.setAttribute("style", "font-size:20px; font-color:black;")
  
  mainEl.appendChild(timeoutBox);
}
//setTimeout(() {}, 30000);


