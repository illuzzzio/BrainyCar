const canvas = document.getElementById("myCanvas");

// canvas.height = window.innerHeight;
canvas.width = 300;

// lets pretend we have a car , and we want to draw it on the canvas //
const ctx = canvas.getContext("2d");

//creating the car//
const car = new Car(100,100,32,52); //x-y pos, width-height

car.draw(ctx);


const animate =()=>{
  car.update();
  canvas.height = window.innerHeight;
  // so as soon as the canvas height updates , car height also adjust making it move without streching , as because erlier when the we press arrow up , the car was moving and was getting elongated , but now , the car is moving relative to canvas height. as the car streaches , canvas height also adjust , making an illusion that the car is moving....

  car.draw(ctx);
  requestAnimationFrame(animate);
}
animate();

