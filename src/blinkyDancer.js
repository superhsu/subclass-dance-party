var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makeBlinkyDancer.prototype.step;
  this.$node.attr('src', 'src/images/morty.gif');
  this.$node.addClass('dancer');
  this.setPosition(top, left);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {

makeDancer.prototype.step.call(this, this.timeBetweenSteps);

// this.$node.toggle();

};