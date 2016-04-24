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
  append(this.tulips, new Tulip(100));
}
Project.prototype.change = function(nr){
  var i;

  switch(nr){

    case 1:{
      //Tulip
      this.style(1);
      for(i=0; i<this.tulips.length; i++){
        this.tulips[i].change(2);
      }

      break;
    }

  }


}

Project.prototype.draw = function(x,y){
  var i;
  for(i = 0; i< this.tulips.length; i++){
    this.tulips[i].draw(100,100);
  }
}
