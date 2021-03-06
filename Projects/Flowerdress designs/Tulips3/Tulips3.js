//differential inheritants

function TulipBlobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  return this.blobber;
}
TulipBlobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.
  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  this.size = maxheight;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;

  var p, wradius, hradius, r;


  for (var i = 0; i < corners; i += 1) {
    if(i%3 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
      r = 0;
    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/corners)/4;
    }
    if(i%3 == 2){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/corners)*7;
    }

    p = posOnEllipse(this.center,wradius, hradius, this.corners, i + r);
    append(this.pos, p);
  }

};

function Tulip2Blobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  return this.blobber;
}
Tulip2Blobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.

  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  this.size = maxheight;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;

  var p, wradius, hradius, r, n;
  this.center2 = this.center.copy();
  this.center2.y -= 50;



  for (var i = 0; i < corners/2; i += 1) {
    if(i%3 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
      r = 0;

    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))/4;

    }
    if(i%3 == 2){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))*7;

    }

    p = posOnEllipse(this.center,wradius, hradius, this.corners, i);
    append(this.pos, p);

  }
  for (var i = corners/2; i < corners; i += 1) {
    if(i%3 == 0){
      wradius = this.wminradius;
      hradius = this.hminradius;
      r = 0;
    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))/4;
    }
    if(i%3 == 2){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      r = (PI/(corners/2))*7;
    }


    p = posOnEllipse(this.center2,wradius, hradius, this.corners, i + r);
    append(this.pos, p);

  }

};
function Tulip3Blobber(){
  this.blobber = new Blobber();
  this.blobber.init = this.init;
  this.blobber.drawStructure = this.drawStructure;
  return this.blobber;
}
Tulip3Blobber.prototype.init = function(pos, corners, minwidth, maxwidth, minheight, maxheight){
  //the flexibility of the blopper is dependend of the difference in minwidth and maxwidth and minheight and maxheight.

  this.pos = [];
  this.position = pos.copy();
  this.center = createVector(0,0);
  this.corners = corners;
  this.size = maxheight;

  this.wminradius = minwidth/2;
  this.wmaxradius = maxwidth/2;
  this.hminradius = minheight/2;
  this.hmaxradius = maxheight/2;



  var p, wradius, hradius, r, n;
 this.center.y += this.hmaxradius;

  for (var i = 0; i < this.corners; i += 1) {

      wradius = this.wmaxradius;
      hradius = this.hmaxradius/3;
      r = 0;
    p = posOnEllipse(this.center, wradius,hradius, this.corners, i);
    append(this.pos, p);

  }

  //topside


  this.center.y -= this.hmaxradius *2;
  var mid0 = this.pos[ceil(this.pos.length/4)-1].copy();
  //var mid1 = this.pos[ceil(this.pos.length/4)].copy();
  var mid2 = this.pos[ceil(this.pos.length/4)+1].copy();

  this.pos =[];

  for (var i = 0; i < this.corners; i += 1) {
    if(i%3 == 0){
      wradius = this.wmaxradius
      hradius = this.hmaxradius;
      p = posOnEllipse(this.center,wradius, hradius, this.corners, i);
      append(this.pos, p);
    }
    if(i%3 == 1){
      wradius = this.wmaxradius;
      hradius = this.hmaxradius;
      //r = (PI/(this.corners/2))/4;
      p = posOnEllipse(this.center,wradius, hradius, this.corners, i+1);
      append(this.pos, p);
    }
    if(i%3 == 2){
      append(this.pos, mid0);
      //append(this.pos, mid1);
      append(this.pos, mid2);

    }

  }
  this.center = createVector(0,0);
  this.size = this.hmaxradius *8;


};
Tulip3Blobber.prototype.drawStructure = function(x,y){
  push();
  translate(x,y);
ellipse(this.center.x, this.center.y, this.size, this.size);
  //this.showPoints();
  pop();
};
