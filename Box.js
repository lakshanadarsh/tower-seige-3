class Box{
    constructor(x,y,width,height){
        var options={
            friction : 1,
            density : 0.2
        }
        this.visibility = 225;
        this.width = width;
        this.height = height;
        this.color = "blue";
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world, this.body);
    }

    display(){
        if(this.body.speed < 3){
        var pos = this.body.position;
        var angle = this.body.angle;

        push()

        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);

        pop();
        }

        else{
            World.remove(world, this.body);
            //--------------------------Here I was not able to understand that how to use visibility on rect sprite
            push();
            this.visibility = this.visibility-5
            pop();
            //-----------------------------Here I was not able to understand that how to use visibility on rect sprite
          }
          //console.log(this.visibility);
    }
    score(){
        if(this.visibility<0){
            score = score+10;
        }
    }
    
}