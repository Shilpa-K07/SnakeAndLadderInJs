let position = 0;

const randomValueBetweenOneToSix = () =>  Math.floor(Math.random()*10)%6+1;

/**
 * @description genereating random number between one to six 
 * @method randomValueBetweenOneToSix generates random number
 */ 
var rollDieToGetNumber = () => {
        var randomNumber = randomValueBetweenOneToSix();
		return randomNumber;
}
console.log(rollDieToGetNumber());
