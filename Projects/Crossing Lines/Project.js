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
Project.prototype.create = function(nr){
  switch(nr){
    case 0:{
      this.text ="create space";
      this.coll = new SpaceCollection();
      this.coll.addSpace();
      this.coll.spaces[0].add(0,200,100);
      this.coll.spaces[0].add(1,200,200);
      this.coll.spaces[0].add(2,300,200);
      this.coll.spaces[0].add(3,300,100);
      this.lines = [];



      break;
    }
    case 1:{
      this.text ="crossing lines";
      var l = new Line(createVector(random(width),random(height)), createVector(random(width),random(height)));
      for(var i = 0; i < this.lines.length; i++){

        l.isCrossedAt(this.lines[i]);
      }
      append(this.lines, l);


      break;
    }
    case 2:{
      this.lines = [];
      break;
    }
    case 3:{
      this.text ="not crossing lines";
      var crossing = false;
      var l = new Line(createVector(random(width),random(height)), createVector(random(width),random(height)));
      for(var i = 0; i < this.lines.length; i++){
        if(!crossing){
          crossing = l.isCrossedBy(this.lines[i]);
        }
        else{
          break;
        }
      }
      if(!crossing){
        append(this.lines, l);
      }


      break;
    }
    case 4:{
      this.text ="not crossing short lines";
      var crossing = false;
      var x = random(width);
      var y = random(height);
      var l = new Line(createVector(x,y), createVector(x + random(-100,100),y + random(-100,100)));
      for(var i = 0; i < this.lines.length; i++){
        if(!crossing){
          crossing = l.isCrossedBy(this.lines[i]);
        }
        else{
          break;
        }
      }
      if(!crossing){
        append(this.lines, l);
      }


      break;
    }
    case 5:{
      this.text = "lines between lines";
      this.lines =[];
      this.line1 = new Line(createVector(0, random(height)), createVector(width, random(height)));
      this.line2 = new Line(createVector(0, random(height)), createVector(width, random(height)));
      this.t = 0

      break;
    }
    case 6:{
      var pos1 = app.posOnLine(this.line1.A, this.line1.B, 150, this.t);
      var pos2 = app.posOnLine(this.line2.A, this.line2.B, 50, this.t);
      var line = new Line(pos1, pos2);
      append(this.lines, line);
      //append(line.crossing,pos1);
      append(line.crossing,pos2);

      this.t += 1;
    }

  }
}

Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{
      this.showText();
      this.coll.spaces[0].change(3,1,0);
      this.coll.spaces[0].change(2,0,1);
      this.coll.spaces[0].change(1,-1,1);
      this.coll.spaces[0].change(0,0,3);
      this.coll.draw();

      break;
    }
    case 1:{

      this.showText();
      for(var i  in this.lines){
        this.lines[i].draw();
        for(var c in this.lines[i].crossing){
          fill(0);
          ellipse(this.lines[i].crossing[c].x, this.lines[i].crossing[c].y, 5,5);
        }
      }


      break;
    }
  }
}
