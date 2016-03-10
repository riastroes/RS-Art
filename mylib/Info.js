/**
 * Created by Ria Stroes on 9-3-2016.
 */
function Info(){
    this.leftmarge = 10;
    this.topmarge = 20;
    this.liney = this.topmarge;
    this.lineheight = 20;
    this.log = [];
}
Info.prototype.show = function(){
    app.style.set(app.pal.colors[0], app.pal.tint(app.pal.colors[0], 1), 1);
    rect(0, 0, 200, 200);

    if (frameCount % 100 == 0) {
        app.totframerate = frameRate();  // reset
    }
    else if (frameCount % 100 < 99) {
        app.totframerate += frameRate(); //add
    }
    else if (frameCount % 100 == 99) {
        app.gemframerate = app.totframerate / 100;

    }

    app.style.text(12, LEFT, app.pal.colors[1]);
    text("frameRate: " + int(frameRate()), this.leftmarge, this.liney);
    text("gem. frameRate: " + int(app.gemframerate), this.leftmarge, this.liney += this.lineheight);

    for(var index in this.log){
        if (this.log.hasOwnProperty(index)) {
            text(this.log[index], this.leftmarge, this.liney += this.lineheight);
        }
    }
    this.log =[];
    this.liney = this.topmarge;
};
Info.prototype.add = function (msg){
    append(this.log, msg);
};