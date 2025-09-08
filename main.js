const canvas = document.getElementById("myCanvas");

// canvas.height = window.innerHeight;
canvas.width = 300;

// lets pretend we have a car , and we want to draw it on the canvas //
const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2, canvas.width*0.91);

//creating the car//
const car = new Car(road.GetCenterofLane(3),100,30,50); //x-y pos, width-height

car.draw(ctx);


const animate =()=>{
  car.update();
  canvas.height = window.innerHeight;
  ctx.save();
  ctx.translate(0,-car.y+canvas.height*0.5);
  road.draw(ctx);
  // so as soon as the canvas height updates , car height also adjust making it move without streching , as because erlier when the we press arrow up , the car was moving and was getting elongated , but now , the car is moving relative to canvas height. as the car streaches , canvas height also adjust , making an illusion that the car is moving....

  car.draw(ctx);
  ctx.restore();
  requestAnimationFrame(animate);
}
animate();

