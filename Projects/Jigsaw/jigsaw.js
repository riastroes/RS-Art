/**
 * Created by Ria Stroes on 25-3-2016.
 * trying to make a jigsaw with blobbers and a grid
 */
function Jigsaw(){
    //this.grid = new Grid(10,10,(width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
    this.grid  = undefined;
    this.factor = 0;
    this.pieces = [];

}
Jigsaw.prototype.init = function(dimension,cols, rows,lmarge, tmarge,rmarge, bmarge){
  var i, p;
    this.pieces = [];
    this.grid = new Grid(cols, rows,lmarge, tmarge,rmarge, bmarge);
    this.factor = this.grid.cellwidth;
    for(i = 0; i< (cols*rows); i++){

        append(this.pieces, new Piece(this.grid.get(i),dimension,this.grid.cellwidth));

    }
};
Jigsaw.prototype.init2 = function(dimension,cols, rows,lmarge, tmarge,rmarge, bmarge, version){
    var i, p;
    this.pieces = [];
    this.grid = new Grid(cols, rows,lmarge, tmarge,rmarge, bmarge);
    this.factor = this.grid.cellwidth;
    for(i = 0; i< (cols*rows); i++){

        append(this.pieces, new Piece(this.grid.get(i),dimension,this.grid.cellwidth, version));

    }
};
Jigsaw.prototype.draw = function(scolor, fcolor){
    var i;
    for(i = 0; i< (this.grid.cols*this.grid.rows); i++){
        this.pieces[i].draw(scolor, fcolor);

    }
}

//class Piece
function Piece(center, dimension, factor, version){
    this.center = center.copy();
    this.dimension = dimension;
    this.factor=factor/2;
    this.pos = [] ;
    if(app.isnot(version) ){
        this.init();
    }
    else{
        this.init2(version);
    }
    
}
Piece.prototype.init = function(){
    var d, p, attempts;
    
    attempts = 0;
    d = 0;
    while( d < this.dimension && attempts < 100){
       p = createVector(app.randomInt(-1,1), app.randomInt(-1,1));

        if(!app.containsVector(this.pos, p) && !(p.x == 0 && p.y == 0)){
            append(this.pos, p);
            d++;
        }
        attempts++;
        if(attempts == 99){
            println("100 attempts!");
        }
    }
    append(this.pos, this.pos[0].copy());
    append(this.pos, this.pos[1].copy());
    append(this.pos, this.pos[2].copy());
    append(this.pos, this.pos[3].copy());

    this.blobber = new ArrayBlobber();
    this.blobber.set(this.pos, this.factor);
    this.blobber.scale(this.factor);
    
}
Piece.prototype.init2 = function(v){
    if(v == 1) {
        this.pos[0] = createVector(0, 0);
        this.pos[1] = createVector(2, 0);
        this.pos[2] = createVector(2, 1);
        this.pos[3] = createVector(1, 2);
        this.pos[3] = createVector(0, 1);
        

    }
    if(v == 2) {
        this.pos[0] = createVector(2, 0);
        this.pos[1] = createVector(3, 0);
        this.pos[2] = createVector(3, 3);
        this.pos[3] = createVector(4, 4);
        this.pos[4] = createVector(4, 5);
        this.pos[5] = createVector(0, 5);

    }
    append(this.pos, this.pos[0].copy());
    append(this.pos, this.pos[1].copy());
    append(this.pos, this.pos[2].copy());
    append(this.pos, this.pos[3].copy());

    this.blobber = new ArrayBlobber();
    this.blobber.set(this.pos, this.factor);
    this.blobber.scale(this.factor);

}
Piece.prototype.draw = function(scolor, fcolor){
    app.style.set(scolor, fcolor, 1);
    push();
    translate(this.center.x, this.center.y);

    this.blobber.draw();
    pop();
}