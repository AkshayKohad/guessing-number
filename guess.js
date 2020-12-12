

//start:
let RangeNumber=parseInt(prompt("Enter the maximum range you want"))
// if(!RangeNumber)
// {
// 	alert("Not a valid number)
// 		goto start
// }

while(!RangeNumber)
{
	RangeNumber=parseInt(prompt("Enter the valid number"))
}
const DecidedNumber= Math.floor(Math.random()*RangeNumber)+1

var decider=false
var quitter=false
var attempt=1;
while(!decider && !quitter)
{

	let InputNumber=prompt("Guess the number")

	if(InputNumber>DecidedNumber)
	{
		alert("Input Number is high from correct Guess")
		attempt++
	}

	else if(InputNumber<DecidedNumber)
	{
		alert("Input Number is low from correct Guess")
        attempt++
	}

	else
	{
		alert("CONGO YOU GUESSED CORRECT NUMBER")
		decider=true
		break
	}
var quit=parseInt(prompt("tired of playing want to quit this guessing press 1"))
if(quit==1)
	quitter=true

}
if(decider===true)
alert(`YOU GOT IN ${attempt} attempts`)

else{
	alert("Better Luck next time")
}
