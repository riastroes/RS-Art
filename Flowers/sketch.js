var app;

function setup() {

    app = new App("Flowers");
    app.loadResources("signature.png,flowers.jpg");
    //frameRate(10);

}

function draw() {
    var  size, x, y,i;

    if(app.isloaded) {
        if (app.currentpalettename != "flowers") {
            app.pal = new Palette(0);
            app.imgPalette(app.images[1], 12, "flowers");
            app.bgcolor = app.pal.randomRGBColor("LIGHT");

        }
        if(app.isnot(app.mask)){
            app.mask = new Mask();
            app.mask.init();
        }
        if (app.isnot(app.flower)){
            app.flower = new Flower();
        }

        if(frameCount <20) {
            size =frameCount * 30;
            app.flower.live(createVector(random(width), random(height)), size, size,18);
            app.flower.drawBW();
        }
        else if(frameCount == 20){
            app.mask.createMask();
            app.pal = new Palette(3);
            app.imgPalette(app.images[1], 12, "flowers");
            app.bgcolor = app.pal.randomRGBColor("LIGHT");
        }
        else if(frameCount <  1000){
            i = app.mask.data[int(random(app.mask.data.length - 1))];
            x = i/4 % (this.width);
            y = int((i/4) / this.width);
            size = random(30,80);
            app.flower.live(createVector(x,y), size,size, 13);
            app.flower.draw();
        }
        else  if(frameCount == 1000){
            background(app.pal.colors[0]);
            app.mask.add(app.images[0],0,0,app.pal.colors[0]);
            app.pal = new Palette(2);
            app.imgPalette(app.images[1], 12, "flowers");

        }
        else if(frameCount < 2000){
            i = app.mask.data[int(random(app.mask.data.length - 1))];
            x = i/4 % (this.width);
            y = int((i/4) / this.width);
            size = random(80,120);
            app.flower.live(createVector(x,y), size,size, 13);
            app.flower.draw();
        }
        else  if(frameCount == 2000){
            background(app.pal.colors[1]);
            app.mask.add(app.images[0],0,0,app.pal.colors[0]);
            app.pal = new Palette(3);
            app.imgPalette(app.images[1], 12, "flowers");
            for(d = 0; d< app.mask.data.length; d += 500){
                i = app.mask.data[d];
                x = i/4 % (this.width);
                y = int((i/4) / this.width);
                size = random(40,60);
                app.flower.live(createVector(x,y), size,size, 13);
                app.flower.draw();
            }

        }



        if(app.makeGif){
            app.gif.addFrame(app.acanvas.elt, {delay:1000, copy: true, width:540, height:540});
        }

    }
    else{
        println("loading resources ...");
    }

}



