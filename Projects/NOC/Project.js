/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Project(){
  this.groups = [] ;
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
  append(this.groups, new Group(5));
  this.groups[0].chooseLeader();
}
Project.prototype.draw = function(nr){
  switch(nr){
    case 0:{
      this.groups[0].draw();
      break;
    }
    case 1:{
      this.groups[0].update();
      this.groups[0].draw();
      break;
    }
    case 2:{
      this.groups[0].chooseAdventurestLeader();
      this.groups[0].update();
      this.groups[0].draw();
      break;
    }
    case 3:{
      //create more groups
      append(this.groups, new Group(6));
      break;
    }
    case 4:{
      for(var i = 0; i < this.groups.length; i++){
        this.groups[i].chooseAdventurestLeader();
        this.groups[i].update();
        this.groups[i].draw();
      }
      break;
    }
    case 5:{
      for(var i = 0; i < this.groups.length; i++){
        this.groups[i].chooseAdventurestLeader();
        this.groups[i].update();
        this.groups[i].draw2();
      }
      break;
    }
  }
}
