let questions = [
  {
    question: "Wie heiße ich?",
    answer_1: "Peter",
    answer_2: "Gandalf",
    answer_3: "Matthias",
    answer_4: "Sascha",
    right_answer: 4,
  },
  {
    question: "Was für ein Auto fahre ich?",
    answer_1: "Dacia",
    answer_2: "BMW",
    answer_3: "Audi",
    answer_4: "Porsche",
    right_answer: 1,
  },
  {
    question: "Welcher ist der höchste Berg der Welt?",
    answer_1: "Pariser Pantheon",
    answer_2: "Matterhorn",
    answer_3: "Zugspitze",
    answer_4: "Mount Everest",
    right_answer: 4,
  },
  {
    question: "Wofür stehen die olympischen Ringe?",
    answer_1: "Hoolahoop Reifen",
    answer_2: "Für die 5 Kontinente",
    answer_3: "Die 5 Schwierigkeitsgrade",
    answer_4: "Für die Automarke Audi",
    right_answer: 2,
  },
  {
    question: "blabla",
    answer_1: "blabla",
    answer_2: "blabla",
    answer_3: "blabla",
    answer_4: "blabla",
    right_answer: 3,
  },
  {
    question: "blabla",
    answer_1: "blabla",
    answer_2: "blabla",
    answer_3: "blabla",
    answer_4: "blabla",
    right_answer: 3,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
  let maxlengthquestions = document.getElementById("max-length-questions");
  maxlengthquestions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;';
    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
    document.getElementById('header-img').src = 'mockup/Quizapp Dark/Quizapp/tropy.png';
  } else {
    let percent = (currentQuestion+1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent}%`;
    document.getElementById('progress-bar').style = `width: ${percent}%`;

    let question = questions[currentQuestion];
    document.getElementById("questionnumber").innerHTML = currentQuestion + 1;
    document.getElementById("headquestion").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(answer) {
  let question = questions[currentQuestion];
  let questionnumber = answer.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (questionnumber == question["right_answer"]) {
    document.getElementById(answer).parentNode.classList.add("bg-success");
    rightQuestions++
  } else {
    document.getElementById(answer).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

