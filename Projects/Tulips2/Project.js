/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.tulips = [];
  this.stem = [];

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
  var i,j;
  for(i = 0; i < 20; i++){
    append(this.tulips, new Tulip(100));
  }
  for(j = 0; j < 5; j++){
    append(this.stem, new Stem(100));
  }
}
Project.prototype.change = function(nr){


  switch(true){


    case (nr < 20):{
      //Tulip
      this.style(1);
      this.tulips[nr].change(nr);
      break;
    }
    case (nr ==20):{
      this.style(1);
      this.stem[0].change(0);
      break;
    }
    case (nr ==21):{
      this.style(1);
      this.stem[1].change(1);
      break;
    }
    case (nr ==22):{
      this.style(1);
      this.stem[2].change(2);
      break;
    }
    case (nr ==23):{
      this.style(1);
      this.stem[3].change(3);
      break;
    }case (nr ==24):{
      this.style(1);
      this.stem[4].change(4);
      break;
    }



  }


}

Project.prototype.draw = function(nr, x,y){
  var i;
  if(nr<20){
    this.tulips[nr].draw(x,y);
  }
  else{
    this.stem[0].draw(x,y);
  }


}
