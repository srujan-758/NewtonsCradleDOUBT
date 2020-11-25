class Bob{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.8,
            'friction':0.5,
            'density':0.7
        }
        this.body = Bodies.circle(x,y,radius,options);
       // this.image= loadImage("paper.png");
        //this.width= width;
        this.radius=radius;
        World.add(world,this.body);
      
     
    }
    display (){
        var pos=this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y); 
        rotate(angle);
        ellipseMode(CENTER);
        fill("black");
        ellipse(0,0, 80);        
        pop();
    }
};
