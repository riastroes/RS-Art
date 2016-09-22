/**
 * Created by Ria Stroes on 21-9-2016.
 */
 "use strict";
function Fractals(pos){
  this.level = 0;
  this.pos = pos.copy();
  this.rot = 0;
};

Fractals.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Fractals.prototype.draw0 = function(level){
  this.style(0);

  this.level = level + 1;
  this.spiral();
  if(this.level < 10){
    this.draw0(this.level);
  }

}
Fractals.prototype.spiral = function(){
  this.rot += 0.07;
  this.pos.add(0,5);
  push();
  translate(this.pos.x, this.pos.y);
  rotate(this.rot);

  line(0,0, 20,20);
  ellipse(25,25, 5,5);
  line(30,30, 80,80);
  ellipse(95,95, 15,15);
  line(105,105, 160,160);
  ellipse(190,190, 30,30);
  pop();


}
Fractals.prototype.draw1 = function(size,level){
  this.style(0);
  if(level ===0){
    this.pos = createVector(0,height/2);
    this.pos2 = createVector(width,height/2);
    size = 10;
  }

  this.level = level + 1;
  this.funLines(size);
  if(this.level < 20){
    size -= 1;
    this.draw1(size, this.level);
  }

}
Fractals.prototype.funLines = function(size){

  line(this.pos.x, this.pos.y, this.pos2.x, this.pos2.y);
  this.pos.y -=size;
  this.pos.x +=size;
  this.pos2.y +=size;
  this.pos2.x -=size;

}
