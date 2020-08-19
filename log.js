class Log {
    constructor(x, y, height, angle){
        var options = {
          restitution : 1,
           friction : 2,
           density : 0.3,
        }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body, angle)
      World.add(world, this.body)  
    } 
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(3)
        stroke("green");
        rect(0, 0, this.width, this.height);
        pop(); 
     }
 }
 
 