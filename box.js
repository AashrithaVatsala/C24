class Box {
   constructor(x, y, width, height){
       var options = {
         restitution : 1,
          friction : 0.4,
          density : 0.3,
       }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     World.add(world, this.body)  
   } 
   display(){
       push();
       translate(this.body.position.x, this.body.position.y);
       angleMode(RADIANS);
       rotate(this.body.angle);
       rectMode(CENTER);
       fill("brown");
       strokeWeight(3);
       stroke("black")
       rect(0, 0, this.width, this.height);
       pop(); 
    }
}

