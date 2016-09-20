/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Fractals";

  this.fractal = new Fractal();


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
    this.thickness = 10;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.randomColor();
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.tint(app.pal.randomColor(),20);
    this.thickness = 1;
    break;
    case 4:
    this.strokecolor = app.pal.colors[0];
    var colora = app.pal.randomColor();
    var colorb = color(255,0,0);
    this.fillcolor = app.pal.tint(lerpColor(colora, colorb, random(1)),20);
    this.thickness = 1;
    break;


  }

  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,50);
}


Project.prototype.draw = function(nr){
  var x = width/2;
  var y = 0;
  switch(nr){
    case 0:{
      //diagonal with circles
      background(255);
      this.text = "Fractals " + nr;
      this.showText();
      push();
      translate(x,y);
      this.fractal.draw(0,0,50,0);
      pop();
      break;
    }
    case 1:{
      //evenwijdige lijnen langs een arc
      background(255);
      this.text = "Fractals " + nr;
      this.showText();
      push();
      translate(x,50);
      this.fractal.draw1(0,0,50,0);
      pop();
      break;
    }
    case 2:{
      //evenwijdige lijnen langs een arc
      background(220);
      this.text = "Fractals " + nr;
      this.showText();
      push();
      translate(x,250);
      this.fractal.draw2(0,0,50,0);
      pop();
      break;
    }
    case 3:{
      //if ruitjes papier alle baan
      background(220);
      var level =0;
      this.fractal.draw3(0,0,50, level);
      this.text = "Fractals " + nr;
      this.showText();
      break;
    }
    case 4:{
      //if ruitjes papier alle banen
      background(255);
      this.text = "Fractals " + nr;
      this.showText();
      push();
      translate(0,0);
      for(var i = 0; i < width; i += 10){
        this.fractal.draw3(i,0,50);
      }
      pop();
      break;
    }


  }
}
