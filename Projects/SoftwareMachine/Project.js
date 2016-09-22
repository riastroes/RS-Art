/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Software Machine";
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = false;
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(){
  this.machine = new Machine(800,800);
  this.machine.create();
  this.machine.run();
}
Project.prototype.run = function(nr){

  switch(nr){
    case 0:{
      this.machine.draw();
      break;
    }
  }
  this.showText();
}
