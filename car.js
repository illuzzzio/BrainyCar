class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.velocity = 0;
    this.acc = 0.2;
    this.maxvel = 5;
    this.friction = 0.05;

    this.ctrl = new Controls();
    this.revvel = -this.maxvel/2;
    this.theta = 0;
  }

  update() {
    if (this.ctrl.ahead) {
      this.velocity+= this.acc;
    }
    if (this.ctrl.back) {
      this.velocity-=this.acc;
    }

    if(this.velocity>this.maxvel){
      this.velocity = this.maxvel// defining the highest speed of our car 
    }
    if(this.velocity<this.revvel){
      this.velocity = this.revvel;
    }
    if(this.velocity>0){
      this.velocity-=this.friction;
    }
    if(this.velocity<0){
      this.velocity+=this.friction;
    }
    if(Math.abs(this.velocity)<this.friction){
      this.velocity =0;
    }
    if(this.velocity!=0){
      const flip = this.velocity>0?1:-1;
         if(this.ctrl.left){
           this.theta+=0.03*flip;
           }
         if(this.ctrl.right){
           this.theta-=0.03*flip;
           }
  }
    this.x -=Math.sin(this.theta)*this.velocity;
    this.y -= Math.cos(this.theta)*this.velocity;
    
 
    // You can add left/right control logic here if needed
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x,this.y);
    ctx.rotate(-this.theta)// circcle is already rotaed by 90 degree in the computer , so thats why - is used 
    ctx.beginPath();
    ctx.rect(
       -this.width / 2,
       -this.height / 2,
       this.width,
       this.height
    );
    
    ctx.fill();
    ctx.restore();
  }
}
