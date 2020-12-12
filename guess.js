

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

while(!decider)
{
	let InputNumber=prompt("Guess the number")
	if(InputNumber>DecidedNumber)
	{
		alert("Input Number is high from correct Guess")
	}

	else if(InputNumber<DecidedNumber)
	{
		alert("Input Number is low from correct Guess")
	}

	else
	{
		alert("CONGO YOU GUESSED CORRECT NUMBER")
		decider=true
	}
}
