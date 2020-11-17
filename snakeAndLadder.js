let position = 0;

const randomValueBetweenOneToSix = () =>  Math.floor(Math.random()*10)%6+1;
const randomValueBetweenOneToThree = () => Math.floor(Math.random()*10)%3;

/**
 * @description genereating random number between one to six 
 * @method randomValueBetweenOneToSix generates random number
 */ 
var rollDieToGetNumber = () => {
        var randomNumber = randomValueBetweenOneToSix();
		return randomNumber;
}

/**
 * @description checking option using random value
 * @method randomValueBetweenOneToThree generates random number
 * @var option is set based on random number
 */

 var checkOption = (dieNumber) => {
        var option = null;
		var randomNumber = randomValueBetweenOneToThree();
		switch(randomNumber)
		{
			case 0:
			option = "No Play";
			position = position;
			break;

			case 1:
			option = "Ladder";
			position += dieNumber;
			break;
			
			default:
			option = "Snake";
			position -= dieNumber;
		}
		console.log(" Option is : " +option);
		console.log(" Current Position is : " +position+"\n");

 }
var dieNumber = rollDieToGetNumber();
checkOption(dieNumber);

