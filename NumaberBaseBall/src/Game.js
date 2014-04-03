
function Game(){
	this.number="";
	this.randomNumberStrategy = "";
};

Game.prototype.setRandomNumberStrategy = function(randomNumberStrategy){
	this.randomNumberStrategy = randomNumberStrategy;
};

Game.prototype.input = function(number){
	this.number = number;
};

Game.prototype.result = function(){
	if(this.number === "" || this.number === null || this.number.length != 3)
		return "format is invalid";
	else 
		return this.inspectStrikeOrBallorEnd();
};

Game.prototype.inspectStrikeOrBallorEnd = function(){
	var strike = 0;
	var ball = 0;
	var end = false;
	for(var i = 0; i < this.number.length ;i++){
		if(this.number.charAt(i) === this.randomNumberStrategy.charAt(i))
			strike++;
		for(var j = 0 ; j < this.randomNumberStrategy.length;j++){
			if(i != j && this.number.charAt(i) === this.randomNumberStrategy.charAt(j))
				ball++;
		}

		if(strike === 3)
			end = true;
	}
	return new GameResult(end, strike, ball);
}