/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){



};



Project.prototype.construct = function(nr){
  switch(nr){
    case 0:{
      this.mobile = new Mobile();
      this.mobile.create(createVector(width/2, 100),300, 350, 270,3);
      break;
    }
    case 1:{
      this.mobile = new Mobile();
      this.mobile.create(createVector(width/2, 100),300, 100, 60,0);
      break;
    }
  }

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

  this.mobile.draw();
}
