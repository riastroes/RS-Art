/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Soft(pg, pfrom, pto, pos){
   this.pg = pg;
   this.from = pfrom.copy();
   this.to = pto.copy();
   this.controlpos = pfrom.copy();
   this.speed;
   this.step = 0;
   this.pos = pos.copy();
   this.rot = 0;
   this.drop = 0;
};

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
      if(this.pos.y > app.project.machine.seesaw.right.y){
        this.controlpos = app.project.machine.seesaw.center;
        this.pos = this.controlpos.copy();
        this.pos.x += app.project.machine.seesaw.size/2;
      }
    }
    else{
        this.rot += 0.1;
    }
  }


}
Soft.prototype.draw =function(){
  this.style(0);

  this.move();
  this.pg.push();
  this.pg.translate(this.controlpos.x, this.controlpos.y);
  this.pg.ellipse(0, 0, 10,10);
  this.pg.rotate(this.rot);
  this.pg.ellipse(this.pos.x , this.pos.y, 10,10);
  this.pg.line(this.pos.x , this.pos.y, this.pos.x+5 , this.pos.y + 15);
  this.pg.ellipse(this.pos.x-10 , this.pos.y, 10,10);
  this.pg.line(this.pos.x-10 , this.pos.y, this.pos.x-15 , this.pos.y + 15);
  this.pg.ellipse(this.pos.x+10 , this.pos.y, 5,5);
  this.pg.pop();

}
