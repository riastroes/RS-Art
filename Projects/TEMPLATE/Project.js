/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){

  this.init()
};

Project.prototype.style = function(nr){

    if(nr == 1){
      this.strokecolor = app.pal.colors[0];
      this.fillcolor = app.pal.colors[1];
      this.thickness = 1;
    }
    if(nr == 2){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.colors[0];
      this.thickness = 1;
    }
    if(nr == 3){
      this.strokecolor = app.pal.colors[1];
      this.fillcolor = app.pal.randomImgColor;
      this.thickness = 1;
    }

  };

};
Project.prototype.init = function(){

}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{

      break;
    }
  }
}
