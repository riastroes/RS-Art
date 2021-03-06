/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "new project";
  this.fractal = new Fractal();

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}


Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{
      this.fractal.draw0(300,500,500, 50);
      break;
    }
    case 1:{
      background(255);
      this.fractal.draw1(300,500,500);
      break;
    }
    case 2:{
      background(255);
      this.fractal.draw2(300,400,500);
      break;
    }
    case 3:{
      background(255);
      this.fractal.draw3(300,400,500);
      break;
    }
    case 4:{
      background(255);
      this.fractal.draw4(300,400,500);
      break;
    }
    case 5:{
      background(255);
      this.fractal.draw5(300,400,40);
      break;
    }
    case 6:{
      background(255);
      push();
      translate(300,350);
      rotate(2);
      scale(0.1);
      this.rot = 0;
      this.fractal.draw6(-50,1000,30,30,1);
      pop();

      break;
    }
    case 7:{
      background(255);
      push();
      translate(300,250);
      rotate(2);
      scale(0.1);
      this.rot = 0;
      this.fractal.draw7(-50,1000,30,30,1);
      pop();
      break;
    }
    case 8:{
      push();
      translate(300,250);
      this.fractal.draw8(0,0,30,30,0);
      pop();
      break;
    }
    case 9:{
      background(255);
      push();
      translate(300,250);
      this.fractal.draw9(0,0,30,30,0);
      pop();
      break;
    }
    case 10:{
      background(255);
      push();
      translate(300,250);
      this.fractal.draw10(0,0,30,30,0);
      pop();
      break;
    }
    case 11:{
      background(255);
      push();
      translate(90, 300);
      this.fractal.draw11(0,0,-PI,0);
      pop()
      push();
      translate(250, 300);
      this.fractal.draw11(0,0,-PI/2,0);
      pop();
      push();
      translate(500, 300);
      this.fractal.draw11(0,0,-PI/3,0);
      pop();
      push();
      translate(750, 300);
      this.fractal.draw11(0,0,-PI/4,0);
      pop();
      push();
      translate(1070, 300);
      this.fractal.draw11(0,0,-PI/5,0);
      pop();
      push();
      translate(1390, 340);
      this.fractal.draw11(0,0,-PI/6,0);
      pop();

      push();
      translate(1740, 360);
      this.fractal.draw11(0,0,-PI/7,0);
      pop();
      push();
      translate(2040, 380);
      this.fractal.draw11(0,0,-PI/8,0);
      pop();
      push();
      translate(2290, 380);
      this.fractal.draw11(0,0,-PI/9,0);
      pop();
      break;
    }
  }
}
