const startBtn = document.querySelector("#st_quiz");
const exitBtn = document.querySelector(".exit");
const continueBtn = document.querySelector(".continue");
const back_Btn = document.querySelector(".back");
const nextBtn = document.querySelector(".next-btn");

const timeline = document.querySelector(".timeline");

const rulesPage = document.querySelector(".rulesBox");
const homePage = document.querySelector(".quiz-app");
const questionPage = document.querySelector(".questionBox");
const resultPage = document.querySelector(".resultBx");

const resultPoint = resultPage.querySelector("p");
const resultRank = resultPage.querySelector("h3");

const timeCount = document.querySelector(".time");
let counter;


startBtn.onclick = () => {
  rulesPage.style.display = "inline";
  homePage.style.display = "none";
};

exitBtn.onclick = () => {
  homePage.style.display = "inline";
  rulesPage.style.display = "none";
};

continueBtn.onclick = () => {
  questionPage.style.display = "inline";
  rulesPage.style.display = "none";
  showQuestion(0);
  startTimer(14);
  startTimeline(0);
};

let count = 0;
let timeValue = 14;
let timelineCount;
let point = 0;

nextBtn.onclick = () => {
  if (count < questions.length - 1) {
    count++;
    showQuestion(count);
  } else {
    questionPage.style.display = "none";
    resultPage.style.display = "inline";
  }
  clearInterval(timelineCount);
  clearInterval(counter);
  startTimer(timeValue);
  startTimeline(0);

  nextBtn.style.display = "none";
};

back_Btn.onclick = () => {
  resultPage.style.display = "none";
  homePage.style.display = "inline";
};

const optionList = document.querySelector(".options");

function showQuestion(index) {
  const questionText = document.querySelector(".question h2");
  const totalQuestion = document.querySelector(".footer p");

  questionText.innerHTML =
    questions[index].number + "." + questions[index].question;
  optionList.innerHTML =
    `<div class="option"><p>` +
    questions[index].option[0] +
    `</p></div>` +
    `<div class="option"><p>` +
    questions[index].option[1] +
    `</p></div>` +
    `<div class="option"><p>` +
    questions[index].option[2] +
    `</p></div>` +
    `<div class="option"><p>` +
    questions[index].option[3] +
    `</p></div>`;

  totalQuestion.innerHTML = questions[index].number + " of 15 Question";

  const optionChild = optionList.querySelectorAll(".option");

  for (let i = 0; i < optionChild.length; i++) {
    optionChild[i].setAttribute("onclick", "optionSelect(this)");
  }
}

let checkIcon = `<i class="fas fa-check"></i>`;
let crossIcon = `<i class="fas fa-times"></i>`;

function optionSelect(answer) {

  console.log(answer);
  clearInterval(counter);
  clearInterval(timelineCount);
  const userAnswer = answer.textContent;
  const correctAnswer = questions[count].answer;
  const allOption = optionList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", checkIcon);

    point += 2;
  } else {
    answer.classList.add("wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);
    for (let index = 0; index < allOption; index++) {
      if (optionList.children[index].textContent == correctAnswer) {
        optionList.children[index].setAttribute("class", "option correct");
        optionList.children[index].insertAdjacentHTML("beforeend", checkIcon);
      }
    }
  }
  if (point == 0) {
    resultRank.innerHTML = "very bad You are fail try again! 😔" ;
  } else if (point <= 12) {
    resultRank.innerHTML = "You are fail try again.☹️";
  } else if (point <= 26) {
    resultRank.innerHTML = "Wonderful you passed.🥰";
  }  else {
    resultRank.innerHTML = "Congratulation 😍";
  }

  resultPoint.innerHTML = "You got " + point + " out of 30";

  for (let index = 0; index < allOption; index++) {
    optionList.children[index].classList.add("disabled");
  }
  nextBtn.style.display = "inline";
}

function startTimer(time) {
  const correctAnswer = questions[count].answer;
  const allOption = optionList.children.length;

  counter = setInterval(timer, 1000);

  function timer() {
    timeCount.innerHTML = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.innerHTML;
      timeCount.innerHTML = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.innerHTML = "00";
      nextBtn.style.display = "inline";

      for (let index = 0; index < allOption; index++) {
        optionList.children[index].classList.add("disabled");
      }

      for (let index = 0; index < allOption; index++) {
        if (optionList.children[index].textContent == correctAnswer) {
          optionList.children[index].setAttribute("class", "option correct");
          optionList.children[index].insertAdjacentHTML("beforeend", checkIcon);
          optionList.children[index].classList.add("disabled");
        }
      }
    }
  }
}

function startTimeline(time) {
  timelineCount = setInterval(timer, 15000 / 100);

  function timer() {
    time += 1;
    timeline.style.width = time + "%";

    if (time > 100) {
      clearInterval(timelineCount);
    }
  }
}
