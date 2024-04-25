let number = Math.floor(Math.random() * 100) + 1;
let guessOutput1 = number - 20;
let guessOutput2 = number + 15;
let attempts = 0;

function guessNumber() {
  let guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (guess === number) {
    document.getElementById(
      "result"
    ).innerHTML = `<span class="success">Hooray! You guessed the number in ${attempts} attempts.</span>
     <span class="emoji">🎉</span>`;
    document.getElementById("guessInput").disabled = true;
    document.getElementById("confetti").innerHTML = generateConfetti();
  } else if (guess < number && attempts < 5) {
    document.getElementById(
      "result"
    ).innerHTML = `<span class="error">The number is greater than ${guess}.<br>
    The number lies between ${guessOutput1} and ${guessOutput2}</span>`;
  } else if (guess > number && attempts < 5) {
    document.getElementById(
      "result"
    ).innerHTML = `<span class="error">The number is less than ${guess}.<br>
    The number lies between ${guessOutput1} and ${guessOutput2}</span>`;
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<span class="error">You have exhausted 5 trials. The number was ${number}.</span> <span class="emoji">😞</span>`;
    document.getElementById("guessInput").disabled = true;
    document.getElementById("sadFaces").innerHTML = generateSadFaces();
  }

  // Add fade-in effect to the result message
  document.getElementById("result").classList.add("fade-in");
}

function generateConfetti() {
  let confettiHTML = "";
  for (let i = 0; i < 100; i++) {
    let center = Math.random() * 100;
    let delay = Math.random() * 1;
    confettiHTML += `<img src="https://emojicdn.elk.sh/🎉" class="confetti" style="center: ${center}%; animation-delay: ${delay}s;">`;
  }
  return confettiHTML;
}
function generateSadFaces() {
  let sadFacesHTML = "";
  for (let i = 0; i < 100; i++) {
    let center = Math.random() * 100;
    let delay = Math.random() * 1;
    sadFacesHTML += `<img src="https://emojicdn.elk.sh/😞" class="sad-face" style="center: ${center}%; animation-delay: ${delay}s;">`;
  }
  return sadFacesHTML;
}
