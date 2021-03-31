class Hexagon{
    constructor(x,y,radius){
        var options={
            friction : 1,
            density : 0.2
        }

        this.radius = radius;
        this.hexagon = loadImage("Hexagon.png");

        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world, this.body);
    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x,pos.y);
        rotate(angle);

        imageMode(CENTER);
        image(this.hexagon,0,0,this.radius*2,this.radius*2);

        pop();
    }
}