var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  //this.setPosition(top, left);
  this.step(); 
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer; 
makeBlinkyDancer.prototype.step = function() {
    this.$node.toggle();
    makeDancer.prototype.step.call(this);
  };