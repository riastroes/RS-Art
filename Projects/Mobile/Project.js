/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){



};



Project.prototype.construct = function(nr){

  switch(nr){
    case 0:{
      this.mobile = new Mobile();
      this.mobile.create(createVector(width/2, 50),300, 450, 370,3);
      break;
    }
    case 1:{
      this.paper = new Paper();
      this.mobile = new Mobile();
      this.mobile.create(createVector(width/2, 50),300, 100, 60,0);
      break;
    }
    case 2:{
      this.paper = new Paper();
      this.mobile = new Mobile();
      this.mobile.create(createVector(width/2, 50),300, 100, 60,2);
      break;
    }
    case 3:{
      this.paper = new Paper();
      var pos = createVector((width/2), 100);
      this.mobile = new BottomUp(pos, 70, 20, 0);
      break;
    }
    case 4:{
      this.paper = new Paper();
      var pos = createVector((width/2), 100);
      this.mobile = new BottomUp(pos, 70, 20, 0);
      break;
    }
  }

}
Project.prototype.change = function(){
  this.mobile.change();

}
Project.prototype.update = function(){
  this.mobile.update();


}

Project.prototype.draw = function(nr){

  switch(nr){
    case 0:{
      this.mobile.draw(0);
      break;
    }
    case 1:{
      this.paper.draw();
      this.mobile.draw(2);
      break;
    }
    case 3:{

      this.mobile.draw();
      break;
    }
    case 4:{
      this.paper.draw();
      this.mobile.draw(1);
      break;
    }
    case 5:{
      this.paper.draw();
      this.mobile.draw();
      break;
    }
  }

}
