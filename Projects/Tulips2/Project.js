/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.tulips = [];

};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,0.5);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],app.pal.colors[3],4);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,1);
  }

};
Project.prototype.construct = function(nr){
  var i;
  for(i = 0; i < 10; i++){
    append(this.tulips, new Tulip(100));
  }
}
Project.prototype.change = function(nr){
  var i;

  switch(nr){

    case 0:{
      //Tulip
      this.style(1);
      this.tulips[0].change(0);
      break;
    }
    case 1:{
      //Tulip
      this.style(1);
      this.tulips[1].change(1);
      break;
    }
    case 2:{
      //Tulip
      this.style(1);
      this.tulips[2].change(2);
      break;
    }
    case 3:{
      //Tulip
      this.style(1);
      this.tulips[3].change(3);
      break;
    }
    case 4:{
      //Tulip
      this.style(1);
      this.tulips[4].change(4);
      break;
    }
    case 5:{
      //Tulip
      this.style(1);
      this.tulips[5].change(5);
      break;
    }
    case 6:{
      //Tulip
      this.style(1);
      this.tulips[6].change(6);
      break;
    }
    case 7:{
      //Tulip
      this.style(1);
      this.tulips[7].change(7);
      break;
    }


  }


}

Project.prototype.draw = function(nr, x,y){
  var i;
  this.tulips[nr].draw(x,y);
  //this.tulips[1].draw(x,y);

}
