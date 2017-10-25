///code originally by Michael Fuller
//http://www.michaelfuller56.com/

function puffin (){

let puffin1;
let puffin2;

this.enter = function() {
  puffin1 = new Puffin();
  puffin2 = new Puffin();
  // print(puffin.x, bubble.y);
}

this.draw = function() {
  background(220);
  puffin1.move();
  puffin1.show();
  puffin2.move();
  puffin2.show();
}
}
class Puffin {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move() {

    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  // }


  show() {
    push();
    translate(this.x, this.y);
    stroke(0);
    strokeWeight(70);
    line(0, -35, 0, -65);
    noStroke();
    fill(220);
    //left eye dome
    ellipse(-17.5, -65, 35, 35);
    //right eye dome
    ellipse(17.5, -65, 35, 35);
    //chin
    arc(0, -65, 70, 70, 0, PI);
    fill(0);
    //left eye
    ellipse(-14, -65, 8, 8);
    //right eye
    ellipse(14, -65, 8, 8);
    //beak
    quad(0, -58, 4, -51, 0, -44, -4, -51);
    pop();
  }

  // }

  // function show() {

  //   //puffin.draw(110, 210);
}
