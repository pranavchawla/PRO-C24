class Sand {
    constructor(x, y,radius) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1.5
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(0)
      stroke("black")
      fill(173,139,101);
      circle(0, 0, this.radius);
      pop();
    }
  };
  