var position = 0;
const MAX_POSITION = 100;

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
			if ( (position - dieNumber) < 0 )
				position = 0;			
			else
				position -= dieNumber;
		}
		console.log(" Option is : " +option);
		console.log(" Current Position is : " +position+"\n");

 }

/**
 * @description Repeat till player reaches till winning position
 * @var position  is compared with @var maxPosition
 * @method checkOption is used to check whether the option is noplay, ladder or snake
 */
var checkOptionTillMaxPosition = () =>{
		while( position < MAX_POSITION )
		{
			var dieNumber = rollDieToGetNumber();
			console.log("Number got from rolling die : " + dieNumber);
			checkOption(dieNumber);
		}
    }

checkOptionTillMaxPosition();
