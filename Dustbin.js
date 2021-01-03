class Dustbin {
	constructor(x,y) {

		this.x = x;
		this.y = y;
		this.dustbinWidth = 250;
		this.dustbinHeight = 320;
		this.wallThickness = 20;
		this.angle = 0;	

		this.image = loadImage("dustbin.png");
		
		this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true});

		this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		
		this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

		World.add(world, this.bottomBody);
		World.add(world, this.leftWallBody);
		World.add(world, this.rightWallBody);

	}
	display()
	{		

			image(this.image, 1200, 575);

			var posBottom = this.bottomBody.position;
			var posLeft = this.leftWallBody.position;
			var posRight = this.rightWallBody.position;

			/*

			push();
			translate(posLeft.x, posLeft.y);
			angleMode(RADIANS);
			fill(150);
			rotate(this.angle);
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();
			rectMode(CENTER);

			push();
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			angleMode(RADIANS);
			fill(150);
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push();
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER);
			angleMode(RADIANS)
			fill(150);
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop();

			*/

	}

}