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

};

Project.prototype.init = function(){
  background(255);
  rectMode(CENTER);
  this.size = 40;
  //(cols, rows, lmarge, tmarge, rmarge, bmarge){
  this.colors =[];
  this.force =[];
  this.grid = new Grid(40,40,30) ;
  for(var f = 0; f < 5; f++){
    this.force[f] = new Force(this.grid.pos[app.randomInt(this.grid.pos.length-1)],100,5);
  }



  for(var p = 0; p < this.grid.pos.length; p++){
    for(var f = 0; f < 5; f++){
      this.grid.applyForce(this.grid.pos[p], this.force[f]);
    }
  }


  this.col =[];
  this.coll =[];
  for(var i = 0; i < 12; i++){
    this.colors[i] = app.pal.tint(app.pal.imgcolors[i],30);
    this.coll[i] = [];
    this.coll[i][0] = this.grid.pos[app.randomInt(this.grid.pos.length)];
  }


}
Project.prototype.add = function(acol){
  var ok = false;
  var last = acol.length;
  var dir = createVector(app.randomInt(0,2)-1, app.randomInt(0,2)-1);

  if(app.is(acol[last-1])){

    var next =  p5.Vector.add(acol[last-1], dir.mult(this.size));

    if(next.x > this.grid.lmarge && next.x < (width - this.grid.rmarge)){
      if(next.y > this.grid.tmarge && next.y < (height-this.grid.bmarge)){
        if(!app.containsVector(acol, next)){
          append(this.col, next);
          append(acol, next);
          ok = true;
        }
      }
    }
  }
  return ok;
}
Project.prototype.update = function(){

  for(var i = 0; i < this.coll.length; i++){
    if(app.is(this.coll[i])){
      this.add(this.coll[i]);
    }
  }

}
Project.prototype.draw = function(nr){
  var m;
  switch(nr){


    case 0:{
      smooth();
      strokeWeight(0.1);
      for(var i = 0; i < this.coll.length; i++){
        for(var pos in this.coll[i]){


          fill(app.pal.tint(this.colors[i],1));
          if(app.is(this.coll[i][pos])){

            m = this.coll[i].length-i;
            stroke(0);
            rect(this.coll[i][pos].x-2 ,this.coll[i][pos].y-2,m/4,m/4);
            stroke(255);
            strokeWeight(1);
            rect(this.coll[i][pos].x ,this.coll[i][pos].y,m/4,m/4, 5);
            
          }
        }
      }
      break;
    }
  }


}
