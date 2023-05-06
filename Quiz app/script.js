

let quizContainer = document.getElementById("container-2");
let nextBtn = document.getElementById("second-button");
let countOfQuestion = document.querySelector(".question-number");
let displayContainer = document.getElementById("container-1");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("third-button");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".first-screen");
let startButton = document.getElementById("first-button");
let questionCount;
let scoreCount = 0;
let count = 10;
let countdown;


const quizArray = [
    {
        id: "0",
        question: "Which is the most successful team in IPL history?",
        options: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Banglore", "Kolkata Knight Riders"],
        correct: "Mumbai Indians",
    },
    {
        id: "1",
        question: "Who is the most successful captain in IPL history?",
        options: ["Rohit Sharma", "M.S Dhoni", "Virat Kohli", "Gautam Gambhir"],
        correct: "Rohit Sharma",
    },
    {
        id: "2",
        question: "Who is the only player to score 6000+ runs and has a hat-trick in IPL?",
        options: ["Virat Kohli", "Yuvraj Singh", "Dwayne Bravo", "Rohit Sharma"],
        correct: "Rohit Sharma",
    },
    {
        id: "3",
        question: "How many times a team has chased 200+ score in IPL?",
        options: ["18", "19", "16", "20"],
        correct: "20",
    },
    {
        id: "4",
        question: "What is the lowest team score in IPL?",
        options: ["36", "49", "69", "88"],
        correct: "49",
    },
    {
        id: "5",
        question: "Who is the winner of 1000th IPL match?",
        options: ["Chennai Super Kings", "Rajastan Royals", "Mumbai Indians", "Royal Challengers Banglore"],
        correct: "Mumbai Indians",
    }, 
    {
        id: "6",
        question: "Who is the only player to score atleast 200 runs in each over of the IPL?",
        options: ["Rohit Sharma", "Gautam Gambhir", "David Warner", "Chris Gayle"],
        correct: "Rohit Sharma",
    },     
    {
        id: "7",
        question: "Which player has the most Hat-tricks in IPL?",
        options: ["Amit Mishra", "Yuvraj Singh", "Rohit Sharma", "Virat Kohli"],
        correct: "Amit Mishra",
    }, 
    {
        id: "8",
        question: "Find the odd one out",
        options: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Banglore", "Kolkata Knight Riders"],
        correct: "Royal Challengers Banglore",
    },
];


restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        
        questionCount += 1;
       
        if (questionCount == quizArray.length) {
            
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
                if(scoreCount <= 6){
                    document.getElementById('img1').classList.remove('hide');
                }
                else if(scoreCount === 7 || scoreCount === 8){
                    document.getElementById('img2').classList.remove('hide');
                }
                else if(scoreCount === 9){
                    document.getElementById('img3').classList.remove('hide');
                }
              
        } else {
            
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            
            quizDisplay(questionCount);
            count = 10;
            clearInterval(countdown);
        }
        

    })
);


const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    
    quizCards[questionCount].classList.remove("hide");
};


function quizCreator() {
    
    quizArray.sort(() => Math.random() - 0.5);
  
    for (let i of quizArray) {
        
        i.options.sort(() => Math.random() - 0.5);
        
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}


function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

   
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
      
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    
    clearInterval(countdown);
  
    options.forEach((element) => {
        element.disabled = true;
    });
}


function initial() {
    document.getElementById("img1").classList.add("hide");
    document.getElementById("img2").classList.add("hide");
    document.getElementById("img3").classList.add("hide");
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 10;
    clearInterval(countdown);
    quizCreator();
    quizDisplay(questionCount);
}


startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});


window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};