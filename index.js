const choices = ["Rock", "Paper", "Scissor"]

function computerSelection(choice) {
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

console.log(computerSelection());