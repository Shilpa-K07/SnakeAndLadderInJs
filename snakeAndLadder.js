var position = 0;
var player1Position = 0;
var player2Position = 0;
var diePlayCount = 0;
var player1DiePlayCount = 0
var player2DiePlayCount = 0
const MAX_POSITION = 5;

const randomValueBetweenOneToSix = () =>  Math.floor(Math.random()*10)%6+1;
const randomValueBetweenOneToThree = () => Math.floor(Math.random()*10)%3;

/**
 * @description genereating random number between one to six 
 * @method randomValueBetweenOneToSix generates random number
 */ 
var rollDieToGetNumber = () => {
        var randomNumber = randomValueBetweenOneToSix();
        diePlayCount ++;
		return randomNumber;
}

/**
 * @description checking option using random value
 * @method randomValueBetweenOneToThree generates random number
 * @var option is set based on random number
 */

 var checkOption = (dieNumber, player) => {
        var option = null;
        var currentPosition = 0;

        if(typeof (player) == 'undefined')
            currentPosition = position;
        else if (player === "Player1")
            currentPosition = player1Position;
		else
            currentPosition = player2Position;
        
        var randomNumber = randomValueBetweenOneToThree();
		switch(randomNumber)
		{
			case 0:
			option = "No Play";
			currentPosition = currentPosition;
			break;

			case 1:
			option = "Ladder";
			if ( (currentPosition + dieNumber) <= MAX_POSITION )
                currentPosition += dieNumber;
			break;
			
			default:
            option = "Snake";
			if ( (currentPosition - dieNumber) < 0 )
                currentPosition = 0;			
			else
                currentPosition -= dieNumber;
		}
		console.log(" Option is : " +option);
        console.log(" Current Position is : " +currentPosition+"\n");
        
        if ( typeof(player) == 'undefined')
            position = currentPosition;
		else if(player  === "Player1")
            player1Position = currentPosition;
        else
            player2Position = currentPosition;
 }

/**
 * @description game with two players
 * @var player1Position is used to keep track of player1 position
 * @var player2Position is used to keep track of player2 position
 * @method checkOption is used to check whether the option is noplay, ladder or snake
 */
 var gameWithTwoPlayers = () =>{
        var dieNumber;
		while ( player1Position < MAX_POSITION && player2Position < MAX_POSITION )
		{
			dieNumber = rollDieToGetNumber();
			player1DiePlayCount ++;
			console.log(" Die number for player1 is : " +dieNumber);
			checkOption(dieNumber , "Player1");

			if ( player1Position == MAX_POSITION ){
			console.log("Player1 Won !");		
			console.log("Number of times the die was played by player1 to win the game : "+player1DiePlayCount);
			break;	
			}
			dieNumber = rollDieToGetNumber();
			player2DiePlayCount ++;
			console.log(" Die number for player2 is : " +dieNumber);
			checkOption(dieNumber, "Player2");
		}
		if ( player2Position == MAX_POSITION ){
			console.log("Player2 Won !");
			console.log("Number of times the die was played by player2 to win the game : "+player2DiePlayCount);
		}
	}
console.log("\nGame with two players");
gameWithTwoPlayers();
