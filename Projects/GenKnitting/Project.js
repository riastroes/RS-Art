/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Generate Knitting by Ria Stroes";
  this.init();
}

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 5;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 2;
    break;
    case 2:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);
}
Project.prototype.showText = function(){
  textSize(12);
  textFont("Courier");
  this.style(0);
  text(this.text,width-220,height-25);
  this.style(1);
  text(this.text,width-220,height-25);
}

Project.prototype.init = function(){
  this.knitting = new GenKnitting(30,60);
}
Project.prototype.run = function(nr){

  switch(nr){

    //generate knitting
    case 0:{
       //create simple knitting row
       this.knitting.create(createVector(100,100),3);
       this.knitting.draw();
      break;

    }
    case 1:{
      //create gcode
      this.gcode = new Gcode();
      this.gcode.createHeading(210, 70); //temperature extruder, temperature bed
      this.gcode.moveToStart(this.knitting.knitting[0].x, this.knitting.knitting[0].y);
      this.gcode.createEnd();
      break;
    }
    case 2:{
      background(255, 240,250);
      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
    case 3:{
      background(255);
      this.knitting.createOutline(30,6);
      this.knitting.drawOutline();
      this.knitting.draw();
      this.knitting.genKnitting(createVector(100,100));
      break;
    }
    case 4:{
      //create gcode
      this.gcode = new Gcode();
      this.gcode.createHeading(210, 70); //temperature extruder, temperature bed
      this.gcode.createFirstLayer(this.knitting.genoutline, this.knitting.genknitting, 0);
      this.gcode.createEnd();
      break;
    }
    case 5:{
      fill(0);
      textSize(24);
      text("Save gcode now, press C", 100,50);
      if (keyIsPressed === true){
        if(key === 'c'){
          this.gcode.save("test1.gcode");
        }
        keyIsPressed =false;
        return false;
      }
      break;
    }
    case 6:{
      background(255);
    }
  }
}
