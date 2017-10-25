function roland(){
let fish1;
let fish2;
let gravity;
let mov_speed;
let random_pos;
let fish = [2, 3, 4]

this.enter = function() {
	gravity = 0;
	mov_speed = 0;
	fish1 = new Fish(width/2, height/2, width/2 + 30, height/2);
	// for (let i = 0; i <3; i++){
	// 	random_pos = random(-400, 400);
	// 	fish[i] = new Fish(width/2 + random_pos, height/2 + random_pos, width/2 + 30 + random_pos, height/2 + random_pos);
	// }
	//print(bubble.x, bubble.y);
}

this.draw = function() {
	mov_speed = mov_speed + 01;
    gravity = gravity + random(-0.1, 0.1);
    //print(gravity);
	background(255);
	fish1.show();
	fish1.move();
	// for (let i = 0; i <3; i++){
	// fish[i].show();
	// fish[i].move();
	// }	
//   fish2.show();
}

class Fish {
	constructor(temp_x1, temp_y1, temp_x2, temp_y2){
		
		this.x2_org = temp_x2;
		this.y2_org = temp_y2;

		//right fin
		this.x1 = temp_x1 + 20;
		this.y1 = temp_y1;
		this.x2 = temp_x2 + 10;
		this.y2 = temp_y2;
		this.rot_speed_r = random(0,1);

		//left fin
		this.x3 = temp_x1 - 20;
		this.y3 = temp_y1;
		this.x4 = temp_x2 - 70;
		this.y4 = temp_y2;
		this.rot_speed_l = random(0,1);

		//lower body
		this.x5 = temp_x1;
		this.y5 = temp_y1 - 20;
		this.x6 = temp_x2 - 30;
		this.y6 = temp_y2 + 60;
		this.rot_speed_b = 1;

		//back fin 
		this.x7 = temp_x1;
		this.y7 = temp_y1 + 45;
		this.x8 = temp_x2 - 20;
		this.y8 = temp_y2 + 80;
		this.rot_speed_bf = 1;		
	}
	// move() {
	// 	this.x1 = this.x1 + 1;
	// 	this.y1 = this.y1 + 1;
	// 	this.x2 = this.x2 + 1;
	// 	this.y2 = this.y2 + 1;
	// }

	move() {
		//add speed of rotation
		//fin right
		this.x1 = this.x1 + this.rot_speed_r/random(10,14);
		this.y1 = this.y1 + this.rot_speed_r/random(10,14);
		this.x2 = this.x2 + this.rot_speed_r/random(3,4);
		this.y2 = this.y2 + this.rot_speed_r/random(3,4);

		//fin left
		this.x3 = this.x3 - this.rot_speed_l/random(10,14);
		this.y3 = this.y3 + this.rot_speed_l/random(10,14);
		this.x4 = this.x4 - this.rot_speed_l/random(3,4);
		this.y4 = this.y4 + this.rot_speed_l/random(3,4);

		//body
		this.x5 = this.x5 - this.rot_speed_b/random(20,25);
		this.y5 = this.y5 + this.rot_speed_b/random(20,25);
		this.x6 = this.x6 - this.rot_speed_b/random(3,4);
		//this.y6 = this.y6 + this.rot_speed_b/random(20,25);

		//back fin
		this.x7 = this.x6;
		this.y7 = this.y6;
		this.x8 = this.x8 - this.rot_speed_bf/random(3,4);
		//this.y8 = this.y8 - this.rot_speed_bf/random(50,55);

		// //add gravity to speed of rotation
		// this.rot_speed_r  = this.rot_speed_r + gravity
		// this.rot_speed_l  = this.rot_speed_l + gravity

		// rotate only a few degrees, then go back

		//fin right
		if (this.y2 > this.y2_org + 10){
			print(this.y2_org);
			this.rot_speed_r = this.rot_speed_r * -1;
		}
		else if (this.y2 <= this.y2_org -5){
			this.rot_speed_r = this.rot_speed_r * -1;
		}
		//fin left
		if (this.y4 > this.y2_org + 10){
			this.rot_speed_l = this.rot_speed_l * -1;
		}
		else if (this.y4 <= this.y2_org -5){
			this.rot_speed_l = this.rot_speed_l * -1;
		}

		//body
		if (this.x6 > this.x2_org - 30 + 20){
			this.rot_speed_b = this.rot_speed_b * -1;
		}
		else if (this.x6 <= this.x2_org -20 -20){
			this.rot_speed_b = this.rot_speed_b * -1;
		}

		//fin back
		if (this.x8 > this.x2_org - 20 + 10){
			this.rot_speed_bf = this.rot_speed_b * -1;
		}
		else if (this.x8 < this.x2_org -10 -10){
			this.rot_speed_bf = this.rot_speed_b* -1;
		}

	}

	show(){
		push();
		translate(mov_speed/100 + gravity + noise(millis() / 10000.0) * 10,-1*(mov_speed/50 + gravity) + noise(millis() / 10000.0) * 100);
		pop();
		//print('sin', sin(millis() / 100.0))
		push();
		angleMode(DEGREES);
		translate(width/4*gravity/1000, height/4*gravity/100);

		pop();
		rotate(-1*(mov_speed/40));
		//strokeWeight(0.7);
		noStroke();
		//body spline
		// line(this.x5, this.y5, this.x6, this.y6);
		// //body
		// triangle(this.x5, this.y5 - 20, this.x5 - 20, this.y5 + 20, this.x5 + 20, this.y5 +20);
		// triangle(this.x5 - 20, this.y5 + 20, this.x5 + 20, this.y5 +20, this.x6, this.y6);

		//white grounding color
		for(let i = 0; i < 40; i++){
			stroke(255);
			fill(255);
			triangle(this.x5, this.y5 - 10 + i, this.x5 - 20, this.y5 + 20, this.x5 + 20, this.y5 +20);
			fill(255);
			triangle(this.x5 - 20, this.y5 + 20, this.x5 + 20, this.y5 +20, this.x6, this.y6-i);
		}

		for (let i = 0; i < 20; i++){
		    stroke(255);
			strokeWeight(random (0.2, 0.3));
			line(this.x1, this.y1, this.x2 - i/2, this.y2 + i);
			line(this.x3, this.y3, this.x4 + i/2, this.y4 + i);
			stroke(255)
			line(this.x7, this.y7, this.x8 + i/2, this.y8);
			//back fin
			strokeWeight(0.1);
			stroke(255)
			line(this.x5, this.y1+5, this.x6 - i/4, this.y2/100 + this.y8 -55);
		}

		// red color accents
		for(let i = 0; i < 40; i++){
			stroke(255, 0, 0, 255/i*10);
			fill(255, 0, 0, i*5);
			triangle(this.x5, this.y5 - 10 + i, this.x5 - 20, this.y5 + 20, this.x5 + 20, this.y5 +20);
			fill(255, 0, 0, i);
			triangle(this.x5 - 20, this.y5 + 20, this.x5 + 20, this.y5 +20, this.x6, this.y6-i);
		}

		for (let i = 0; i < 20; i++){
		    stroke(255, 0, 0, 255/i*4);
			strokeWeight(random (0.2, 0.3));
			line(this.x1, this.y1, this.x2 - i/2, this.y2 + i);
			line(this.x3, this.y3, this.x4 + i/2, this.y4 + i);
			stroke(255, 0, 0, 50)
			line(this.x7, this.y7, this.x8 + i/2, this.y8);
			//back fin
			strokeWeight(0.1);
			stroke(255,i*100)
			line(this.x5, this.y1+5, this.x6 - i/4, this.y2/100 + this.y8 -55);
		}
	}
}

}