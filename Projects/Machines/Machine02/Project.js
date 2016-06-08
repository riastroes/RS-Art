/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){



};
Project.prototype.style = function(pal, nr){
  switch(nr){
    case 0:{
      this.strokecolor = pal.colors[0];
      this.fillcolor = pal.colors[1];
      this.thickness = 1;
      break;
    }
    case 1:{
      this.strokecolor = pal.colors[1];
      this.fillcolor = pal.colors[0];
      this.thickness = 1;
      break;
    }
    case 2:{
      this.strokecolor = pal.colors[0];
      this.fillcolor = false;
      this.thickness = 1;
      break;
    }
    case 3:{
      this.strokecolor = false;
      this.fillcolor = pal.tint(pal.randomImgColor(),30);
      this.thickness = 1;
      break;
    }
  }
  app.style.set(this.strokecolor, this.fillcolor, this.thickness);

}


Project.prototype.construct = function(){

  this.mobile = new Mobile();
  this.mobile.create(createVector(width/2, 100),0);
}
Project.prototype.update = function(nr){
  switch(nr){
    case 0:{

      break;
    }
    case 1:{
      break;
    }
  }
}

Project.prototype.draw = function(){
  this.style(app.pal, 2);
  this.mobile.draw();
}
