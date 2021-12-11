class Ground{
	constructor(){
		var options = {
			isStatic:true
		}
		this.body = Bodies.rectangle(600,550,1900,15,options);
		this.width = 1900;
		this.height = 15;
		World.add(world,this.body);
	};
	display(){
		var pos = this.body.position;
		rectMode(CENTER);
		rect(pos.x,pos.y,this.width,this.height);
	}
}