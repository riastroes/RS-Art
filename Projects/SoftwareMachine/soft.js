/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Soft(pg, pfrom, pto, pos){
   this.pg = pg;
   this.from = pfrom.copy();
   this.to = pto.copy();
   this.controlpos = pfrom.copy();
   this.speed = 1;
   this.step = 0;
   this.pos = pos.copy();
   this.rot = 0;
   this.drop = 0;
   this.isdropped = false;
   this.size = 30;
   if(random(100)<50){
     this.type = "ellipse";
   }
   else{
     this.type ="rect";
   }
};


Soft.prototype.run = function(){
  this.speed = 1;

}
Soft.prototype.move = function(){
  if(this.step < 100){
    this.controlpos = app.posOnLine(this.from, this.to, 100, this.step);
    this.step += this.speed;
  }
  else{

    if(this.rot > PI /2 ){
      this.drop += 1;
      this.pos.x += this.drop;

    }
    else if(this.isdropped == false){
        this.rot += 0.1;
    }

  }
  if(this.drop >27 && this.isdropped == false){
    this.controlpos = app.project.machine.parts[4].center.copy();
    var s = app.project.machine.parts[4].size/2;
    this.pos = createVector(random(s-60,s),0);
    this.isdropped = true;
    this.rot = 0;

  }
  else if(this.isdropped && this.rot > -PI){
    this.rot -= 0.01;
  }

}
Soft.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
  }
  app.style.pg(this.pg,this.strokecolor, this.fillcolor, this.thickness);

};
Soft.prototype.draw =function(){
  this.style(0);

  this.move();
  this.pg.push();
  this.pg.translate(this.controlpos.x, this.controlpos.y);
  this.pg.ellipse(0, 0, 10,10);
  this.pg.rotate(this.rot);
  if(this.type == "ellipse"){
    this.pg.ellipse(this.pos.x , this.pos.y, this.size, this.size);
  }
  else{
    this.pg.rect(this.pos.x, this.pos.y -(this.size/2), 10,this.size);
  }

  this.pg.pop();

}
