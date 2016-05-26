/**
 * Created by Ria Stroes on 20-5-2016.
 */
 "use strict";
function Project(){

  this.init()
};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,1);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],app.pal.colors[3],1);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,1);
  }

};
Project.prototype.init = function(){

}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      //from help reference

      background(250);
      push();
      translate(-200, -200, -200);
      normalMaterial();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      plane(80);
      pop();

      push();
      translate(-200, -200, 0);
      normalMaterial();
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      plane(80);
        pop();

      push();
      translate(-200, -200, 200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      plane(80);
      pop();

      push();
      translate(0, -200, -200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(80, 80, 80);
      pop();

      push();
      translate(0, -200, 0);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(80, 80, 80);
      pop();

      push();
      translate(0, -200, 200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(80, 80, 80);
      pop();


      push();
      translate(200, -200, -200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cone(80, 80);
      pop();

      push();
      translate(200, -200, 0);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cone(80, 80);
      pop();

      push();
      translate(200, -200, 200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cone(80, 80);
      pop();


      push();
      translate(-200, 200, -200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cylinder(80, 80);
      pop();

      push();
      translate(-200, 200, 0);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cylinder(80, 80);
      pop();

      push();
      translate(-200, 200, 200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      cylinder(80, 80);
      pop();


      push();
      translate(0, 200, -200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(80, 20);
      pop();

      push();
      translate(0, 200, 0);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(80, 20);
      pop();

      push();
      translate(0, 200, 200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      torus(80, 20);
      pop();


      push();
      translate(200, 200, -200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      sphere(80);
      pop();

      push();
      translate(200, 200, 0);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      sphere(80);
      pop();

      push();
      translate(200, 200, 200);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      sphere(80);
      pop();

      push();
      translate(0,0,0);
      rotateZ(frameCount * 0.01);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      sphere(50);
      pop();

      break;
    }
    case 1:{
      push();
      translate(0,0,0);
      rotateX(frameCount * 0.01);
      texture(app.images[1]);
      sphere(250);
      pop();
      break;
    }
  }
}
