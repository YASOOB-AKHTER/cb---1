class BALLS{
    constructor(x,y,radius){
        var balloptions = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.radius=radius;
       this.body=Bodies.circle(x,y,radius,balloptions);
        World.add(world, this.body);
    }

    
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.radius,this.radius);
pop();
    }
    
}

  
  
  