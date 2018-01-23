
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log(this);
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
};

  makeDancer.prototype.step = function(timeBetweenSteps) {
   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };
  

  makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  


