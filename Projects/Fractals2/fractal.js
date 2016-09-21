/**
 * Created by Ria Stroes on 17-9-2016.
 */
 "use strict";
function Fractal(){
  this.rot =0;
};

Fractal.prototype.style = function(nr, y){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;//app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.randomColor();
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.tint(app.pal.randomImgColor(),20);
    this.fillcolor = false;
    this.thickness = 10;
    break;
    case 4:
    this.strokecolor = app.pal.randomImgColor();
    this.fillcolor = false;
    this.thickness = 10;

    break;



  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Fractal.prototype.draw = function(x,y,s,level){
  this.level = level + 1;
  this.style(0);
  ellipse(x,y, s, s);
  var center = createVector(x,y);
  if(this.level <10){
    var pos = app.posOnCircle(center,s/2,TWO_PI, PI/4);
    this.draw(pos.x, pos.y, s-1,this.level);
    var pos = app.posOnCircle(center,s/2,TWO_PI, -PI/4);
    this.draw(pos.x, pos.y, s-1,this.level);

  }
}
Fractal.prototype.draw1 = function(x,y,s,level){
  this.level = level + 1;
  s += 8
  this.style(0);
  arc(x,y, s, s, TWO_PI,PI/2);
  arc(x,y+s, s, s,  PI/2,-PI/2);

  arc(x,y+152 ,s,s, -PI/2,TWO_PI);

  var center = createVector(x,y);
  ellipse(center.x, center.y, 5,5);
  var pos = app.posOnCircle(center,s/2,TWO_PI,PI/2);
  ellipse(pos.x,pos.y, 5,5)

  center = createVector(x,y+152);
  ellipse(center.x, center.y, 5,5);
  line(pos.x,pos.y, pos.x, pos.y+100);
  line(pos.x,pos.y, pos.x+200, pos.y);

  var center = createVector(x,y);
  if(this.level < 10){
    this.draw1(center.x, center.y, s,this.level);

  }
}
Fractal.prototype.draw2 = function(x,y,s,level){
  this.level = level + 1;
  s += 12;
  this.style(0);
  arc(x,y, s, s, TWO_PI,PI/2);
  //arc(x,y, s, s,  PI/2,-PI/2);

  var center = createVector(x,y);

  var pos = app.posOnCircle(center,s/2,TWO_PI,PI/2);
  ellipse(pos.x, pos.y,5,5);

  line(pos.x,pos.y, pos.x-(12*10), pos.y);

  if(this.level < 10){
    this.draw2(x, y+2, s,this.level);

  }
}
Fractal.prototype.draw3 = function(x,y,s,level){
  this.style(2);
  this.level = level + 1;
  var pos = createVector(x,y);

  this.if(pos, 50, 7);
  if(this.level<10){
    this.draw3(x + 10, y, s, this.level);
  }
}
Fractal.prototype.draw4 = function(x,y,s,level){
  this.style(3);
  strokeCap(PROJECT);
  this.level = level + 1;
  var pos = createVector(x,y);

  this.if(pos, 50);
  if(this.level<10){
    this.draw4(x + 10, y, s, this.level);
  }
}
Fractal.prototype.draw5 = function(x,y,s,level){
  this.style(4);
  strokeCap(PROJECT);
  this.level = level + 1;
  this.pos = createVector(x,y);


  this.if(this.pos, 50);
  if(this.level<10){
    this.draw5(this.pos.x + 10, this.pos.y, s, this.level);
  }
}
Fractal.prototype.if = function(pos, perc){

  var newpos = pos.copy();
  newpos.y +=10;
  line(pos.x, pos.y , newpos.x , newpos.y)
  newpos.x -= 10;

  line(pos.x, pos.y+10 , newpos.x , newpos.y)
  if(pos.y < height){

    if(random(100) < perc){

      this.if(newpos, perc);
    }
    else{

      this.else(newpos, perc);
    }
  }
  pos = newpos.copy();
}
Fractal.prototype.else= function(pos, perc){

  var newpos = pos.copy();
  newpos.y +=10;
  line(pos.x, pos.y, newpos.x , newpos.y)
  newpos.x += 10;

  line(pos.x, pos.y+10 , newpos.x , newpos.y);
  if(pos.y < height){

    if(random(100) > perc){
      this.else(newpos, perc);
    }
    else{
      this.if(newpos, perc);
    }
  }
}
