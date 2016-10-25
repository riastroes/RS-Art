/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "GridWalk";
  this.init();
};

Project.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;


  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(){

  background(255);
  fill(0);
  strokeWeight(1);
  this.size = 40;

  this.colors =[];
  this.force =[];
  this.grid = new Grid(40,40,30) ;

  this.col =[];
  this.coll =[];
  for(var i = 0; i < 10; i++){
    this.colors[i] = app.pal.imgcolors[i];
    this.coll[i] = [];
    this.coll[i][0] = app.randomInt(this.grid.pos.length);
  }
}
Project.prototype.add = function(acol){
  var ok = false;
  var last = acol.length -1;
  //var dir = createVector(app.randomInt(0,2)-1, app.randomInt(0,2)-1);

  if(app.is(this.grid.pos[last])){

    var next =  this.grid.next(acol[last]);
    //var next = p5.Vector.add(acol[last-1], dir.mult(this.size));
    //var next =acol[last-1].add(dir.mult(this.size));

    //if(next.x > this.grid.lmarge && next.x < (width - this.grid.rmarge)){
    //  if(next.y > this.grid.tmarge && next.y < (height-this.grid.bmarge)){
        if(!app.contains(acol, next)){
          append(this.col, next);
          append(acol, next);
          ok = true;
        }
    //  }
    //}
  }
  return ok;
}
Project.prototype.update = function(){
  for(var f = 0; f < 1; f++){
    this.force[f] = new Force(this.grid.pos[app.randomInt(this.grid.pos.length-1)],300,30);
  }
  for(var p = 0; p < this.grid.pos.length; p++){
    for(var f = 0; f < 1; f++){
      this.grid.applyForce(this.grid.pos[p], this.force[f]);
    }
  }
  for(var i = 0; i < this.coll.length; i++){
    if(app.is(this.coll[i])){
      this.add(this.coll[i]);
    }
  }


}
Project.prototype.draw = function(nr){
  var m, d;
  switch(nr){
    case 0:{
      this.grid.show();
      break;
    }
    case 1:{

      for(var i = 0; i < this.coll.length; i++){
        stroke(0);
        strokeWeight(1);
        d=40;
        for(var p in this.coll[i]){
          d -= 1;
          m = this.coll[i][p];
          fill(app.pal.tint(this.colors[(this.coll.length-1)-i],255));
          ellipse(this.grid.pos[m].x ,this.grid.pos[m].y,d,d);
          //fill(app.pal.tint(this.colors[i],255));
          //ellipse(this.grid.pos[m].x ,this.grid.pos[m].y,38,38);
        }
      }

      break;
    }
  }
}
