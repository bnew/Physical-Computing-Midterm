///code originally by Michael Blum 
//http://michaeljblum.com/

function klee (){

this.setup = function() { 
  frameRate(20);
} 

this.draw = function() { 
  background(255, 255, 234);
  noStroke();
  
  //purp
  fill(163, 152, 255);
  rect(15,15,600,400);
  
  //turquise rect b-ground
  fill(71, 209, 230);
  rect(30,30,570,370);
  
  fill(41, 163, 163);
  ellipse(85,65,50);
  
  push();
  fill(214, 245, 245);
  translate(-1,0);
  scale(1+sin(frameCount*0.3)*0.001);
  slab();
  pop();
  
  push();
  fill(173, 235, 235);
  translate(-1,-25);
  scale(1+sin(frameCount*0.5)*0.001);
  slab();
  pop();
  
  push();
  fill(205,255,235);
  translate(-1,-50);
  scale(1+sin(frameCount*0.3)*0.001);
  slab();
  pop();
  
  push();
  fill(205,255,235);
  translate(-1,-50);
  scale(1+sin(frameCount*0.3)*0.001);
  slab();
  pop();
  
  push();
  fill(205,225,245);
  translate(-1,-75);
  scale(1+sin(frameCount*0.7)*0.001);
  slab();
  pop();
  
  push();
  fill(53, 62, 80);
  translate(-1,-100);
  scale(1+sin(frameCount*0.5)*0.001);
  slab();
  pop();
  
  push();
  fill(36, 105, 150);
  translate(-1,-125);
  scale(1+sin(frameCount*0.7)*0.001);
  slab();
  pop();
  
  push();
  fill(36, 76, 143);
  translate(-1,-125);
  scale(1+sin(frameCount*0.2)*0.001);
  slab();
  pop();
  
  push();
  fill(40, 168, 178);
  translate(-1,-150);
  scale(1+sin(frameCount*0.9)*0.001);
  slab();
  pop();
  
  push();
  fill(92, 133, 214);
  translate(-1,-175);
  scale(1+sin(frameCount*0.1)*0.001);
  slab();
  pop();
  
  push();
  fill("blue");
  translate(-1,-200);
  scale(1+sin(frameCount*0.4)*0.001);
  slab();
  pop();
  
  // 1
  fill(152, 191, 209);
  rect(55,225,140,90);
  
  //2
  fill(204, 235, 235);
  triangle(55,225,75,160,125,225);
  
    
  //3
  fill(224, 255, 255);
  triangle(75,160,125,225,175,160);
    
  //4
	fill(204, 235, 235);
  triangle(125,225,175,160,195,225);  
  
  //5
	fill(170,200,210);
  rect(335,275,60,40);
  
  //6
  fill(190,220,220);
  rect(335,235,60,40);
  
  //7
  fill(210,240,240);
  triangle(335,235,365,160,395,235);
  
  //8
	fill(166, 183, 225);
  triangle(335,235,335,160,365,160);
  
  //9 (same color as 8...)
  triangle(365,160,395,160,395,235);
  
  //10
	fill(224, 255, 255);
  rect(395,275,40,40); 
  
  //11
  fill(100,130,170);
  rect(435,275,25,40);
  
  //12
  fill(234,255,255);
  rect(455,275,45,40);
  
  //13
  fill(255, 230, 235);
  rect(395,190,105,85);
  
  //14
  fill(255,253,251);
  triangle(395,190,445,120,500,190);
  
  //15
  fill(250,225,230);
  triangle(395,190,395,120,445,120);
  
  //16
  
  triangle(445,120,500,120,500,190);
  
  
}


function slab() {
	rect(30,375,572,25);
}

}