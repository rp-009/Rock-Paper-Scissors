let msg = document.querySelector("#msg")
let userScoreVal = document.querySelector("#user-score");
let compScoreVal = document.querySelector("#comp-score");

userScore = 0;
compScore = 0

const genCompChoice = () => {
    // generate computer choice
    let compChoiceArr = ["rock", "paper", "scissors"];
    /* JS doesnt generate random strings (we also only need either of rock/paper/scissors) but
    it can generate random numbers which can act as indices for an array of the option strings
    */
   //Math.random() // Math class, random function generates numbers
   // If we want numbers betweeon 0-2, we multiply by 3
   const randIdx = Math.floor(Math.random() * 2); // floor to round of 
   return compChoiceArr[randIdx];
}

const drawGame = () =>{
    msg.innerText = "It's a draw! Play again!";
    msg.style.backgroundColor = "rgb(5, 5, 69)";
}

const winGame = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScoreVal.innerText = userScore;
    }
    else{
        compScore++
        msg.innerText = `Computer wins! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScoreVal.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice) { // if draw
        drawGame();
    }
    else{ // if not draw
        let userWin = true; //variable tracking if user will win or not
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        }
        else{ //userChoice === "scissors"
            userWin = compChoice === "rock" ? false : true;
        }
        winGame(userWin, userChoice, compChoice);
    }
}

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})