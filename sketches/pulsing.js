//Sketch by Carrie Sijia Wang

function pulsing () {

var p1;
let pulses = [];

this.enter = function() {

  for (var i = 0; i < 300; i++) {
    pulses[i] = new Pulse(random(width), random(height), random(100), random(2));
  }
}


this.draw = function() {
  background(0);

  for (var i = 0; i < pulses.length; i++) {
    pulses[i].display();

  }
}
}


class Pulse {

  constructor(_x, _y, _d, _s) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.s = _s;

  }


  display() {
    strokeWeight(0.5);
    stroke(20, 200, 220);
    noFill();
    ellipse(this.x, this.y, this.d, this.d);
    this.grow();
    this.shrink();
  }

  grow() {
    this.d = this.d + this.s;
  }

  shrink() {
    if (this.d >= height) {
      this.s = this.s * -1;
    }
    if (this.d <= 10) {
      this.s = this.s * -1;
    }
  }

}
