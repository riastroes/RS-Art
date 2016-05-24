/**
 * Created by Ria Stroes on 10-5-2016.
 */
 "use strict";
function Project(){
  this.groups = [] ;
  this.groups2 = [] ;
  this.groups3 = [] ;
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
      this.groups[0].drawLines();
      break;
    }
    case 1:{//white lines
      this.groups[0].update(0.1);
      this.groups[0].style(1);
      this.groups[0].drawLines();
      break;
    }
    case 2:{//colored lines
      this.groups[0].update(0.1);
      this.groups[0].style(2);
      this.groups[0].drawLines();
      break;
    }
    case 3:{
      this.groups[0].update(0.1);
      this.groups[0].style(3);
      this.groups[0].drawBlobber();
      break;
    }
    case 4:{
      //create more groups
      append(this.groups2, new Group(5));
      this.groups2[this.groups2.length-1].chooseLeader();
      this.groups2[this.groups2.length-1].style(3);
      break;
    }
    case 5:{
      for(var i = 0; i < this.groups2.length; i++){

        this.groups2[i].update(0.01);
        this.groups2[i].drawBlobber();
      }
      break;
    }

    case 6:{
      for(var i = 0; i < this.groups2.length; i++){

        this.groups2[i].update(0.01);
        this.groups2[i].shrink();
        this.groups2[i].drawBlobber();
      }
      break;
    }
    case 7:{
      for(var i = 0; i < this.groups2.length; i++){

        this.groups2[i].update(0.01);
        this.groups2[i].keepsmall();
        this.groups2[i].draw2();
      }
      break;
    }
    case 8:{
      for(var i = 0; i < this.groups2.length; i++){

        this.groups2[i].update(0.01);
        this.groups2[i].keepsmall();
        this.groups2[i].constrainVelocity();
        this.groups2[i].draw4();
        this.groups2[i].draw5(20);
      }
      break;
    }
    case 9:{
      //create more groups
      append(this.groups3, new Group(8));
      //this.groups3[this.groups3.length-1].chooseLeader();
      this.groups3[this.groups3.length-1].style(3);
      break;
    }
    case 10:{
      for(var i = 0; i < this.groups3.length; i++){

        this.groups3[i].update(0.01);
        this.groups3[i].drawLines();
      }
      break;
    }
    case 11:{
      for(var i = 0; i < this.groups3.length; i++){
        this.groups3[i].style(4);
        this.groups3[i].update(0.01);
        this.groups3[i].drawLines();
      }
      break;
    }
    case 12:{
      for(var i = 0; i < this.groups3.length; i++){
        this.groups3[i].style(1);
        //DIT GAAT NOG FOUT
        //this.groups3[i].shrink();
        this.groups3[i].dans(0.01);
        this.groups3[i].drawWeb();
      }
      break;
    }
  }
}
