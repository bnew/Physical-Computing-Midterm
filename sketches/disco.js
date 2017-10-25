function disco() {
// this.setup = function() { 
//   frameRate(20);
// } 
    this.draw = function() { 
    background(0);

  for (x = 0; x < width+20; x = x + 20) {
    for (y = 0; y < height; y = y + 20) {
      fill(random(200), random(220), random(250));
      noStroke();
      ellipse(x, y, 20, 20);
    }
  }
    }
}
