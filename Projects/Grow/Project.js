/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Cells";
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(1);
  text(this.text,60,50);
}

Project.prototype.init = function(){
   var t = 0;
   this.cells = [];
   this.attackers =[];
   for(var i = 0; i < 20; i++){
     this.pos = createVector(random(100,width-100), random(100,height-100));

     if(random(1)<0.1){
       append(this.attackers, new Cell(10,20));
       this.attackers[t].attacking = true;
       this.attackers[t].init(this.pos);
       t++;
     }
     else{
       append(this.cells, new Cell(50,100));
       this.cells[this.cells.length-1].init(this.pos);
     }

   }


}
Project.prototype.update = function(){
   for(var i = 0; i < this.cells.length; i++){
     this.cells[i].update(this.attackers);
   }
   for(var i = 0; i < this.attackers.length; i++){
     this.attackers[i].update();
   }
}
Project.prototype.draw = function(nr){

  this.showText();
  for(var i = 0; i < this.cells.length; i++){

    this.cells[i].draw();
  }
  for(var i = 0; i < this.attackers.length; i++){

    this.attackers[i].draw();
  }
}
