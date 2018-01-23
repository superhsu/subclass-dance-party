var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  console.log(this);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="blinkyDancer"></span>');
  this.setPosition(this.top, this.left);
  this.step(); 
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer; 
makeBlinkyDancer.prototype.step = function() {
    $node.toggle();
    makeDancer.prototype.step.call(this);
  };