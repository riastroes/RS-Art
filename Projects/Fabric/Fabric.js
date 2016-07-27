/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Fabric(pwidth,pheight, pcols, prows){
  this.width = pwidth;
  this.height = pheight;
  this.cols = pcols;
  this.rows = prows;
  this.patterns = [];
  for(var i = 0; i < (this.cols * this.rows); i++){
    append(this.patterns, new Pattern(this.width/this.cols, this.height/this.rows))
  };


};

Fabric.prototype.style = function(nr){

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
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.randomImgColor();
    this.fillcolor = false;
    this.thickness = 1;
    break;

  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Fabric.prototype.initPattern = function(nr){
  var i;
  this.style(2);
  for(var x = 0 ; x < this.cols; x++){
    for(var y = 0; y < this.rows; y++){
      i= y * this.cols + x;
      this.patterns[i].draw(nr);
    }
  }
}

Fabric.prototype.draw = function(nr){
  var i;
  this.style(2);
  for(var x = 0 ; x < this.cols; x++){
    for(var y = 0; y < this.rows; y++){
      i= y * this.cols + x;
      image(this.patterns[i].pg, x * this.patterns[i].width, y * this.patterns[i].height)
    }
  }
}
