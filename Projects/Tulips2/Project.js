/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.tulips = [];
  this.stem = [];
  this.leaves = [];

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
Project.prototype.construct = function(){
  var i,j;
  for(i = 0; i < 20; i++){
    append(this.tulips, new Tulip(100));
  }
  for(j = 0; j < 5; j++){
    append(this.stem, new Stem(100));
  }
  for(l = 0; l < 5; l++){
    append(this.leaves, new Leaves(100));
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
    //stem
    case (nr ==20):{
      this.stem[0].change(0);
      break;
    }
    case (nr ==21):{
      this.stem[1].change(1);
      break;
    }
    case (nr ==22):{
      this.stem[2].change(2);
      break;
    }
    case (nr ==23):{
      this.stem[3].change(3);
      break;
    }

    //leaves
    case (nr ==24):{
      this.leaves[0].change(0);
      break;
    }
    case (nr ==25):{
      this.leaves[1].change(1);
      break;
    }
    case (nr ==26):{
      this.leaves[2].change(2);
      break;
    }
    case (nr ==27):{
      this.leaves[3].change(3);
      break;
    }
    //together
    case(nr == 28):{



      break;
    }



  }


}

Project.prototype.draw = function(nr, x,y){
  var i;
  if(nr<20){
    this.tulips[nr].draw(x,y);
  }
  else if(nr < 24){
    this.stem[nr-20].draw(x,y);
  }
  else if(nr < 28){
    this.leaves[nr-24].draw(x,y);
  }
  else{

    this.stem[nr - 28].draw(x, y+ 100);
    this.leaves[nr - 28].draw(x,y+100);
    this.tulips[nr - 24].draw(x,y);
  }


}
