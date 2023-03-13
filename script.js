let questions = [
  {
    question: "Was ist der längste Fluss der Welt?",
    answer_1: "Der Amazonas",
    answer_2: "Der Nil",
    answer_3: "Der Rhein",
    answer_4: "Die Wolga",
    right_answer: 2,
  },
  {
    question: "Was ist die meist gesprochene Sprache in Indien?",
    answer_1: "Hindi",
    answer_2: "Urdu",
    answer_3: "Punjabi",
    answer_4: "Bengali",
    right_answer: 1,
  },
  {
    question: "Was ist ein Falchion?",
    answer_1: "Ein Gericht",
    answer_2: "Ein Kleidungsstück",
    answer_3: "Ein Tier",
    answer_4: "Ein Schwert",
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
    question: "Welches Tier trägt den Namen Rotfedern?",
    answer_1: "Eine Raupe",
    answer_2: "Ein Schmetterling",
    answer_3: "Ein Fisch",
    answer_4: "Ein Vogel",
    right_answer: 3,
  },
  {
    question: "Von wem stammt der berühmte Satz: 'ich denke, also bin ich'?",
    answer_1: "Julius Caesar",
    answer_2: "Madonna",
    answer_3: "Barack Obama",
    answer_4: "Mahatma Gandhi",
    right_answer: 1,
  },
  {
    question: "Wenn man ein Broiler bestellt, erhält man welches Gericht?",
    answer_1: "Eine Brezel",
    answer_2: "Eine Bratwurst",
    answer_3: "Ein Brötchen",
    answer_4: "Ein Brathähnchen",
    right_answer: 4,
  },
];

let currentQuestion = 0;
let rightQuestions = 0;
let Audio_Success = new Audio('sounds/right.mp3');
let Audio_Fail = new Audio('sounds/wrong.mp3');

function init() {
  let maxlengthquestions = document.getElementById("max-length-questions");
  maxlengthquestions.innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    updateProgressbar();
    showEndScreen();
  } else {
    updateToNextQuestion();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length
}

function answer(answer) {
  let question = questions[currentQuestion];
  let questionnumber = answer.slice(-1);
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (rightAnswerSelected(questionnumber, question)) {
    document.getElementById(answer).parentNode.classList.add("bg-success");
    Audio_Success.play();
    rightQuestions++
  } else {
    document.getElementById(answer).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    Audio_Fail.play();
  }
  document.getElementById("next-button").disabled = false;
  blockAnswers();
}

function blockAnswers() {
  for (let i = 1; i < 5; i++) {
    document.getElementById(`answer_head_${i}`).classList.add('no-pointer');
  }
}

function freeAnswers() {
  for (let i = 1; i < 5; i++) {
    document.getElementById(`answer_head_${i}`).classList.remove('no-pointer');
  }
}

function rightAnswerSelected(questionnumber, question) {
  return questionnumber == question["right_answer"]
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
  freeAnswers();
}

function resetAnswerButtons() {
  for (let i = 1; i < 5; i++) {
    let answer = "answer_"+i;
    document.getElementById(answer).parentNode.classList.remove("bg-danger");
    document.getElementById(answer).parentNode.classList.remove("bg-success");
  }
}

function restartGame() {
  document.getElementById('header-img').src = 'img/quiz.png';
  rightQuestions = 0;
  currentQuestion = 0;
  document.getElementById('endScreen').style = 'display: none';
  document.getElementById('questionBody').style = '';
  init();
}

function showEndScreen() {
  document.getElementById('endScreen').style = '';
  document.getElementById('questionBody').style = 'display: none;';
  document.getElementById('amount-of-questions').innerHTML = questions.length;
  document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
  document.getElementById('header-img').src = 'img/finish.png';
}

function updateProgressbar() {
  let percent = currentQuestion / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById('progress-bar').innerHTML = `${percent}%`;
  document.getElementById('progress-bar').style = `width: ${percent}%`;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];
  document.getElementById("questionnumber").innerHTML = currentQuestion + 1;
  document.getElementById("headquestion").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];
  updateProgressbar();
}