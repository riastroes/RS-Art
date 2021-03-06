/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "ICE";
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
    this.strokecolor = app.pal.colors[1];
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
  this.style(0);
  text(this.text,60,50);
}

Project.prototype.init = function(){
  this.iceblocks = [];
  // for(var i = 0 ; i < 20; i++){
  //   this.iceblocks[i] = new Ice();
  //   this.iceblocks[i].createIce();
  // }
}
Project.prototype.draw = function(nr){
  this.showText();
  switch(nr){
    case 0:{
      if(frameCount % 10 == 0){
        var iceblock = new Ice();
        append(this.iceblocks,iceblock);
        iceblock.createIce();
      }
      for(var i = 0 ; i < this.iceblocks.length; i++){
        this.iceblocks[i].draw();
      }
      break;
    }
  }
}
