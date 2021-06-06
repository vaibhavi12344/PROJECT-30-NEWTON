class Rope{
    constructor(bodyA,pointB){
    

    var options={
     bodyA:bodyA,
     pointB:pointB
    }
    this.rope=Constraint.create(options);
    this.pointB=pointB;

    World.add(world,this.rope)
    }
    display(){

    var posA=this.rope.bodyA.position
    var posB=this.pointB
   
    strokeWeight(4);
    line(posA.x,posA.y,posB.x,posB.y);
    
    }
    }