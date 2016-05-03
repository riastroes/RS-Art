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
      //once
      //circles around a bezier
      var begin = createVector(200,100);
      var end = createVector(200,300);
      this.len = dist(begin.x, begin.y, end.x, end.y);
      this.path = new Curve(begin, end);
      this.angle = atan2(end.y - begin.y, end.x - begin.x);
      this.angle += PI/4;
      this.path.showStructure();

      break;
    }
    case 12:{
      //
      for(var k = 0; k< 3; k++){
        //this.angle = atan2(this.path.end.y - this.path.begin.y, this.path.end.x - this.path.begin.x);
        this.path.style(2);

      for(var i = 0; i < 10; i++){

        this.path.curve(this.len*5, this.angle);
      //  this.path.showStructure();
        this.path.draw();
        this.angle += 0.1;
      }
      this.angle += PI/3;
    }

    }
    case 13:{
      //dress design 2
      this.pattern.details = [];
      for(var k = 0; k< 3; k++){
        //this.angle = atan2(this.path.end.y - this.path.begin.y, this.path.end.x - this.path.begin.x);
        var begin = createVector(random(width), random(height));
        var end = createVector(begin.x + random(-200,200), begin.y + random(-200,200) );
        this.path = new Curve(begin, end);
        this.path.angle = atan2(end.y - begin.y, end.x - begin.x);
        this.path.angle += PI/4;
        append(this.pattern.details, this.path);

        for(var m = 0; m< 3; m++){
          this.path.style(2);
          this.path.angle += PI/4;
          for(var i = 0; i < 9; i++){
            this.path.curve(5);
            //  this.path.showStructure();
            this.path.draw();
            this.pattern.checkDetails();
            this.pattern.drawOverlappingDetails();
            this.path.angle += 0.1;
          }

        }
      }
      break;
    }

    case 14:{
      //dress design 3
      this.pattern.details = [];
      for(var k = 0; k< 3; k++){
        //this.angle = atan2(this.path.end.y - this.path.begin.y, this.path.end.x - this.path.begin.x);
        var begin = createVector(random(width), random(height));
        var end = createVector(begin.x + random(-200,200), begin.y + random(-200,200) );
        this.path = new Curve(begin, end);
        this.path.angle = atan2(end.y - begin.y, end.x - begin.x);
        this.path.angle += TWO_PI/4;
        append(this.pattern.details, this.path);

        for(var m = 0; m< 8; m++){
          this.path.style(2);
          this.path.angle += TWO_PI/4;
          for(var i = 0; i < 35; i++){
            this.path.curve(5);
            this.path.draw();
            this.pattern.checkDetails();
            this.pattern.drawOverlappingDetails();
            this.path.angle += 0.05;
          }
          this.path.begin = createVector(this.path.end.x + random(-200,200), this.path.end.y + random(-200,200) );

        }
      }
      break;
    }
    case 15:{
      //dress design 4
      this.pattern.details = [];
      for(var k = 0; k< 3; k++){
        //this.angle = atan2(this.path.end.y - this.path.begin.y, this.path.end.x - this.path.begin.x);
        var begin = createVector(random(width), random(height));
        var end = createVector(begin.x, begin.y -100 );
        this.path = new Curve(begin, end);
        this.path.angle = atan2(end.y - begin.y, end.x - begin.x);
        this.path.angle += TWO_PI/4;
        append(this.pattern.details, this.path);

        for(var m = 0; m< 6; m++){
          this.path.style(2);
          this.path.angle += TWO_PI/4;
          for(var i = 0; i < 9; i++){
            this.path.curve(5);
            this.path.draw();
            this.path.angle += 0.05;
            this.pattern.checkDetails();
            this.pattern.drawOverlappingDetails();
          }
          this.path.end = createVector(this.path.end.x + random(-50,50), this.path.end.y - random(50) );

        }
        var end = createVector(this.path.begin.x, this.path.begin.y  +200)
        var bezier = new Bezier(this.path.begin, end);
        bezier.curve(200, random(PI/2,PI));
        bezier.style(3);
        bezier.draw();
        this.pattern.checkDetail(bezier);
        append(this.pattern.details, bezier);
        app.style.set(bezier.strokecolor, bezier.fillcolor, bezier.tickness);
        this.pattern.drawOverlappingDetails();

      }

      break;
    }

  }
}

Project.prototype.draw = function(){
    for(var i = 0; i < this.pattern.details.length; i++){
      this.pattern.details[i].style(1);
      //this.pattern.details[i].draw();
      this.pattern.checkDetails();
      this.pattern.drawOverlappingDetails();
  }
}
