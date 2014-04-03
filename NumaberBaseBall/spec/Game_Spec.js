describe("GameTest", function(){
	var game;

	beforeEach(function(){
		game = new Game();
	});

	it("test input", function(){
		game.input("123");
	});

	it("should return message when input value is empty", function(){
		game.input("");
		var result = game.result();
		expect(result).toEqual("format is invalid");
	});

	it("should return message when input value is null", function(){
		game.input(null);
		var result = game.result();
		expect(result).toEqual("format is invalid");
	});

	it("should return message when input is not length of 3", function(){
		game.input("123141234");
		var result = game.result();
		expect(result).toEqual("format is invalid");
	});

	it("test strike", function(){
		game.setRandomNumberStrategy("113");
		game.input("111");
		var result = game.result();
		expect(result.getStrikes()).toEqual(2);

		game.setRandomNumberStrategy("123");
		game.input("111");
		var result = game.result();
		expect(result.getStrikes()).toEqual(1);
	});

	it("test ball", function(){
		game.setRandomNumberStrategy("123");
		game.input("321");
		var result = game.result();
		expect(result.getBall()).toEqual(2);

		game.setRandomNumberStrategy("534");
		game.input("234");
		var result = game.result();
		expect(result.getBall()).toEqual(0);
	});

	it("should return matched result when input is strike 3", function(){
		game.setRandomNumberStrategy("111");
		game.input("111");
		var result = game.result();
		expect(result.isEnd()).toEqual(true);
	});
});