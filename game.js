
var words = [
    { word: 'rockets', image: 'rockets.jpg' },
    { word: 'cavaliers', image: 'cavs.jpg' },
    { word: 'hornets', image: 'hornets.jpg' },
    { word: 'chicago', image: 'bucks.jpg' },
    { word: 'phoenix', image: 'suns.png' },
    
];

var currentQuestionIndex = 0; 
var correctGuessCount = 0; 


displayQuestion();


function checkGuess() {
    var guess = document.getElementById('guess-input').value.toLowerCase();
    var originalWord = words[currentQuestionIndex].word;
    
    if (guess === originalWord) {
        document.getElementById('message').innerText = "Congratulations! You guessed it right.";
        correctGuessCount++;
    } else {
        document.getElementById('message').innerText = "Incorrect guess. Try again!";
    }

    
    if (currentQuestionIndex < words.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResult();
    }
}


function displayQuestion() {
    var wordObject = words[currentQuestionIndex];
    var originalWord = wordObject.word;
    var wordImage = wordObject.image;
    var shuffledWord = shuffleWord(originalWord);

    document.getElementById('scrambled-word').innerText = shuffledWord;
    document.getElementById('word-image').src = wordImage;
    document.getElementById('guess-input').value = ""; 
    document.getElementById('message').innerText = ""; 
}


function showResult() {
    document.getElementById('message').innerText = "You got " + correctGuessCount + " out of " + words.length + " correct.";
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= words.length) {
        currentQuestionIndex = 0;
    }
    displayQuestion();
}


function tryAgain() {
    currentQuestionIndex = 0;
    correctGuessCount = 0;
    displayQuestion();
}

function shuffleWord(word) {
    var shuffled = '';
    word = word.split('');
    while (word.length > 0) {
        shuffled += word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffled;
}
