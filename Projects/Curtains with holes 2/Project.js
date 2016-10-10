/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Curtain with holes";
  this.init();
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
  var margin = (height - (50 * 10))/2;
  for( var x = margin; x < width-margin; x += 5){
    //function Chain(start,distance, length,  min , max, margin){
    append(this.lines, new Chain(createVector(x, margin),10, 50,(PI/2)-0.1,(PI/2)+0.1, margin));
  }
}
Project.prototype.addForce = function(center,chain, radius, force){
  for(var i = 0 ; i < chain.pos.length; i++){
    var dis = p5.Vector.sub(center, chain.pos[i]);
    var len = mag(dis.x, dis.y);
    if(len < radius){
      dis.normalize();
      dis.mult(len/force);
      chain.pos[i].add(dis);
    }
  }
  return chain;
}
Project.prototype.draw = function(nr){
  var radius,force;
  switch(nr){
    case 0:{

      var max = this.lines.length;
      var forces =[];
      for(var c = 0; c < 10; c++){
        forces[c] = createVector(random(100,width-100), random(100,height-100));

      }


      this.style(3);
      radius = random(50,150);
      force = random(1,4);

      for(var i = 0; i< max;i++){

        for(var c = 0; c < 10; c++){
          force = 2 + (c % 4);
          this.lines[i] = this.addForce(forces[c],this.lines[i],radius, force);
        }

          this.lines[i].show();
      }

      break;
    }
  }


}
