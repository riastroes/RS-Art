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
  var x = width/2;
  var y = height/2;
  switch(nr){
    case 0:{
      background(255);
      push();
      translate(x,y);
      this.fractal.draw11(0,0,-PI,0);
      pop();
      break;
    }
    case 1:{
      background(255);
      push();
      translate(x-15,y+10);
      this.fractal.draw11(0,0,-PI/2,0);

      pop();
      break;
    }
    case 2:{
      background(255);
      push();
      translate(x-30,y+20);
      this.fractal.draw11(0,0,-PI/3,0);

      pop();
      break;
    }
    case 3:{
      background(255);
      push();
      translate(x-45,y+30);
      this.fractal.draw11(0,0,-PI/4,0);
      pop();
      break;
    }
    case 4:{
      background(255);
      push();
      translate(x-60,y+40);
      this.fractal.draw11(0,0,-PI/5,0);
      pop();
      break;
    }
    case 5:{
      background(255);
      push();
      translate(x-75,y+50);
      this.fractal.draw11(0,0,-PI/6,0);
      pop();
      break;
    }
    case 6:{
      background(255);
      push();
      translate(x-90,y+60);
      this.fractal.draw11(0,0,-PI/7,0);
      pop();
      break;
    }
    case 7:{
      background(255);
      push();
      translate(x-110,y+70);
      this.fractal.draw11(0,0,-PI/8,0);
      pop();
      break;
    }
    case 8:{
      background(255);
      push();
      translate(x-130,y+80);
      this.fractal.draw11(0,0,-PI/9,0);
      pop();
      break;
    }
    case 9:{
      background(255);
      push();
      translate(x-150,y+90);
      this.fractal.draw11(0,0,-PI/10,0);
      pop();
      break;
    }
    case 10:{
      background(255);
      push();
      translate(x-170,y+100);
      this.fractal.draw11(0,0,-PI/11,0);
      pop();
      break;
    }
    case 11:{
      background(255);
      push();
      translate(x-190,y+100);
      this.fractal.draw11(0,0,-PI/12,0);
      pop();
      break;
    }
    case 12:{
      background(255);
      push();
      translate(x-210,y+100);
      this.fractal.draw11(0,0,-PI/13,0);
      pop();
      break;
    }
    case 13:{
      background(255);
      push();
      translate(x-230,y+100);
      this.fractal.draw11(0,0,-PI/14,0);
      pop();
      break;
    }
    case 14:{
      background(255);
      push();
      translate(x-250,y+100);
      this.fractal.draw11(0,0,-PI/15,0);
      pop();
      break;
    }
  }
}
