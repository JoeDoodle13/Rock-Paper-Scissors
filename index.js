const choices = ["Rock", "Paper", "Scissor"]

function computerPlay(choice) {
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

console.log(computerPlay());