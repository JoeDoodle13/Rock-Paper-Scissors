const choices = ["rock", "paper", "scissors", "dynamite"];

function mySelectFunc(choice) {
    let mySelect = prompt("What would you like to throw? Rock, Paper, or Scissors?")
    let isChoice = choices.includes(mySelect.toLowerCase());

    isChoice_Check(isChoice)
    function isChoice_Check() {
        if (isChoice !== true) {
        mySelect = prompt('Hint: Throw "Rock", "Paper", or "Scissors"');
        isChoice = choices.includes(mySelect.toLowerCase());
        isChoice_Check(isChoice);
    }}
    return choice = mySelect;
}
console.log(mySelectFunc())
