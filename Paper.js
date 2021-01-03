class Paper
{
	constructor(x, y, RADIUS) {
	var options = {
        'isStatic' : false,
        'restitution' : 0.3,
        'friction' : 0.5,
		'density' : 1.2,
		
    }

		this.x = x;
		this.y = y;
		this.RADIUS= RADIUS;
		
		this.image = loadImage("paper.png");
        
		this.body = Bodies.circle(this.x, this.y, this.RADIUS/2, options);
		World.add(world, this.body);
    }
    
	display() {
			
			var paperPos = this.body.position;		
			imageMode(CENTER);
			image(this.image, this.body.position.x, this.body.position.y, this.body.RADIUS);
			push();
			translate(paperPos.x, paperPos.y);
			strokeWeight(3);
			fill(255,0,255);
			pop();

			
			
			
			
	}

}
