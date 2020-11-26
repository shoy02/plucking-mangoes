class Stone {
    constructor(x,y) {
       var options ={
        isStatic:false,
        density:1.2,
        fiction:1,
        restitution:0
       };

       this.image = loadImage("Plucking mangoes/stone.png");
       this.body = Bodies.rectangle(x,y,50,50,options);
       this.width = 50;
       this.height = 50;
       World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        fill(255);
        image(this.image,0,0,this.width,this.height); 
        pop();
    };
};