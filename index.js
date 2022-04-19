const choices = ["Rock", "Paper", "Scissor"];

let mySelection = prompt("What would you like to throw? Rock, Paper, or Scissors?")
function computerSelection(choice) {
    return choice = "Paper";//choices[Math.floor(Math.random() * choices.length)];
}
let result = mySelection.toLowerCase() === computerSelection().toLowerCase();

console.log(`Computer threw ${computerSelection()}.`, `You threw ${mySelection}`);

if (result) {
    console.log("Draw, redo");
} else {
    console.log("Joe won")
}
