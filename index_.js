const choices = ["rock", "paper", "scissors"];


function mySelectFunc(choice) {
    return choice = prompt();
}
console.log(mySelectFunc(prompt()))


/*    let mySelect = prompt("What would you like to throw? Rock, Paper, or Scissors?")
let isChoice = mySelect.toLowerCase() === ("rock" || "paper" || "scissors")
isChoice_Check(isChoice);
function isChoice_Check(isChoice) {
    if (isChoice !== true) {
        mySelect = prompt('Hint: Throw "Rock", "Paper", or "Scissors"');
        isChoice_Check(mySelect) 
    } else {
    return mySelect;
    }
}

function computerSelect(choice) {
    return choice = "Paper";//choices[Math.floor(Math.random() * choices.length)];
}
let result = mySelect.toLowerCase() === computerSelect().toLowerCase();

console.log(`Computer threw ${computerSelect()}.`, `You threw ${mySelect}`);

if (result) {
    console.log("Draw, redo");
} else {
    console.log("Joe won")
    /*now, in this block, include the rules of the game;
    rock beats scissors, scissors beat paper, paper beats rock
    
    smth like `${winners selection} beats ${losers selection}; ${winner} won`

    
}
