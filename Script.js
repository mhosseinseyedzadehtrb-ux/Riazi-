"use strict";

const questions = [
    {
        q: "حاصل 2 + 3 × 4 چیست؟",
        a: ["20", "14", "10", "24"],
        c: 1
    },
    {
        q: "مجموع اعداد 1 تا 10 چند است؟",
        a: ["45", "50", "55", "60"],
        c: 2
    }
];


let current = 0;
let score = 0;


const start = document.getElementById("startQuiz");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const result = document.getElementById("result");
const next = document.getElementById("next");


function showQuestion(){

    let q = questions[current];

    question.innerHTML = q.q;

    answers.innerHTML = "";

    q.a.forEach(function(text, i){

        let button = document.createElement("button");

        button.className = "answer";

        button.innerHTML = text;

        button.onclick = function(){

            checkAnswer(i);

        };

        answers.appendChild(button);

    });

}


/** @param {number} answerIndex */
function checkAnswer(answerIndex){

    let q = questions[current];

    if(answerIndex === q.c){

        score += 10;

        result.innerHTML = "✅ درست";

    }else{

        result.innerHTML = "❌ غلط";

    }

    next.style.display = "block";

}



start.onclick = function(){

    current = 0;
    score = 0;

    showQuestion();

};



next.onclick = function(){

    current++;

    if(current < questions.length){

        showQuestion();

    }else{

        question.innerHTML = "🎉 تمام شد";

        answers.innerHTML = "";

        result.innerHTML =
        "امتیاز: " + score;

    }

};