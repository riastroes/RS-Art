/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Fractal(){
  this.rot =0;
};

Fractal.prototype.style = function(nr){

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
    case 3:
    this.strokecolor = app.pal.tint(app.pal.randomImgColor(),10);
    this.fillcolor = app.pal.tint(app.pal.randomImgColor(),10);
    this.thickness = 1;
    break;
    case 4:
    this.strokecolor = app.pal.tint(app.pal.randomImgColor(),40);
    this.fillcolor = false;
    this.thickness = 2;
    break;
    case 5:
    this.strokecolor = app.pal.tint(app.pal.randomImgColor(),40);
    this.fillcolor = false;
    this.thickness = 20;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Fractal.prototype.drawEllipses = function(x,y, w, h){
  this.style(2);
  ellipse(x,y, w, h);
  if(w>5){
    this.drawEllipses(x+10,y-15,w/4*3, h);

  }
}
Fractal.prototype.drawCircles = function(x,y,d){

  this.style(0);
  ellipse(x,y, d,d);

  if(d > 5){
    this.drawCircles(x+20,y,d/4*3);
    this.drawCircles(x,y-20,d/4*3);
  }

}

Fractal.prototype.drawCircles1 = function(x,y,d){
  this.style(3);
  push();
    translate(x,y);
    rotate(-PI/2);
    this.style(2);
    ellipse(0,0, d,d);

  if(d > 5){
    this.drawCircles1(20,0,d/4*3, d/4*3);
    this.drawCircles1(-20,0,d/4*3, d/4*3);
  }
  pop();
}
Fractal.prototype.drawCircles2 = function(x,y,d){
  this.style(3);
  push();
    translate(x,y);
    rotate(-PI/2);
    ellipse(0,0, d,d);

  if(d > 5){
    this.drawCircles2(30,0,d/4*3, d/4*3);
    this.drawCircles2(-30,0,d/4*3, d/4*3);
  }
  pop();
}
Fractal.prototype.drawCircles3 = function(x,y,d){
  this.style(3);
  push();
    translate(x,y);
    rotate(-PI/8);
    ellipse(0,0, d,d);

  if(d > 5){
    this.drawCircles3(30,0,d/4*3, d/4*3);
    this.drawCircles3(-30,0,d/4*3, d/4*3);
  }
  pop();
}
Fractal.prototype.drawRect= function(x,y,d){
  this.style(5);
  push();
    translate(x,y);
    rotate(-PI/6);
    rect(0,0, d,100);

  if(d > 5){
    this.drawRect(30,100,d/4*3, random(50,100));
    this.drawRect(-30,100,d/4*3,100);
  }
  pop();
}
Fractal.prototype.drawLines= function(x,y,x1,y1,level){
  this.style(3);
  this.level = level;
  this.level++;


  this.rot +=0.1;

  push();
    translate(x1,y1);
    rotate(this.rot)
    line(x,y, x1,y1);

  if(level<8000){
    this.drawLines(x,y, x1,y1,this.level);

  }
  pop();

}
Fractal.prototype.drawLines2= function(x,y,x1,y1,level){
  this.style(4);
  this.level = level;
  this.level++;


  this.rot +=0.1;

  push();
    translate(x1,y1);
    rotate(this.rot)
    line(x,y, x1,y1);

  if(level<8000){
    this.drawLines2(x,y, x1,y1,this.level);

  }
  pop();

}
