var $ = require('jquery');

function bettingEngine () {
	
	this.scoringConfig = "{}";
	
}

bettingEngine.prototype.init = function() {
	console.log(this.scoringConfig);
};

bettingEngine.prototype.placeBets = function() {

};

bettingEngine.prototype.getBettingScoringConfig = function() {
	
	obj = $.parseJSON(this.scoringConfig);
	console.log(obj);
}

bettingEngine.prototype.setBettingScoringConfig = function() {

};

bettingEngine.prototype.calculateBet = function() {

};

be1 = new bettingEngine();
be2 = new bettingEngine();

be1.init();
be2.init();

be1.getBettingScoringConfig();