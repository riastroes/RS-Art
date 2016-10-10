/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){

};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.thickness = 1;
      textSize(12);
      break;
  }

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,50,50);
}
Project.prototype.init = function(){
  this.lines = [];
}
Project.prototype.create = function(nr){
  switch(nr){
    case 0:{
      this.text ="crossing lines";
      var l = new Line(createVector(random(width),random(height)), createVector(random(width),random(height)));
      for(var i = 0; i < this.lines.length; i++){
        l.isCrossedAt(this.lines[i]);
      }
      append(this.lines, l);
      break;
    }
  }
}

Project.prototype.draw = function(nr){

  switch(nr){

    case 0:{


      for(var i  in this.lines){
        this.lines[i].draw();
        for(var c in this.lines[i].crossing){
          this.lines[i].style(3);
          ellipse(this.lines[i].crossing[c].x, this.lines[i].crossing[c].y, 10,10);
        }
      }
      break;
    }
  }
}
