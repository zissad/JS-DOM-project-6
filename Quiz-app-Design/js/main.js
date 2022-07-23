const firstPage = document.querySelector('.frist-page');
const secondPage = document.querySelector('.secound-page');
const thirdPage = document.querySelector('.third-page');
const fourthPage = document.querySelector('.fourth-page');


const challenge = firstPage.querySelector('#box');

const secondBack = secondPage.querySelector('#se-back');
const secondNext = secondPage.querySelector('.home-btn');

const thirdBack = thirdPage.querySelector('#th-back');
const thirdNext = thirdPage.querySelector('#th-btn');

const nextButton = document.querySelector('.next');

challenge.onclick = () => {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
}

secondBack.onclick = () => {
    firstPage.style.display = 'block';
    secondPage.style.display = 'none';
}

secondNext.onclick = () => {
    thirdPage.style.display = 'block';
    secondPage.style.display = 'none';
}

thirdBack.onclick = () => {
    thirdPage.style.display = 'none';
    secondPage.style.display = 'block';
}

thirdNext.onclick = () => {
    thirdPage.style.display = 'none';
    fourthPage.style.display = 'block';

    showQuestion(0);
}

let ques_count = 0;
let barWidth = 340 / questions.length;

nextButton.onclick = () => {
    if(ques_count < questions.length - 1){
        ques_count++;
        barWidth += 340 / questions.length;
        showQuestion(ques_count);
    }
    else {
        alert('complete')
    }
}
const questionText = document.querySelector('.ques-head');
const options = document.querySelector('.option');

function showQuestion(index){
    const quesNum = document.querySelector('.ques-num');
    const progressBar = document.querySelector('.bar');

    quesNum.innerHTML = 'Question: ' + questions[index].number + '/' + questions.length; 

    let optionTag = "<p>"+questions[index].option[0] +"</p>" + 
                    "<p>"+questions[index].option[1] +"</p>" +
                    "<p>"+questions[index].option[2] +"</p>" +
                    "<p>"+questions[index].option[3] +"</p>" ;
    options.innerHTML = optionTag;
    questionText.innerHTML = questions[index].number +'. '+ questions[index].question;

    progressBar.style.width = barWidth + 'px';

    const allOption = options.querySelectorAll('p');

    for (let index = 0; index < allOption.length; index++) {
        allOption[index].setAttribute("onclick", "optionSelected(this)");
        
    }

}

function optionSelected(usAnswer){
    let userAnswer = usAnswer.textContent;
    let correctAnswer = questions[ques_count].answer;
    const optionLen = options.children.length;
    console.log(optionLen);
    if(userAnswer == correctAnswer){
        usAnswer.classList.add('correct');
    }
    else {
        usAnswer.classList.add('wrong');

        for (let index = 0; index < optionLen; index++) {
            if(options.children[index].textContent == correctAnswer) {
                options.children[index].classList.add('correct');
            }
        }
    }
    for (let index = 0; index < optionLen; index++) {
        options.children[index].classList.add('disabled');
        
    }
}