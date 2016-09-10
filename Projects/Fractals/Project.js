/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "new project";

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

Project.prototype.run = function(nr){
  switch(nr){
    case 0:{
      background(255);
      this.fractal = new Fractal();
      break;
    }
  }
}
Project.prototype.draw = function(nr){
  this.showText();
  switch(nr){
    case 0:{
      this.fractal.drawEllipses(300,500,500, 50);
      break;
    }
    case 1:{
      background(255);
      this.fractal.drawCircles(300,500,500);
      break;
    }
    case 2:{
      background(255);
      this.fractal.drawCircles1(300,400,500);
      break;
    }
    case 3:{
      background(255);
      this.fractal.drawCircles2(300,400,500);
      break;
    }
    case 4:{
      background(255);
      this.fractal.drawCircles3(300,400,500);
      break;
    }
    case 5:{
      background(255);
      this.fractal.drawRect(300,400,40);
      break;
    }
  }
}
