class Glass {
  constructor(x, y) {

   
   
    this.x=x;
    this.y=y;
    this.angle=0;
    this.width=200;
    this.height=100;
    this.thickness=20;
    this.bottomBody=Bodies.rectangle(this.x,this.y,this.height,this.width,{isStatic:true})
    this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.height,{isStatic:true})
    Matter.Body.setAngle(this.leftBody,this.angle);
    this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.height,{isStatic:true})
    Matter.Body.setAngle(this.rightBody,-1*this.angle);
  
    World.add(world,this.bottomBody);
    World.add(world,this.leftBody);
    World.add(world,this.rightBody);

  }
  display(){
    var posbottom =this.bottomBody.position;
    var posleft=this.leftBody.position;
    var posright=this.rightBody.position;
    push();
    translate(posleft.x,posleft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    rotate(this.angle);
    fill(255);
    rect(0, 0, this.thickness, this.height);
    pop();

    push();
    translate(posright.x,posright.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    rotate(-1*this.angle);
    fill(255);
    rect(0, 0, this.thickness, this.height);
    pop();

    push();
    translate(posbottom.x,posbottom.y);
    rectMode(CENTER);
    angleMode(RADIANS)
    fill(255);
    rect(0, 0, this.width, this.thickness);
    pop();








  }
};