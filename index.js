const choices = ["rock", "paper", "scissors"];

function mySelectFunc(choice) {
    let mySelect = prompt("What would you like to throw? Rock, Paper, or Scissors?")
    let isChoice = mySelect.toLowerCase() === ("rock" || "paper" || "scissors");

    isChoice_Check(isChoice)
    function isChoice_Check() {
        if (isChoice !== true) {
        mySelect = prompt('Hint: Throw "Rock", "Paper", or "Scissors"');
        isChoice = mySelect.toLowerCase() === ("rock" || "paper" || "scissors");
        isChoice_Check(isChoice);
    }}
    return choice = mySelect;
}
console.log(mySelectFunc())

/*
isChoice_Check(isChoice);
function isChoice_Check(isChoice) {
    if (isChoice !== true) {
        mySelect = 
        isChoice_Check(mySelect) 
    } else {
    return mySelect;
    }
}*/