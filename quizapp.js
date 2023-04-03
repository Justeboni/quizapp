const quizData = [
    {
        question: "what does CSS stand for?",
        a: "Central Styling Sheet",
        b: "Cascading Style Sheet",
        C: "Costly Styling Sheet",
        d: "Cascading String sheet",
        correct: "b"
    },
    {
        question: "what does HTML stand for?",
        a: "High Temperature Melting Limit",
        b: "Hypertext Markup Language",
        C: "Hypertext Markdown Language",
        d: "Hypertext Moding Language",
        correct: "b"
    },
    {
        question: "what year was JavaScript launched?",
        a: "2005",
        b: "1996",
        C: "1994",
        d: "1995",
        correct: "d"
    },
    {
        question: "what year did Nigeria gain independence?",
        a: "1983",
        b: "2003",
        C: "1914",
        d: "1960",
        correct: "d"
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')



let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.C
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else{
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})