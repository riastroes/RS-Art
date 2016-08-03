/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "new project";
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
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
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
   this.cells = [];
   this.pos = createVector(random(100,width-100), random(100,height-100));
   append(this.cells, new Cell());
   this.cells[0].init(this.pos);
}
Project.prototype.update = function(){
   for(var i = 0; i < this.cells.length; i++){
     this.cells[0].update();
   }
}
Project.prototype.draw = function(nr){
  
  this.showText();
  for(var i = 0; i < this.cells.length; i++){
    this.cells[0].draw();
  }
}
