var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = makePopDancer.prototype.step;
  this.$node.attr('src', 'src/images/pickles.gif');
  this.$node.addClass('dancer animate');
  this.setPosition(top, left);
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;

makePopDancer.prototype.step = function() {

makeDancer.prototype.step.call(this, this.timeBetweenSteps);

 //this.$node.toggle();

};