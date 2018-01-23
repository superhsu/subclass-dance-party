
var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top; 
  this.left = left; 
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(this.top, this.left);
};

  makeDancer.prototype.step = function(timeBetweenSteps) {
  var step = this.step.bind(this);
  setTimeout(step, this.timeBetweenSteps);
  this.$node.toggle();
  };
  

  makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: this.top,
      left: this.left
    };
    this.$node.css(styleSettings);
  };

  


