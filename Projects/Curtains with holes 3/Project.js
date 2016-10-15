/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.text = "Curtain with holes";
  this.init();
}

Project.prototype.init = function(){
  this.chain = [];
  this.force = new Force(createVector(app.random(width),app.random(height)), app.random(50,100),5);
  for(var i =0; i < width/10; i++){
    var top = createVector(10 * this.chain.length, 10);
    append (this.chain, new Chain(top, 1,10, height/10));
  }
}
Project.prototype.applyForce = function(){
  for(var i =0; i < width/10; i++){
    this.chain[i].addForce(this.force);
  }
}

Project.prototype.draw = function(nr){
  this.force.change(5);
  this.applyForce();
  for( var i = 0; i < this.chain.length; i++){
   this.chain[i].draw();
  }

}
