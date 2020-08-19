class Bird {
    constructor(x, y){
        var options = {
          restitution : 1,
           friction : 0.4,
           density : 0.3,
        }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      World.add(world, this.body)  
    } 
    display(){
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        strokeWeight(3);
        stroke("brown");
        rect(0, 0, this.width, this.height);
        pop();
     }
 }
 
 