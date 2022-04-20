const compChoices = ["rock", "paper", "scissors"];
const myChoices = ["rock", "paper", "scissors", "dynamite"];
const compWins = ["02", "21", "10"];
const myWins = ["20", "12", "01", "23", "13", "03"];
let compWinsTotal = 0;
let myWinsTotal = 0;

// propmts and checks users choice
round()
function round() {
    function mySelectFunc(choice) {
        let mySelect = prompt("What would you like to throw? Rock, Paper, or Scissors?")
        let isChoice = myChoices.includes(mySelect.toLowerCase());

        isChoice_Check(isChoice)
        function isChoice_Check() {
            if (isChoice !== true) {
            mySelect = prompt('Hint: Throw "Rock", "Paper", or "Scissors"');
            isChoice = myChoices.includes(mySelect.toLowerCase());
            isChoice_Check(isChoice);
        }}
        return choice = mySelect.toLowerCase();
    }
    mySelect = mySelectFunc();


    // random select for computer
    function compSelectFunc(choice) {
        return choice = compChoices[Math.floor(Math.random() * compChoices.length)];
    }
    let compSelect = compSelectFunc().toLowerCase();
    let result = mySelect === compSelect;
    console.log(`Computer threw ${compSelect}.`, `You threw ${mySelect}`);

    if (result) {
        console.log("Draw, redo");
        alert("Draw, redo");
    } else {
        result = '' + compChoices.indexOf(`${compSelect}`) + myChoices.indexOf(`${mySelect}`);
    }

    winnerFunc(result)
    function winnerFunc() {
        let compWinner = compSelect[0].toUpperCase() + compSelect.slice(1);
        let myWinner = mySelect[0].toUpperCase() + mySelect.slice(1);
        if (compWins.includes(result) === true) {
            console.log(`${compWinner} beats ${myWinner}, the Computer wins`);
            compWinsTotal++;
            console.log(compWinsTotal, myWinsTotal);
        } else if (myWins.includes(result) === true) {
            console.log(`${myWinner} beats ${compWinner}, the User wins`)
            myWinsTotal++;
            console.log(compWinsTotal, myWinsTotal);
        } else {
        }
    }
    switch (true) {
        case (myWinsTotal === 2 && compWinsTotal ===2):
            alert("Tie Breaker");
            console.log("Tie Breaker")
            round()
            break;

        case (myWinsTotal >= 2):
            console.log("Joe Wins");
            break;
        
        case (compWinsTotal >= 2):
            console.log("Computer Wins");
            break;

        default:
            round()
    }
};   
