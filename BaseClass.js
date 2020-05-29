class BaseClass{
    constructor(x, y, width, height, angle) {
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.x, this.body.y);
        rotate(angle);
        pop();
      }
}