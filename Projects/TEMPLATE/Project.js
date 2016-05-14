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

}
Project.prototype.update = function(nr){
  switch(nr){
    case 0:{

      break;
    }
  }
}

Project.prototype.draw = function(){

}
