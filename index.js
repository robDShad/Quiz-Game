const questions = [
    {
        question: "RLCS X champions from each region were:",
        answers: [
            {text: "NRG, Furia, Ground Zero, Vitality", correct: false},
            {text: "NRG, True Neutral, Renegades, BDS", correct: false},
            {text: "NRG, True Neutral, Ground Zero, Vitality", correct: true},
            {text: "NRG, Furia, Ground Zero, BDS", correct: false}]
    },
    {
        question: "Which player was replaced by Extra on BDS before RLCS X?",
        answers: [
            {text: "Pashy90", correct: false},
            {text: "ClayX", correct: true},
            {text: "Aztral", correct: false},
            {text: "Ronaky", correct: false}]
    },
    {
        question: "NA Fall Major winners in RLCSX were",
        answers: [
            {text: "NRG", correct: false},
            {text: "Spascestation Gaming", correct: true},
            {text: "G2 Esports", correct: false},
            {text: "Team Envy", correct: false}]
    },
    
    {
        question: "Besides Endpoint, Dignitas and Sandrock Gaming, what was the fourth team to finish 5th-8th at the Stockholm Major in 2021?",
        answers: [
            {text: "Vitality", correct: false},
            {text: "Ground Zero", correct: false},
            {text: "Team Envy", correct: false},
            {text: "Complexity", correct: true}]
    },
    {
        question: "At the Winter Major in 2021-2022 season Dignitas was reverse-swept twice. The teams that beat them were SSG and...",
        answers: [
            {text: "EG", correct: true},
            {text: "Endpoint", correct: false},
            {text: "G2 Esports", correct: false},
            {text: "Furia", correct: false}]
    },
    {
        question: "What was the first team that team Flacons beat at LAN with their full roster (trk511, Ahmad, oKhalid)?",
        answers: [
            {text: "Team Secret", correct: false},
            {text: "Team Liquid", correct: true},
            {text: "PWR", correct: false},
            {text: "Moist Esports", correct: false}]
    },
    {
        question: "Who was the World championship 2021-2022 Offensive MVP? ",
        answers: [
            {text: "Seikoo", correct: false},
            {text: "JKnaps", correct: false},
            {text: "M0nkey M00n ", correct: false},
            {text: "Chicago", correct: true}]
    },
    {
        question: "GenG won the Fall Major 2022-2023 by beating Moist Esports in the final. What was the score of that series?",
        answers: [
            {text: "4 : 0", correct: false},
            {text: "4 : 3", correct: false},
            {text: "4 : 1", correct: false},
            {text: "4 : 2", correct: true}]
    },
    {
        question: "In which city was Winter Major 2022-2023 held?",
        answers: [
            {text: "Los Angeles", correct: false},
            {text: "San Diego", correct: true},
            {text: "Boston", correct: false},
            {text: "San Francisco", correct: false}]
    },
    {
        question: "Which three players represented NIP at the Spring Major 2022-2023?",
        answers: [
            {text: "Aztro, Bemmz, caiotg1", correct: false},
            {text: "Motta, Bemmz, swiftt", correct: false},
            {text: "Aztro, Bemmz, Motta", correct: true},
            {text: "Aztro, Motta, caard", correct: false}]
    },
    {
        question: "At the World Championship 2023 all teams that finished Top 4 were from a single region - Europe. How many times previously in RLCS history did a single region occupied Top 4?",
        answers: [
            {text: "0", correct: true},
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: false}]
    },
    {
        question: "How many EU imports were playing in NA during RLSCS 2024 Major 1 Qualifiers?",
        answers: [
            {text: "3", correct: false},
            {text: "4", correct: true},
            {text: "5", correct: false},
            {text: "6", correct: false}]
    },
    {
        question: "During RLCS 2024 Major 2 EU Qualifiers, Karmine Corp shocked the whole community by not making it to the second Qualifier. What team eliminated them?",
        answers: [
            {text: "Suhhh", correct: false},
            {text: "100%", correct: false},
            {text: "Jobless", correct: false},
            {text: "Top Cougars", correct: true}]
    },
    {
        question: "Which teams represented OCE2 and SAM2 at the RLCS 2024 Major 2?",
        answers: [
            {text: "Cheefs, Team Secret", correct: true},
            {text: "Pioneers, Team Secret", correct: false},
            {text: "Cheefs, Complexity", correct: false},
            {text: "Pioneers, Complexity", correct: false}]
    },
    {
        question: "Which player was the RLCS 2024 EU MVP?",
        answers: [
            {text: "itachi", correct: true},
            {text: "Zen", correct: false},
            {text: "Monkey Moon", correct: false},
            {text: "Seikoo", correct: false}]
    },
    {
        question: `Who was the so-called "hard-carry" of team Solary during RLCS X?`,
        answer: "aztral"
            
    },
    {
        question: `Who replaced Rizzo on G2 during RLCS X?`,
        answer: "dreaz"
            
    },
    {
        question: `Which team finished second at the South America RLCS X Championship?`,
        answer: "furia"
            
    },
    {
        question: `Which player was the MVP OF RLCS 2021-2022 Winter Major`,
        answer: "atomic"
            
    },
    {
        question: `Which team finished second at the South America RLCS X Championship?`,
        answer: "furia"
            
    },
    {
        question: `This EU player is notoriously known for missing LANS by one spot`,
        answer: "tox"
            
    },
    {
        question: `HE BENTS REALITY TO HIS WILL! - said by`,
        answer: "jorby"
            
    },
    {
        question: `THE SEVEN FROM HEAVEN - said by`,
        answer: "stumpy"
            
    },
    {
        question: `The OG Sandrock Gaiming roster consisted of Ahmad, oKhalid and...`,
        answer: "senzo"
            
    },
    {
        question: `Turbopolsa was named the MVP of Season 4 Finals. But he didn't agree with that decision and gave his medal to...`,
        answer: "kaydop"
            
    },
    {
        question: `Turbopolsa was named the MVP of Season 4 Finals. But he didn't agree with that decision and gave his medal to...`,
        answer: "kaydop"
            
    },
        
];

const startNextBtn = document.querySelector(".start-next");
const questionText = document.querySelector(".question-text");
const questionNumber = document.querySelector(".question-number");
const intro = document.querySelector(".intro");
const quiz = document.querySelector(".questions");
const answers = document.querySelectorAll(".answer")
const answerInput = document.querySelector(".answer-input");
const checkBtn = document.querySelector(".check");
let questionIndex = 0;
let score = 0;
let rigth;

function showQuestion() {
    
    if (questionIndex < 15) {answers.forEach((x) => {
        x.style.background = "white";
        x.removeAttribute("data-correct");
        x.disabled = false
    })
    startNextBtn.style.display = "none";
    questionNumber.innerHTML = `Question #${questionIndex + 1}`;
    questionText.innerHTML = questions[questionIndex].question;
    for (let i = 0; i < answers.length; i++) {
        answers[i].innerHTML = questions[questionIndex].answers[i].text;
        if (questions[questionIndex].answers[i].correct) {
            answers[i].dataset.correct = "true";
        } 
        
    }
    answers.forEach(x => x.addEventListener("click", function selectAnswer(e) {
        startNextBtn.style.display = "block";
        if (e.target.dataset.correct) {
            e.target.style.background = "lightgreen";
            rigth = true
            answers.forEach(x => x.disabled = true)
            answers.forEach(x => x.removeEventListener("click", selectAnswer))
        } else {
            rigth = false
            e.target.style.background = "red";
            answers.forEach(x => x.disabled = true)
            Array.from(answers).filter(x => x.dataset.correct).forEach(x => x.style.background = "lightgreen")
            answers.forEach(x => x.disabled = true)
            answers.forEach(x => x.removeEventListener("click", selectAnswer))
        }
        
        
       }))} else {
        if (questionIndex == 15){
        document.querySelector(".questions").removeChild(document.querySelector(".answers"))
        }
            document.querySelector(".input-check").style.display = "block";
            answerInput.value = "";
            answerInput.disabled = false;
            checkBtn.innerHTML = "Check";
            checkBtn.disabled = false;
            checkBtn.style.background = "rgb(0, 0, 255, 0.7)"
            questionNumber.innerHTML = `Question #${questionIndex + 1}`;
            questionText.innerHTML = questions[questionIndex].question;
            startNextBtn.style.display = "none";
            
            checkBtn.addEventListener("click", function checkInput() {
                if (questions[questionIndex - 1].answer == answerInput.value.toLowerCase()) {
                    checkBtn.style.background = "green";
                    checkBtn.innerHTML = "Correct"
                    checkBtn.disabled = true;
                    rigth = true
                    startNextBtn.style.display = "block";
                    answerInput.disabled = true;
                    

                } else {
                    checkBtn.style.background = "red";
                    checkBtn.innerHTML = "Incorrect";
                    checkBtn.disabled = true;
                    rigth = false
                    startNextBtn.style.display = "block";
                    answerInput.disabled = true;
                    answerInput.value = `Correct answer: ${questions[questionIndex - 1].answer}`
                    
        }
        checkBtn.removeEventListener("click", checkInput)})
        
       }
       questionIndex++
       if (rigth){
            score++
       }
       console.log(questionIndex, score)

       if (questionIndex == 26) {
        startNextBtn.style.display = "none";
        document.querySelector(".input-check").style.display = "none";
        questionNumber.innerHTML = `You scored ${score} / 25 points.`;
        questionText.innerHTML = `No matter the score, thank you for spending your time on this quiz. If you found any bugs or something went wrong, please, give me your feedback in the comments.`;
       }
            
}

startNextBtn.addEventListener("click", function startQuiz() {
    if (startNextBtn.innerText == "Start Quiz") {
        document.querySelector(".quiz").removeChild(intro);
    quiz.style.display = "block";
    startNextBtn.innerHTML = "Next question";
    showQuestion();
    } else if (startNextBtn.textContent == "Next question") {
        showQuestion();
    }
})
