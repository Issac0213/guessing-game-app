var guessNumber= Math.floor(Math.random()*100+1)
	var guess= number(prompt("choose a number from 1-100"))
	var guesses= 1 
	var tries=10

	while(guess !=guessNumber){
		console.log(guesses)
		if (guesses>=tries){
			consoln.log("you lose!")
			break
		}else if (guess>guessNumber){
			guesses++
			guess=prompt("Guess Lower")
		}else if(guess<guessNumber){
			guesses++
			guess=prompt("Guess Higher")
		}

	}

if (guess<tries){
	alert("you win, and it only took you " + guesses + "guesses")
}