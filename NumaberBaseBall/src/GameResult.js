function GameResult(end, strike, ball){
	this.strike = strike;
	this.ball = ball;
	this.end = end;
};

GameResult.prototype.getStrikes = function(){
	return this.strike;
};

GameResult.prototype.getBall = function(){
	return this.ball;
};

GameResult.prototype.isEnd = function(){
	return this.end;
};