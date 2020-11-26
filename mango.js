class Mango{
    constructor(x,y,r){
        var ball_options ={
            isStatic: true,
            restitution: 1.0,
            friction:1
        }
        this.image = loadImage("Plucking mangoes/mango-50x50.png");
        this.body = Bodies.circle(x,y,r,ball_options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 20, 20);
        image(this.image,0,0,this.r); 
        pop();
    }

}