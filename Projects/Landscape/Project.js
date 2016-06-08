/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.land = [];
};

Project.prototype.style = function(nr){
  switch(nr){
    case 1:{
      app.style.set(app.pal.randomImgColor(),false,0.3);
      break;
    }
    case 2:{
      app.style.set(app.pal.imgcolors[4],false,0.4);
      break;
    }
    case 3:{
      app.style.set(app.pal.colors[0],app.pal.colors[11],0.1);
      break;
    }
    case 4:{
      app.style.set(app.pal.colors[11],false,1);
      break;
    }

  }


};

Project.prototype.construct = function(){
  var a = 0;

  for(var x = 1; x < width; x+=random(5,15)){
    var y = map(noise(a),0,1,-25, +25);
    append(this.land, createVector(x,y));
    a += 0.3;

  }
}
Project.prototype.change = function(nr){

  switch(nr){
    case 0:{
      this.style(1);
      this.a = 0;
      this.difa = 0;
      this.maxdifx = 0;
      this.difx = 0;
      break;
    }
    case 1:{
      this.style(1);
      this.a = 0;
      this.difa = 0.1;
      this.maxdifx = 1;
      this.difx = 0;
      break;
    }
    case 2:{
      this.style(2);
      this.a = 0;
      this.difa = 0.1;
      this.maxdifx = random(5);
      this.difx = 0.1;
      break;
    }
    case 3:{
      this.style(3);
      this.a = 0;
      this.difa = 0.1;
      this.maxdifx = 1;
      this.difx = 0.1;
      break;
    }
  }


}

Project.prototype.draw = function(){

  for(var h = 10; h < height-10; h +=1){
    push();
    translate(0,h);

    beginShape();
    for(var i = 0; i < this.land.length-1; i++){
        this.difx += map(sin(this.a),-1,1,-this.maxdifx, this.maxdifx);

      vertex(this.land[i].x + this.difx, this.land[i].y ) ;
      this.a += this.difa;
    }
    endShape();
    pop();
  }
}
