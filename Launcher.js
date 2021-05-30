class Launcher {
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.001,
            length:10
        }
    
        this.launcherObject = Constraint.create(options)
        World.add(world,this.launcherObject)

        this.bodyA = bodyA
        this.pointB = pointB
    }

    display(){

        if(this.launcherObject.bodyA){
           strokeWeight(3);
            line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
        }

    }

    fly(){
        this.launcherObject.bodyA = null
    }

    attach(body){
        this.launcherObject.bodyA = body;
    }

} 