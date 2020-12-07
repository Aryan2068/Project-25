class Dustbin {
  constructor(x,y, width, height){
    var options ={
        isStatic: true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
   
   this.image = loadImage("dustbin.png");

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.thikness = 91;
    this.angle = 0;
    this.bottom_rect = Bodies.rectangle(this.x,this.y,this.width,this.thikness,options);
    this.left_rect = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thikness,this.height,options);
    this.right_rect = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thikness,this.height,options);
    Matter.Body.setAngle(this.left_rect, this.angle);
    Matter.Body.setAngle(this.right_rect, -1*this.angle);
    World.add(world,this.bottom_rect);  
  }
  display(){
    var pos1 = this.bottom_rect.position;
    var pos2 = this.left_rect.position;
    var pos3 = this.right_rect.position;
    var angle = this.angle;
    push();
    translate(pos1.x, pos1.y, pos2.x, pos2.y, pos3.x, pos3.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 80, 100);
    pop();
    //fill(4, 247, 241);
    rectMode(CENTER);
    /*rect(pos1.x,pos1.y,this.bottom_rect.width,this.bottom_rect.height);
    rect(pos2.x,pos2.y,this.left_rect.width,this.left_rect.height);
    rect(pos3.x,pos3.y,this.right_rect.width,this.right_rect.height);*/
  }
}