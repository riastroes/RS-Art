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
  this.creature = new Creature();
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{

      this.creature.update(0.1);
      this.creature.draw();
      break;
    }
    case 1:{

      this.creature.update(1);
      this.creature.draw();
      break;
    }
  }
}
