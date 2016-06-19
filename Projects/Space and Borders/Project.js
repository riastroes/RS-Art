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
Project.prototype.showText = function(msg){
  this.style(0);
  text(msg,50,50);
}
Project.prototype.create = function(nr){
  switch(nr){
    case 0:{
      this.showText("create space");
      this.coll = new SpaceCollection();
      this.coll.addSpace();
      this.coll.spaces[0].add(0,200,100);
      this.coll.spaces[0].add(1,200,200);
      this.coll.spaces[0].add(2,300,200);
      this.coll.spaces[0].add(3,300,100);

      break;
    }
    case 1:{
      this.showText("crossing lines");
      this.lines = new Lines();
      for(var i = 0; i < 100; i++){
        this.lines.add(random(-1,1), random(width));
      }
      this.lines.cross();
      this.lines.doublecross();
      break;
    }
    case 2:{
      this.showText("crossing lines");
      this.lines = new Lines();
      // for(var i = 0; i < 10; i++){
      //   this.lines.add(random(-1,1), random(width));
      // }
      break;
    }
    case 3:{
      this.showText("crossing lines");
      this.lines.long(random(-1,1), random(width));

      this.lines.isCrossing(this.lines.def.length-1);
      this.lines.doublecross();
      break;
    }
    case 4:{
      this.showText("is pos on line");
      var a = createVector(200,310);
      var b = createVector(400,310);
      var p = createVector(200,210);
      line(a.x, a.y, b.x, b.y);
      if(app.isPosOnLine(p,a,b)){

        fill(color(255,0,0));
        ellipse(p.x, p.y, 10,10);
      }
      fill(255);
      ellipse(p.x, p.y, 10,10);
      break;

    }
    case 5:{
      this.showText("crossing lines");
      this.lines = new Lines();
      this.lines.add(0.5, 100);
      this.lines.add(-0.5, 200);

      this.lines.isCrossing(this.lines.def.length-1);
      this.lines.doublecross();
      break;
    }


  }
}

Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{
      this.showText(0);
      this.coll.spaces[0].change(3,1,0);
      this.coll.spaces[0].change(2,0,1);
      this.coll.spaces[0].change(1,-1,1);
      this.coll.spaces[0].change(0,0,3);
      this.coll.draw();
      break;
    }
    case 1:{

      this.showText(2);
      this.lines.draw();
      //this.lines.drawLine(0);
      this.lines.drawCrossings();
      this.lines.drawDoubleCrossings();


      break;
    }
  }
}
