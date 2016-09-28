/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function SeeSaw(pg, center,size){
   this.pg = pg;
   this.center = center.copy();
   this.size = size;
   this.left = createVector(-this.size /2, 0);
   this.right = createVector(this.size /2, 0);
   this.rot = 0;

};

SeeSaw.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.imgcolors[0];
    this.fillcolor = app.pal.imgcolors[1];
    this.thickness = 20;
    break;
    case 1:
    this.strokecolor = app.pal.imgcolors[0];
    this.fillcolor = app.pal.imgcolors[1];
    this.thickness = 10;
    break;
  }
  app.style.pg(this.pg,this.strokecolor, this.fillcolor, this.thickness);

};

SeeSaw.prototype.run = function(){
  this.speed = 0.01;

}
SeeSaw.prototype.move = function(){

  if(this.rot > PI/4 ){
    this.speed = -0.01

  }
  else if( this.rot <= -PI/4){
    this.speed = 0.01;
  }
  this.rot += this.speed;

}
SeeSaw.prototype.draw =function(){
  this.style(0);

  this.move();
  this.pg.push();
  this.pg.translate(this.center.x, this.center.y);
  this.pg.rotate(this.rot);
  this.pg.ellipse(0,0,30,30);
  this.pg.line(this.left.x , this.left.y, this.right.x , this.right.y);
  this.style(1);
  this.pg.rect(this.left.x  , this.left.y -40, 60,40);
  this.pg.rect(this.right.x - 60 , this.right.y -40, 60,40);
  this.pg.pop();

}
