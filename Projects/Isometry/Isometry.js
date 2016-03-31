/**
 * Created by Ria Stroes on 16-3-2016.
 
 */
function Isometry(){
    this.grid = new Grid(100,100,0,0,0,0);
    this.pal = new Palette(3);  // black and white

    
}
Isometry.prototype.world = function(pos, flowerwidth, flowerheight, lobs){
    
};
Isometry.prototype.drawLine = function(fromx, fromy, tox, toy){
    var from = this.grid.pos[fromx][fromy];
    var to = this.grid.pos[tox][toy];
    line(from.x, from.y, to.x, to.y);
};
Isometry.prototype.drawBox = function(x, y, boxwidth, boxheight, boxdepth){
    // if(((boxwidth * 50) != this.grid.cols) || ((boxheight * 30) != this.grid.rows)){
    //     this.grid = new Grid(boxwidth * 50, boxheight * 30, (width / 52), (height / 32), (width / 52), (height / 32));
    // }
    //boxdepth must be an even number
    var posa, posb, posc, posd, posa1, posb1,posc1, posd1;
    posa = this.grid.pos[x][y];
    posb = this.grid.pos[x + boxwidth][y];
    posc = this.grid.pos[x][y + boxheight];
    posd = this.grid.pos[x + boxwidth][y + boxheight];
    posa1 = this.grid.pos[x + boxdepth][y -(boxdepth/2)];
    posb1 = this.grid.pos[x  + boxwidth + boxdepth][y -(boxdepth/2)];
    posc1 = this.grid.pos[x + boxdepth][y + boxheight -(boxdepth/2)];
    posd1 = this.grid.pos[x  + boxwidth + boxdepth][y + boxheight -(boxdepth/2)];
    app.style.set(false,app.pal.colors[2],1);
    beginShape();
        vertex(posa.x, posa.y);
        vertex(posb.x, posb.y);
        vertex(posd.x, posd.y);
        vertex(posc.x, posc.y);
    endShape(CLOSE);
    app.style.set(false,app.pal.colors[3],1);
    beginShape();
        vertex(posa.x, posa.y);
        vertex(posa1.x, posa1.y);
        vertex(posb1.x, posb1.y);
        vertex(posb.x, posb.y);
    endShape();
    app.style.set(false,app.pal.colors[4],1);
    beginShape();
        vertex(posb.x, posb.y);
        vertex(posb1.x, posb1.y);
        vertex(posd1.x, posd1.y);
        vertex(posd.x, posd.y);
    endShape();
};

Isometry.prototype.drawGrid = function() { 
    this.grid.show();

   
};
