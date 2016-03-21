/**
 * Created by Ria Stroes on 21-3-2016.
 */
function Mask(img, maskwidth, maskheight, acolor){
    //use a black and white image as a mask

    if(app.is(maskwidth)) {
        this.width = maskwidth;
    }
    else{
        this.width = width;
    }
    if(app.is(maskheight)) {
        this.height = maskheight;
    }
    else{
        this.height = height;
    }
    if(app.is(acolor)){
        this.red = red(acolor);
    }
    else {
        this.red = 0; //black
    }
    this.image = undefined;
    if(app.is(img)){
        this.image = img;
    }

    this.data = [];

}
Mask.prototype.init = function() {
    var i;
    this.data = [];
    if (app.is(this.image)) {
        this.image.resize(this.width, this.height);
        this.image.loadPixels();
        for (i = 0; i < this.image.pixels.length - 3; i += 4) {
            if (this.image.pixels[i] == this.red) {
                this.data.push(i);
            }
        }
    }
};
Mask.prototype.add = function(newimage, x, y, acolor){
    if(app.is(acolor)){
        this.red = red(acolor);
    }
    newimage.loadPixels();
    for(i = 0; i < newimage.pixels.length-3; i +=4){
        if(this.newimage.pixels[i] < this.red){
            this.data.push(i + (y * width * 4) + (x * 4));
        }
    }
};
Mask.prototype.createMask = function(x, y , isnew){
    this.image = createImage(this.width, this.height);
    loadPixels();
    this.image.loadPixels();
    for (var i = 0; i < pixels.length; i += 1) {
        this.image.pixels[i] = pixels[i];
    }
    this.image.updatePixels();
    if(isnew) {
        background(255);

    }
    app.mask.init();

};