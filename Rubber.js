class Rubber{
	constructor(x,y,r){
	  var options = {
		  restitution:0.4,
		  friction:0.4,
		  density:1
	  }
	     
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-1)/2, options)
		World.add(world, this.body);
	 

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			strokeWeight(3);
			stroke("black");
			fill("darkblue");
           ellipseMode(CENTER);
		   ellipse(0,0, this.r,this.r);
			pop();
	}

}