/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Lasercutter Design 1";
  this.init();
}

Project.prototype.init = function(){
  this.chain = [];
  this.force = new Force(createVector(app.random(width),app.random(height)), app.random(50,100),5);
  this.ymax = ((height-80)/40);
  for(var i =0; i < this.ymax; i++){
    var first = createVector(40, 40 + (40 * i));
    append (this.chain, new Chain(first, 40,1,(width-80)/40));
  }
  this.style(1);
}
Project.prototype.applyForce = function(){
  for(var i =0; i < this.ymax; i++){
    this.chain[i].addForce(this.force, 20);
  }
}

Project.prototype.draw = function(nr){
  this.force.change(25);
  this.applyForce();
  if(frameCount %50 ===0){
    for( var i = 0; i < this.chain.length; i++){
     this.chain[i].draw2();
    }
  }
  if(mouseIsPressed){
    background(255);
  }

}
Project.prototype.style = function(nr){
  switch(nr){

    case 0:
    fill(0,100,0,10);
    stroke(0);
    rectMode(CORNERS);
    break;

    case 1:
    noFill();
    stroke(0);
    strokeWeight(1);
    break;

  }
}
