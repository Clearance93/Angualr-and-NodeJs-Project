const start_btn = document.querySelector('.start-btn button');
const info_box = document.querySelector('.info-box');
const quit_btn = info_box.querySelector('.button .quit');
const continue_btn = document.querySelector('.button .continue');
const quiz_box = document.querySelector('.quiz-box');
const timeCount = quiz_box.querySelector('.timer .timer-sec');
const timeLine = quiz_box.querySelector('header .time_line');
const timeOff = quiz_box.querySelector('header .time-text');



const option_list = document.querySelector('.option-list');

// the fuctionality of the button

start_btn.onclick = () =>{
    info_box.classList.add("activeinfo"); //show the info box
}


// if quit button is clicked
quit_btn.onclick = () => {
    info_box.classList.remove("activeinfo"); //hide the info box
}


// if continue button is clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeinfo"); 
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    showQuestions(0);
    queCounter(1);
    startTimer(30);
    startTimerLine(0);
}

let que_count = 0;
let que_numb = 1;
let counter;
let timeValue = 30;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector('.next-btn');
const result_box = document.querySelector(".results-box");
const restart_test = result_box.querySelector(".button .continue");
const quit_test = result_box.querySelector(".button .quit");


quit_test.onclick = () => {
    window.location.reload();
} 

// if Next Question button is clicked
next_btn.onclick = () => {
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time left";
    }
    else{
        clearInterval(counter);
        // startTimer(timeValue);
        clearInterval(counterLine);
        alert("You've completed the test");
        showResultsBox();
    }
    // que_count = 1;
}

// Getting question and option from arrays
function showQuestions(index){
    const que_text = document.querySelector(".que-text");
    let que_tag =  '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = ' <div class="option">'+ questions[index].options[0] +'<span></span></div>'
    + ' <div class="option">'+ questions[index].options[1] + '<span></span></div>'
    + ' <div class="option">'+ questions[index].options[2] + '<span></span></div>'
    + ' <div class="option">'+ questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionaSelected(this)");
        
    }
}


let tickIcon = '<div class="icon  tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionaSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAnswer = questions[que_count].answer
    let allOptions = option_list.children.length;
    if(userAns === correctAnswer){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log('Correct answer');
        answer.insertAdjacentHTML("beforeend", tickIcon)
    }
    else{
        answer.classList.add("incorrect")
        console.log('Incorrect answer');
        answer.insertAdjacentHTML("beforeend", crossIcon)

        // if the answer is wrong, we want it to automatically select the correct answer

        for (let i = 0; i <  allOptions; i++) {
            if(option_list.children[i].textContent === correctAnswer){
                option_list.children[i].setAttribute("class", "option correct")
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
            }
            
        }
    }

    

// once a user has selected all options must be disabled
for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
}

 next_btn.style.display = "block";

}


function showResultsBox(){
    info_box.classList.remove("activeinfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide the quiz box
    result_box.classList.add("activeResults"); //show the results box
    const scoreText = result_box.querySelector(".score-text");
    if(userScore > 3){
        let scoreTag ='<span>and congratulation!, you only got <p>' + userScore +'</p> out of <p>'+ questions.length +'</p></span>'

        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 4){
        let scoreTag ='<span>and nice, you only got <p>' + userScore +'</p> out of <p>'+ questions.length +'</p></span>'

        scoreText.innerHTML = scoreTag;
    }
   else{
        let scoreTag ='<span>and sorry, you only got <p>' + userScore +'</p> out of <p>'+ questions.length +'</p></span>'

        scoreText.innerHTML = scoreTag;
    }
}



function startTimer(time){
    counter = setInterval(timer, 1000)
    function timer(){
        timeCount.textContent = time;
        time--;

        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }

        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off";

            let correctAnswer = questions[que_count].answer
            let allOptions = option_list.children.length;
            for (let i = 0; i <  allOptions; i++) {
                if(option_list.children[i].textContent === correctAnswer){
                    option_list.children[i].setAttribute("class", "option correct")
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon)
                }
                
            }
            
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            
             next_btn.style.display = "block";
        }
    }
}

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector('.total-que');
    let totalQuesCountTag = '<span><p>' + index +'</p>of<p>'+ questions.length +'</p>Questions</span>'
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}


function startTimerLine(time){
    counterLine = setInterval(timer, 58);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}