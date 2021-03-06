class Ball {
    constructor (x,y,width,height){
        var options = {
            isStatic: false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world, this.body);
    this.image = loadImage ("paper.png")
    this.x = x
    this.y = y
    this.width = width
    this.height = height

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x ,pos.y)
        fill("pink");
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}