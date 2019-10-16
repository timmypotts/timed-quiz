

var questions =
[
    {
        title: "Commonly used data types do NOT include:",
        choices: ["strings", "booleans", "alerts", "floats"],
        answer: "alerts"
    },

    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
      },

    {
        title: "Arrays in JavaScript can be used to store:",
        choices: ["Booleans", "Other Arrays", "Numbers", "All of the Above"],
        answer: "All of the Above"
    },

    {
        title: "Which of the following is NOT a conditional?:",
        choices: ["===", "==", "=", "!="],
        answer: "="
    },

    {
        title: "JavaScript is:",
        choices: ["compiled and then executed in the web browser", "a high-level, interpreted scripting language", "general purpose programming language", "none of the above"],
        answer: "a high-level, interpreted scripting language"
    }
];

var qindex = ["q1","q2","q3","q4"];

// initialize points
var score = 0;
var round = 0;

// Start timer and populate page with prompt and answers
document.getElementById("start").addEventListener("click", function () {
    // initialize button elements
    var parent = document.getElementById("start").parentNode;
    var vanish = document.getElementById("start");

    //start timer:


    // initialize prompt element
    var promptparent = document.getElementById("promptspace").parentNode;
    var node = document.createElement("H2");
    var textnode = document.createTextNode(questions[round].title);
    node.setAttribute("id", "prompt");
    node.appendChild(textnode);
    promptparent.appendChild(node);

    // remove the start button
    parent.removeChild(vanish);

    // populate page with multiple choice elements
    for(var i=0; i<4; i++) {
        var nbut = document.createElement("BUTTON");
        var quest = document.createTextNode(questions[round].choices[i]);
        nbut.appendChild(quest);
        parent.appendChild(nbut);
        nbut.classList.add("choices");
        nbut.classList.add("btn");
        nbut.classList.add("btn-primary");
        nbut.classList.add("m-2");
        nbut.setAttribute("id", qindex[i]);
        nbut.setAttribute("onclick","nextRound(this)");
    }
    round++;
    return round;
});

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}

// Moves questions on to next set and keeps score
function nextRound(elem) {
    if(elem.textContent==questions[round-1].answer) {
        score++;
        console.log(score)
    }
    if(round===5){
        document.getElementById("prompt").textContent="Your final score is: " + score;
        for (i=0; i<4; i++) {
            document.getElementById(qindex[i]).remove();
        }
        return;
    }
    for (i=0; i<4; i++) {
    document.getElementById("prompt").textContent=questions[round].title;
    document.getElementById(qindex[i]).textContent=questions[round].choices[i];
    }
    round++
}
/* function countdown()
{
    this.start_time = "1:15";
    this.target_id = "#timer";
}

countdown.prototype.init = function()
{
    this.reset();
    setInterval(this.name + 'tick()', 1000);
}

countdown.prototype.reset = function()
{
    time = this.start_time.split(":");
    this.minutes = parseInt(time_ary[0]);
    this.seconds = parseInt(time_ary[1]);
    this.updateTarget();
}

countdown.prototype.tick = function()
{
    if(this.seconds > 0 || this.minutes > 0)
    {
        this.seconds--;
        if(this.seconds === 0)
        {
            this.minutes--;
            this.seconds = 59;
        }
    }
    this.updateTarget();
}

countdown.prototype.updateTarget = function()
{

} */