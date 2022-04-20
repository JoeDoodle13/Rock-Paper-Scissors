const myChoices = ["rock", "paper", "scissors", "dynamite"];
const compChoices = ["rock", "paper", "scissors"];

// propmts and checks users choice
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
console.log(result)
console.log(`Computer threw ${compSelect}.`, `You threw ${mySelect}`);

if (result) {
    console.log("Draw, redo");
} else {
    result = '' + compChoices.indexOf(`${compSelect}`) + myChoices.indexOf(`${mySelect}`);

    console.log(result)

}
    /*now, in this block, include the rules of the game;
    rock beats scissors, scissors beat paper, paper beats rock
    
    smth like `${winners selection} beats ${losers selection}; ${winner} won`*/

    


