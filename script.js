const quizData = [
    
    {
        q: "What is Python?",
        options: ["Snake", "Programming Language", "Car", "OS"],
        answer: "Programming Language"
    },
    {
        q: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: "def"
    },
    {
        q: "Which data type is immutable?",
        options: ["List", "Set", "Dictionary", "Tuple"],
        answer: "Tuple"
    },
    {
        q: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: "#"
    },
    {
        q: "What does len() function do?",
        options: ["Adds numbers", "Returns length", "Deletes value", "Stops loop"],
        answer: "Returns length"
    },
    {
        q: "Which keyword is used to create a class?",
        options: ["class", "object", "def", "struct"],
        answer: "class"
    },
    {
        q: "Which loop is used to iterate over a sequence?",
        options: ["for", "while", "do-while", "repeat"],
        answer: "for"
    },
    {
        q: "Which function is used to take input from user?",
        options: ["input()", "scan()", "read()", "get()"],
        answer: "input()"
    },
    {
        q: "Which operator is used for exponentiation?",
        options: ["^", "**", "//", "%"],
        answer: "**"
    },
    {
        q: "Which keyword is used to handle exceptions?",
        options: ["try", "catch", "error", "handle"],
        answer: "try"
    },
    {
        q: "What is the output of: type(10)?",
        options: ["int", "float", "str", "number"],
        answer: "int"
    },
    {
        q: "Which collection does not allow duplicate values?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: "Set"
    },
    {
        q: "Which function converts string to integer?",
        options: ["str()", "int()", "float()", "eval()"],
        answer: "int()"
    },
    {
        q: "Which keyword is used to exit a loop?",
        options: ["stop", "exit", "break", "continue"],
        answer: "break"
    },
    {
        q: "What does continue keyword do?",
        options: ["Stops loop", "Skips iteration", "Ends program", "Restarts loop"],
        answer: "Skips iteration"
    },
    {
        q: "Which module is used for random numbers?",
        options: ["math", "random", "numbers", "os"],
        answer: "random"
    },
    {
        q: "Which keyword is used to import a module?",
        options: ["include", "require", "import", "load"],
        answer: "import"
    },
    {
        q: "Which data type stores key-value pairs?",
        options: ["List", "Tuple", "Set", "Dictionary"],
        answer: "Dictionary"
    },
    {
        q: "What is the output of 5 // 2?",
        options: ["2.5", "3", "2", "Error"],
        answer: "2"
    },
    {
        q: "Which keyword is used to create an object?",
        options: ["object", "new", "class", "init"],
        answer: "class"
    },
    {
        q: "Which method adds item to a list?",
        options: ["add()", "insert()", "append()", "push()"],
        answer: "append()"
    },
    {
        q: "What is PEP 8?",
        options: ["Python Editor", "Python Compiler", "Style Guide", "IDE"],
        answer: "Style Guide"
    },
    {
        q: "Which function is used to sort a list?",
        options: ["order()", "arrange()", "sort()", "sorted()"],
        answer: "sort()"
    },
    {
        q: "Which keyword is used to define anonymous function?",
        options: ["lambda", "anon", "def", "func"],
        answer: "lambda"
    },
    {
        q: "Which statement is used to stop a function?",
        options: ["stop", "end", "return", "break"],
        answer: "return"
    }
    // 👉 same pattern copy करून 25 questions करा
];

let currentQ = 0;
let score = 0;
let selectedOption = null;

const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option");
const feedback = document.getElementById("feedback");

loadQuestion();

function loadQuestion() {
    feedback.innerText = "";
    selectedOption = null;

    optionBtns.forEach(btn => btn.classList.remove("selected"));

    let qData = quizData[currentQ];
    questionEl.innerText = qData.q;

    optionBtns.forEach((btn, index) => {
        btn.innerText = qData.options[index];
    });
}

function selectAnswer(btn) {
    optionBtns.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedOption = btn.innerText;
}

function submitAnswer() {
    if (!selectedOption) {
        alert("Please select an option!");
        return;
    }

    let correctAns = quizData[currentQ].answer;

    if (selectedOption === correctAns) {
        feedback.innerText = "✅ Correct Answer!";
        score++;
    } else {
        feedback.innerText = `❌ Wrong! Correct Answer: ${correctAns}`;
    }

    setTimeout(() => {
        currentQ++;
        if (currentQ < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    questionEl.innerText = `Quiz Finished 🎉`;
    document.querySelector(".options").innerHTML = "";
    document.getElementById("submitBtn").style.display = "none";
    feedback.innerText = `Your Score: ${score} / ${quizData.length}`;
}
