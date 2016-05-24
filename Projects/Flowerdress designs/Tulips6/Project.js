/**
 * Created by Ria Stroes on 10-4-2016.
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
  this.tulip = new Tulip(createVector(200,400), 300);
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      this.tulip.construct();
      this.tulip.draw();
      break;
    }
    case 1:{
      this.tulip.size -= 20;
      this.tulip.pos.x += 20;
      this.tulip.pos.y = 700;
      this.tulip.construct();
      this.tulip.draw();
      break;
    }
    case 2:{
      this.tulip = new Tulip(createVector(200,400), 300);
      this.tulip.construct();
      this.tulip.draw();
      break;
    }
    case 3:{
      this.tulip.size -= 20;
      //this.tulip.pos.x += 20;
      this.tulip.pos.y = 700;
      this.tulip.construct();
      this.tulip.rot += 0.1;
      this.tulip.draw();
      break;
    }
  }
}
