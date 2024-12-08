$(document).ready(function() {
    const questions = [
        {
            question: "Who's NBA Player?",
            image: "jaysontatum.webp",
            choices: ["A. Jayson Tatum", "B. Jordan Poole", "C. Stephen Curry"],
            correctAnswer: "A"
        },
        {
            question: "Who's NBA Player?",
            image: "kareem.webp",
            choices: ["A. Lebron James", "B. Kareem Abdul Jabbar", "C. Kobe Bryant"],
            correctAnswer: "B"
        },
        {
            question: "Who's NBA Player?",
            image: "Lebron.webp",
            choices: ["A. Lebron James", "B. Michael Jordan", "C. Jrue Holiday"],
            correctAnswer: "A"
        },
        {
            question: "Who's NBA Player?",
            image: "Curry.webp",
            choices: ["A. Giannis Antetekoumpo", "B. Chris Middleton", "C. Stephen Curry"],
            correctAnswer: "C"
        },
        {
            question: "Who's NBA Player?",
            image: "Giannis.webp",
            choices: ["A. Kobe Bryant", "B. Chris Middleton", "C. Giannis Antetekoumpo"],
            correctAnswer: "C"
        },
    ];
    
    let currentQuestionIndex = 0;
    let correctCount = 0;
    
    const questionElement = $('#question');
    const imageContainer = $('#image-container');
    const choicesForm = $('#choices-form');
    const choicesGroup = $('#choices');
    const resultElement = $('#result');
    const correctCountElement = $('#correct-count');
    const tryAgainButton = $('#try-again-button');
    
    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.text(currentQuestion.question);
        
        imageContainer.empty();
        const imgElement = $('<img>');
        imgElement.attr('src', currentQuestion.image);
        imgElement.addClass('image');
        imageContainer.append(imgElement);
        
        choicesGroup.empty();
        currentQuestion.choices.forEach((choice, index) => {
            const label = $('<label>');
            label.addClass('form-check-label');
            label.text(choice);
            
            const radio = $('<input>');
            radio.attr({
                type: 'radio',
                name: 'choice',
                value: String.fromCharCode(65 + index)
            });
            radio.addClass('form-check-input');
            
            const div = $('<div>');
            div.addClass('form-check');
            div.append(radio);
            div.append(label);
            
            choicesGroup.append(div);
        });
    }
    
    choicesForm.submit(function(event) {
        event.preventDefault();
        const chosenAnswer = $('input[name=choice]:checked').val();
        const currentQuestion = questions[currentQuestionIndex];
        if (chosenAnswer === currentQuestion.correctAnswer) {
            resultElement.text("Correct!");
            resultElement.css("color", "green");
            correctCount++;
        } else {
            resultElement.text("Incorrect! The correct answer is " + currentQuestion.choices[currentQuestion.correctAnswer.charCodeAt(0) - 65].substring(3) + ".");
            resultElement.css("color", "red");
        }
        setTimeout(() => {
            nextQuestion();
        }, 1000);
    });
    
    function nextQuestion() {
        currentQuestionIndex++;
        resultElement.text("");
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
            tryAgainButton.show();
        } else {
        
            questionElement.text("Game Over!");
            imageContainer.empty();
            choicesGroup.empty();
            correctCountElement.text(`Total Correct Answers: ${correctCount}`);
            resultElement.empty();
            tryAgainButton.show();
        }
    }
    
    tryAgainButton.click(function() {
        currentQuestionIndex = 0;
        correctCount = 0;
        correctCountElement.text("");
        tryAgainButton.hide();
        loadQuestion();
    });
    
    loadQuestion();
});
