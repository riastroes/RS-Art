/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.groups = [] ;
  this.groups2 = [] ;
  this.init();
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
  append(this.groups, new Group(85));
  this.groups[0].chooseLeader();
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      this.groups[0].draw();
      break;
    }
    case 1:{
      this.groups[0].update(0.1);
      this.groups[0].draw();
      break;
    }
    case 2:{
      //create more groups
      append(this.groups2, new Group(6));
      this.groups2[this.groups2.length-1].chooseAdventurestLeader();
      break;
    }
    case 3:{
      for(var i = 0; i < this.groups2.length; i++){

        this.groups2[i].update(0.01);
        this.groups2[i].draw2();
      }
      break;
    }
  }
}
