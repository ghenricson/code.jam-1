var msg1 = document.getElementById("message1") 
var msg2 = document.getElementById("message2") 
var msg3 = document.getElementById("message3") 
var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guesses_num = [];

function play() {
    var user_guess = document.getElementById("guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please Enter a number Between 1 to 100");
    } else {
        guesses_num.push(user_guess);
        no_of_guesses += 1;
        if (user_guess < answer) {
            msg1.textContent = "Your guess is too low, try again.."
            msg2.textContent = "Number of guesses : " + no_of_guesses;
            msg3.textContent = "Your previous guesses: " + guesses_num;
        } else if (user_guess > answer) {
            msg1.textContent = "Your guess is too high, try again.."
            msg2.textContent = "Number of guesses : " + no_of_guesses;
            msg3.textContent = "Your previous guesses: " + guesses_num;
        } else if (user_guess == answer) {
            msg1.textContent = "You won!!"
            msg2.textContent = "The number was " + answer 
            msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
        }
    }
}