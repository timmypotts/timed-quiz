

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

document.getElementById("start").addEventListener("click", function () {
    // initialize button elements
    var parent = document.getElementById("start").parentNode;
    var vanish = document.getElementById("start");


    // remove the start button
    parent.removeChild(vanish);

    // populate page with multiple choice elements
    for(var i=0; i<4; i++) {
        var nbut = document.createElement("BUTTON");
        nbut.classList.add("btn");
        nbut.classList.add("btn-primary");
        nbut.classList.add("m-2");
        var quest = document.createTextNode(questions[0].choices[i]);
        nbut.appendChild(quest);
        parent.appendChild(nbut);
    }

});



console.log(questions[1].choices[0]);


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