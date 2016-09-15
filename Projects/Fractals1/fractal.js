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
    this.strokecolor = app.pal.imgcolors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 6:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 7:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 8:
    this.strokecolor = app.pal.tint(app.pal.colors[5],10);
    this.fillcolor = false;
    this.thickness = 25;
    break;
    case 9:
    this.strokecolor = app.pal.tint(app.pal.colors[5],70);
    this.fillcolor = false;
    this.thickness = 25;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Fractal.prototype.draw0 = function(x,y, w, h){
  this.style(2);
  ellipse(x,y, w, h);
  if(w>5){
    this.draw0(x+10,y-15,w/4*3, h);

  }
}
Fractal.prototype.draw1 = function(x,y,d){

  this.style(0);
  ellipse(x,y, d,d);

  if(d > 5){
    this.draw1(x+20,y,d/4*3);
    this.draw1(x,y-20,d/4*3);
  }

}

Fractal.prototype.draw2= function(x,y,d){
  this.style(3);
  push();
    translate(x,y);
    rotate(-PI/2);
    this.style(2);
    ellipse(0,0, d,d);

  if(d > 5){
    this.draw2(20,0,d/4*3, d/4*3);
    this.draw2(-20,0,d/4*3, d/4*3);
  }
  pop();
}
Fractal.prototype.draw3 = function(x,y,d){
  this.style(3);
  push();
    translate(x,y);
    rotate(-PI/2);
    ellipse(0,0, d,d);

  if(d > 5){
    this.draw3(30,0,d/4*3, d/4*3);
    this.draw3(-30,0,d/4*3, d/4*3);
  }
  pop();
}
Fractal.prototype.draw4 = function(x,y,d){
  this.style(3);
  push();
    translate(x,y);
    rotate(-PI/8);
    ellipse(0,0, d,d);

  if(d > 5){
    this.draw4(30,0,d/4*3, d/4*3);
    this.draw4(-30,0,d/4*3, d/4*3);
  }
  pop();
}
Fractal.prototype.draw5= function(x,y,d){
  this.style(5);
  push();
    translate(x,y);
    rotate(-PI/6);
    rect(0,0, d,100);

  if(d > 5){
    this.draw5(30,100,d/4*3, random(50,100));
    this.draw5(-30,100,d/4*3,100);
  }
  pop();
}
Fractal.prototype.draw6= function(x,y,x1,y1,level){
  this.style(3);
  this.level = level;
  this.level++;


  this.rot +=0.1;

  push();
    translate(x1,y1);
    rotate(this.rot)
    line(x,y, x1,y1);

  if(level<8000){
    this.draw6(x,y, x1,y1,this.level);

  }
  pop();

}
Fractal.prototype.draw7= function(x,y,x1,y1,level){
  this.style(4);
  this.level = level;
  this.level++;


  this.rot +=0.1;

  push();
    translate(x1,y1);
    rotate(this.rot)
    line(x,y, x1,y1);

  if(level<8000){
    this.draw7(x,y, x1,y1,this.level);

  }
  pop();

}
Fractal.prototype.draw8= function(x,y,x1,y1,level){
  this.style(4);
  this.level = level;
  this.level++;
  if(this.level == 1){
    this.scale = 1;
    this.rot =1;
  }
  else{
    this.scale += .00001;
    this.rot = random(PI);
  }

  this.rot =1;
  strokeWeight(0.5);
  ellipse(x,y, x1,y1);
  push();
    translate(x1,y1);
    rotate(this.rot);
    scale(this.scale);

  if(level<700){
    this.draw8(10,10,30,30,this.level);


  }
pop();

}
Fractal.prototype.draw9= function(x,y,x1,y1,level){


  this.level = level;
  this.level++;
  if(this.level == 1){
    this.scale = 1;
    this.rot =1;
  }
  else{
    this.scale += .00001;
    this.rot = random(PI);
  }
  if(level% 10 == 0){
    this.style(1);
    ellipse(x,y, 10,10);
  }
  else{
    this.style(5);
  }

  this.rot =1;
  strokeWeight(0.5);
  ellipse(x,y, x1,y1);
  push();
    translate(x1,y1);
    rotate(this.rot);
    scale(this.scale);

  if(level<700){
    this.draw9(10,10,30,30,this.level);


  }
pop();

}
Fractal.prototype.draw10= function(x,y,x1,y1,level){


  this.level = level;
  this.level++;
  if(this.level == 1){
    this.scale = 1;
    this.rot =1;
  }
  else{
    this.scale += .00001;
    this.rot = random(PI);
  }
  this.rot =1;
  strokeWeight(0.5);

  if(level% 10 == 0){
    this.style(8);
    triangle(0,0,x,y, x1,y1);
  }
  else{
    this.style(1);
    triangle(0,0,x,y, x1,y1);
  }


  push();
    translate(x1,y1);
    rotate(this.rot);
    scale(this.scale);

  if(level<700){
    this.draw10(10,10,30,30,this.level);


  }
pop();

}
Fractal.prototype.draw11= function(x,y,rot,level){
  this.style(0);
  push();
    translate(x+10,y+10);
    rotate(rot);
    this.style(0);
    ellipse(10,20,20,20);
    ellipse(40,20,20,20);

    rect(20,20,10,30);


this.style(1);
if(rot < -PI/15){
triangle(25,50,45,60,10,60);
    ellipse(10,25,10,10);
    ellipse(40,25,10,10);
  }
  else{
    triangle(25,60,45,50,10,50);
        ellipse(15,20,10,10);
        ellipse(45,20,10,10);
  }

  if(level < 10){
    this.draw11(20,20,rot,level+1);
    this.draw11(20,40,rot,level+1);
  }
  pop();
}
