/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Weave";

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor =app.pal.randomImgColor();
    this.fillcolor = false;
    this.thickness = 1;
    break;

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}

Project.prototype.init = function(nr){

  switch(nr){
    case 0:{
      this.fabric = new Fabric(width, height,6,4);
      this.fabric.initPattern(nr);
      break;
    }
    case 1:{
      this.fabric = new Fabric(width, height,7,4);
      this.fabric.initPattern(nr);
      break;
    }
    case 2:{
      this.fabric = new Fabric(width, height,2,2);
      this.fabric.initPattern(nr);
      break;
    }
    case 3:{
      this.fabric = new Fabric(width, height,1,1);
      this.fabric.initPattern(nr);
      break;
    }
    case 4:{
      this.fabric = new Fabric(width, height,1,1);
      this.fabric.initPattern(nr);
      break;
    }
  }
}
Project.prototype.draw = function(nr){
  background(app.pal.colors[1]);

  switch(nr){
    case 0:{
      this.fabric.draw(0);
      break;
    }

  }
  this.showText();
}
