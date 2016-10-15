/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Curtain with holes";
  //this.init();
};

Project.prototype.style = function(nr,a){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;

    case 1:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = lerpColor(app.pal.colors[8],app.pal.colors[7], a);
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.tint(app.pal.imgcolors[0],20);
    this.fillcolor = false;
    this.thickness = 2;
    break;
    case 4:
    this.strokecolor = false;
    this.fillcolor = app.pal.tint(app.pal.colors[4],3);
    this.thickness = 10;
    break;

  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

};
Project.prototype.showText = function(){
  this.style(0);
  text(this.text,60,80);
}

Project.prototype.init = function(){
  this.center = createVector(width/2, height/2);
  this.lines = [];
  this.margin = (height - (50 * 10))/2;
  for( var x = this.margin; x < (width-this.margin); x += 5){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.lines, new Chain(createVector(x, this.margin),20, 30,(PI/2)-0.1,(PI/2)+0.1, this.margin));
  }

  var pos,radius, force;
  this.forces =[];
  for(var c = 0; c < 10; c++){
    pos = createVector(random(width), random(height));
    radius = app.random(50, 100);
    force = 1;
    append(this.forces, new Force(pos, radius, force));
  }
  this.style(3);
}
// Project.prototype.addForce = function(center,chain){
//   for(var j = 0 ; j < chain.pos.length; j++){
//     this.dis = p5.Vector.sub(center, chain.pos[j]);
//     this.len = mag(this.dis.x, this.dis.y);
//     if(this.len < this.radius){
//       this.dis.normalize();
//       this.dis.mult(this.len/this.force);
//       chain.pos[j].add(this.dis);
//     }
//   }
//   return chain;
// }
Project.prototype.changeForces = function(){
  for(var c = 0; c < 10; c++){
    this.forces[c].change(5);
  }
}
Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{

      this.changeForces();
      for(var c = 0; c < 10; c++){
        this.forces[c].show();
      }


      for(var i = 0; i< this.lines.length;i++){
        // for(var c = 0;  c < this.forces.length; c++){
        //   this.force = 2 + (c % 4);
        //   this.addForce(this.forces[c],this.lines[i]);
        // }
        this.lines[i].addForces(this.forces);
        this.lines[i].show();
      }
      break;
    }
  }


}
