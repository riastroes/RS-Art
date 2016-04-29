/**
 * Created by Ria Stroes on 10-4-2016.
 */
function Project(){
  this.blobbers = [];
  this.pattern = new Pattern(width,height);
  this.init()
};

Project.prototype.style = function(nr){
  if(nr == 1){
    app.style.set(app.pal.colors[0],false,1);
  }
  if(nr == 2){
    app.style.set(app.pal.colors[0],app.pal.colors[4],1);
  }
  if(nr == 3){
    app.style.set(app.pal.colors[0],false,1);
  }

};
Project.prototype.init = function(){
  //init = function(pos, corners, minwidth, maxwidth, minheight, maxheight)
  var pos;
  for(var i = 0; i < 10; i++){
    pos = createVector(random(this.pattern.width),random(this.pattern.height));
    this.blobbers[i] = new TulipBlobber();
    this.blobbers[i].init(pos, 15, 200,100, 20,100);
    append(this.pattern.details, this.blobbers[i]);
  }

}
Project.prototype.update = function(nr){
  var detail,pos,stem;
  switch(nr){
    case 0:{
      for(var i = 0; i < this.pattern.details.length; i++){
        detail = this.pattern.details[i];
        detail.style(app.pal.colors[0],app.pal.colors[3],1);
        detail.draw();
      }


      break;
    }
    case 1:{
      this.pattern.checkDetails();
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 2:{
      for(var i = 0; i < this.pattern.details.length; i++){
        detail = this.pattern.details[i];
        pos = createVector(random(this.pattern.width),random(this.pattern.height));
        detail.init(pos, 15, 0,100, 70,150);
        detail.style(app.pal.colors[8],app.pal.tint(app.pal.colors[8],50),1);
        detail.draw();
      }
      break;
    }
    case 3:{
      this.pattern.checkDetails();
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 4:{
      for(var i = 0; i < this.pattern.details.length; i++){
        detail = this.pattern.details[i];
        pos = createVector(random(this.pattern.width),random(this.pattern.height));
        detail.init(pos, 15, 0,100, 70,150);
        detail.style(app.pal.colors[1],app.pal.tint(app.pal.colors[i%8],50),1);
        detail.draw();

      }
      break;
    }
    case 5:{
      this.pattern.checkDetails();
      this.pattern.drawOverlappingDetails();
      break;

    }
    case 6:{
      //once
      this.pattern.details = [];
      break;
    }
    case 7:{
      for(var i = 0; i < 10; i++){
        this.pattern.details[i] = new Tulip2Blobber();
        detail = this.pattern.details[i];

        pos = createVector(random(this.pattern.width),random(this.pattern.height));
        detail.init(pos, 31, 0,100, 100,150);
        detail.style(app.pal.colors[8],app.pal.tint(app.pal.colors[i%8],50),1);
        detail.draw();

      }
      break;
    }
    case 8:{
      this.pattern.checkDetails();
      this.pattern.drawOverlappingDetails();
      break;
    }
    case 9:{
      //once
      var newtulip;
      this.pattern.details = [];
      for(var i = 0; i < 5; i++){
        newtulip = new Tulip3Blobber();
        pos = createVector(random(this.pattern.width),random(this.pattern.height));

        newtulip.init(pos, 30, 240,240, 50,60);
        if(this.pattern.inFreeSpace(newtulip))
        {
          append(this.pattern.details, newtulip);
          newtulip = this.pattern.details[i];
          newtulip.rot = random(TWO_PI);
          newtulip.style(app.pal.tint(app.pal.colors[2],50),app.pal.tint(app.pal.colors[2],10),1);

        }

      }
      this.a = 0;
      break;
    }
    case 10:{
      for(var i = 0; i < this.pattern.details.length; i++){
        //this.pattern.details[i] = new Tulip3Blobber();

        newtulip = this.pattern.details[i];
        newtulip.grow(0.1);
        newtulip.style(app.pal.tint(app.pal.colors[2],50),app.pal.tint(app.pal.colors[2],10),1);

        newtulip.draw();
        this.pattern.checkDetails();
        this.pattern.drawOverlappingDetails();
      //  newtulip.drawStructure(newtulip.position.x, newtulip.position.y);


      }
      break;
    }
    case 11:{

      break;
    }

  }
}

Project.prototype.draw = function(){

}
