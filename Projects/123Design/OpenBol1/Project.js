/**
 * Created by Ria Stroes on 20-5-2016.
 */
 "use strict";
function Project(){

  this.init()
};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,1);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],app.pal.colors[3],1);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,1);
  }

};
Project.prototype.init = function(){
  this.jewel = new OpenBol(0,300);
  ortho(-width/2, width/2, height/2, -height/2, 0.1, 100);
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      background(250);
      //drag to move the world.
      orbitControl();

      var pos = createVector(100,0,0);
      this.jewel.drawCone(pos,0);
      pos = createVector(-100,0,0);
      this.jewel.drawCone(pos,0);
      pos = createVector(100,0,100);
      this.jewel.drawCone(pos,0);
      pos = createVector(-100,0,100);
      this.jewel.drawCone(pos,0);
      pos = createVector(0,-40,0);
      this.jewel.drawSphere(pos,0);
      break;
    }

  }
}
