let questions = [{
    "question": "Wie heiße ich?",
    "answer_1": "Peter",
    "answer_2": "Gandalf",
    "answer_3": "Matthias",
    "answer_4": "Sascha",
    "right_answer": 4,
},
{
    "question": "Was für ein Auto fahre ich?",
    "answer_1": "Dacia",
    "answer_2": "BMW",
    "answer_3": "Audi",
    "answer_4": "Porsche",
    "right_answer": 1,
},
{
    "question": "Welcher ist der höchste Berg der Welt?",
    "answer_1": "Pariser Pantheon",
    "answer_2": "Matterhorn",
    "answer_3": "Zugspitze",
    "answer_4": "Mount Everest",
    "right_answer": 4,
},
{
    "question": "Wofür stehen die olympischen Ringe?",
    "answer_1": "Hoolahoop Reifen",
    "answer_2": "Für die 5 Kontinente",
    "answer_3": "Die 5 Schwierigkeitsgrade",
    "answer_4": "Für die Automarke Audi",
    "right_answer": 2,
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
let questionnum = 1;
let currentAnswer = 0;


function init() {
    let maxlengthquestions = document.getElementById('max-length-questions');
    maxlengthquestions.innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('headquestion').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    questionOf();
}

function questionOf() {
    let questionnumber = document.getElementById('questionnumber');
    questionnumber.innerHTML = questionnum;
    questionnum++;
}

function answer(answer) {
    let question = questions[currentQuestion];
    let questionnumber = answer.slice(-1);
    
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if(questionnumber == question['right_answer']) {
        document.getElementById(answer).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(answer).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
}