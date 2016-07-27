/**
 * Created by Ria Stroes on 10-4-2016.
 */
 "use strict";
function Pattern(pwidth, pheight){
  this.width = pwidth;
  this.height = pheight;
  this.pg = createGraphics(this.width, this.height);
  this.threadschering = 1;
  this.threadinslag = 1;

};
Pattern.prototype.schering = function(pthread){
  this.max = 0
  this.threadschering = pthread;
  this.pg.strokeWeight(this.threadschering);
  for(var i=this.threadschering; i <= this.width + this.threadschering; i += this.threadschering*2){
      this.pg.line(i, 0, i , this.height);
      this.max++;
  }

}
Pattern.prototype.inslag = function(pthread,r){
  this.threadinslag = pthread;
  this.pg.strokeWeight(this.threadinslag);

  this.regel =[];
  for(var i = 0; i < r.length; i++){
    this.regel[i] =[];
    for(var v = 0; v < r[i].length; v++){
      this.regel[i][v] = r[i][v]* this.threadschering *2;
    }
  }
  var maxy = this.height;
  for(var y = 0; y <= maxy; y += this.threadinslag * r.length){
    for(var i=0; i < r.length; i++){
        for(var j = 0; j < r[i].length; j +=2){
            this.pg.line(this.regel[i][j] ,y +(i*this.threadinslag), this.regel[i][j+1],y+(i*this.threadinslag));
        }
      }
  }



}


Pattern.prototype.style = function(nr){

  switch(nr){
    case 0:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.colors[1];
    this.thickness = 1;
    break;
    case 1:
    this.strokecolor = app.pal.colors[1];
    this.fillcolor = app.pal.colors[0];
    this.thickness = 1;
    break;
    case 2:
    this.strokecolor = app.pal.colors[0];
    this.fillcolor = app.pal.randomImgColor();
    this.thickness = 1;
    break;
    case 3:
    this.strokecolor = app.pal.randomImgColor();
    this.fillcolor = false;
    this.thickness = 1;
    break;
    case 4:
    this.strokecolor = false;
    this.fillcolor = app.pal.tint(app.pal.randomImgColor(), random(100));
    this.thickness = 1;
    break;

  }

  app.style.pg( this.pg, this.strokecolor, this.fillcolor, this.thickness);

};

Pattern.prototype.draw = function(nr){
  var r   =[//[0,1,3,4,6,7,9,10,12,13,15,16,18,19,21,22],
            //[1,2,4,5,7,8,10,11,13,14,16,17,19,20,22,23],
            //[2,3,5,6,8,9,11,12,14,15,17,18,20,21,22],
            //[3,4,6,7,9,10,12,13,15,16,18,19,21,22,23],
            [0,1,2,3,4,5,6,7,8,9,10, 12, 14, 16,18,20],
            [1,2,3,4,5,6,7,8,9,11,13,15,17,19]
            ];
  switch(nr){
    case 0:{
      this.style(0);
      this.pg.rect(0,0,this.width, this.height);
      this.style(3);
      this.schering(this.width/10);
      this.style(3);

      this.inslag(this.height/10, r);
      break;
    }
    case 1:{
      this.style(4);
      this.pg.rect(0,0,this.width, this.height);
      this.style(3);
      this.schering(this.width/20);
      this.style(3);
      this.inslag(this.height/40, r);
      break;
    }
    case 2:{
      this.style(0);
      this.pg.rect(0,0,this.width, this.height);
      this.style(3);
      this.schering(7);
      this.style(3);
      this.inslag(8, r);
      break;
    }
    case 3:{
      r =[
        [2,4,6,8,10,12,14,16,18,20,22,24,26],
        [0,2,4,6,8,10,12,14,16,18,20,22,24,26],
        [2,4,6,8,10,12,14,16,18,20,22,24,26],
        [0,2,4,6,8,10,12,14,16,18,20,22,24,26],
      ]
      var r2 =[
        [0,2,4,6,8,10,11,15,16,18,20,22,24,26],
        [2,4,6,8,  10,12,17,18,20,22,24,26],
        [0,2,4,6,8,10,11,15,16,18,20,22,24,26],
        [2,4,6,8,  10,12,17,18,20,22,24,26],

      ]
      this.style(0);
      this.pg.rect(0,0,this.width, this.height);
      this.style(3);
      this.schering(12);
      this.style(3);
      this.inslag(6, r);
      this.style(3);
      this.inslag(6, r2);
      break;
    }
    case 4:{
      r =[
        [0,1,7,8,18,19,25,26],
        [1,2,8,9,17,18,24,25],
        [2,3,9,10,16,17,23,24],
        [3,4,10,11,15,16,22,23],
        [4,5,11,12,14,15,21,22],
        [5,6,12,14,20,21],
        [6,7,19,20],
      ]
      var r2 =[

        [1,2,8,9,17,18,24,25],
        [2,3,9,10,16,17,23,24],
        [3,4,10,11,15,16,22,23],
        [4,5,11,12,14,15,21,22],
        [5,6,12,14,20,21],
        [6,7,19,20],
        [7,8,18,19],
      ]
      var r3 =[
        [2,3,9,10,16,17,23,24],
        [3,4,10,11,15,16,22,23],
        [4,5,11,12,14,15,21,22],
        [5,6,12,14,20,21],
        [6,7,19,20],
        [7,8,18,19],
        [8,9,17,18]
      ]
      var r4 =[

        [3,4,10,11,15,16,22,23],
        [4,5,11,12,14,15,21,22],
        [5,6,12,14,20,21],
        [6,7,19,20],
        [7,8,18,19],
        [8,9,17,18],
        [9,10,16,17]
      ]
      var r5 =[

        [4,5,11,12,14,15,21,22],
        [5,6,12,14,20,21],
        [6,7,19,20],
        [7,8,18,19],
        [8,9,17,18],
        [9,10,16,17],
        [10,11,15,16]
      ]
      var r6 =[
        [5,6,12,14,20,21],
        [6,7,19,20],
        [7,8,18,19],
        [8,9,17,18],
        [9,10,16,17],
        [10,11,15,16],
        [11,12,14,15]
      ]
      var r7 =[
        [6,7,19,20],
        [7,8,18,19],
        [8,9,17,18],
        [9,10,16,17],
        [10,11,15,16],
        [11,12,14,15],
        [12,14]
      ]
      var r8 =[
        [],
        [0,1],
        [0,1,1,2],
        [0,1,1,2,2,3],
        [0,1,1,2,2,3,3,4],
        [0,1,1,2,2,3,3,4,4,5],
        [0,1,1,2,2,3,3,4,4,5,5,6]
      ]
      var r9 =[
        [],
        [25,26],
        [24,25,25,26],
        [23,24,24,25,25,26],
        [22,23,23,24,24,25,25,26],
        [21,22,22,23,23,24,24,25,25,26],
        [20,21,21,22,22,23,23,24,24,25,25,26]
      ]

      this.style(0);
      this.pg.rect(0,0,this.width, this.height);
      this.style(3);
      this.schering(12);
      this.style(3);
      this.inslag(6, r);
      this.style(3);
      this.inslag(6, r2);
      this.style(3);
      this.inslag(6, r3);
      this.style(3);
      this.inslag(6, r4);
      this.style(3);
      this.inslag(6, r5);
      this.style(3);
      this.inslag(6, r6);
      this.style(3);
      this.inslag(6, r7);
      this.style(3);
      this.inslag(6, r8);
      this.inslag(6, r9);
      break;
    }
  }
}
