var makeHopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeHopDancer.prototype.step;
  this.$node = $('<span class="hopDancer"></span>');
  this.setPosition(top, left);
};

makeHopDancer.prototype = Object.create(makeDancer.prototype);
makeHopDancer.prototype.constructor = makeHopDancer;

makeHopDancer.prototype.step = function() {

makeDancer.prototype.step.call(this, this.timeBetweenSteps);

//  this.$node.toggle();

};