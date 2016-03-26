/**
 * Created by Ria Stroes on 25-3-2016.
 * trying to make a jigsaw with blobbers and a grid
 */
function Jigsaw(){
    this.grid = new Grid(10,10,(width-540)/2, (height-540)/2, (width-540)/2, (height-540)/2);
    this.factor = this.grid.cellwidth;
    this.pieces = [];

}
Jigsaw.prototype.init = function(dimension){
  var i, p;
    for(i = 0; i< 100; i++){

        append(this.pieces, new Piece(this.grid.get(i),dimension,this.grid.cellwidth));

    }
};
Jigsaw.prototype.draw = function(){
    var i;
    for(i = 0; i< 100; i++){
        this.pieces[i].draw();

    }
}

//class Piece
function Piece(center, dimension, factor){
    this.center = center.copy();
    this.dimension = dimension;
    this.factor=factor/2;
    this.pos = [] ;
    this.init();
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
Piece.prototype.draw = function(){
    app.style.set(app.pal.colors[0], app.pal.colors[2], 1);
    push();
    translate(this.center.x, this.center.y);

    this.blobber.draw();
    pop();
}