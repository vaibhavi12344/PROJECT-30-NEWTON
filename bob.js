class Bob{
    constructor(x,y,diameter){
    

    var options={
    'isStatic':false,
    'restitution':0.3,
    'friction':0.5,
    'density':0.5
    }
    this.body=Bodies.circle(x,y,diameter,options)
    
    this.diameter=diameter;
    
    World.add(world,this.body)
    }
    display(){
    circle(this.body.position.x,this.body.position.y,this.diameter)
    }
    }