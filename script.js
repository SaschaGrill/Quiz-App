let questions = [{
    "question": "Wie heiße ich?",
    "answer_1": "Peter",
    "answer_2": "Gandalf",
    "answer_3": "Matthias",
    "answer_4": "Sascha",
    "right_answer": 4,
},
{
    "question": "blabla",
    "answer_1": "blabla",
    "answer_2": "blabla",
    "answer_3": "blabla",
    "answer_4": "blabla",
    "right_answer": 3,
},
{
    "question": "blabla",
    "answer_1": "blabla",
    "answer_2": "blabla",
    "answer_3": "blabla",
    "answer_4": "blabla",
    "right_answer": 3,
},
{
    "question": "blabla",
    "answer_1": "blabla",
    "answer_2": "blabla",
    "answer_3": "blabla",
    "answer_4": "blabla",
    "right_answer": 3,
},
{
    "question": "blabla",
    "answer_1": "blabla",
    "answer_2": "blabla",
    "answer_3": "blabla",
    "answer_4": "blabla",
    "right_answer": 3,
},
{
    "question": "blabla",
    "answer_1": "blabla",
    "answer_2": "blabla",
    "answer_3": "blabla",
    "answer_4": "blabla",
    "right_answer": 3,
},
];

let currentQuestion = 0;

function init() {
    let maxlengthquestions = document.getElementById('max-length-questions');
    maxlengthquestions.innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    let headquestion = document.getElementById('headquestion');
    headquestion.innerHTML = question["question"]
    for (let i = 1; i < 5; i++) {
        let answer = question["answer_"+i];
        let allanswer = document.getElementById(`answer${i}`)
        allanswer.innerHTML = answer;
    }
}