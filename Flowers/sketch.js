var app;

function setup() {

    app = new App();
    app.loadResources("flowers.jpg");
    frameRate(10);

}

function draw() {


    if(app.isloaded) {
        if (app.currentpalettename != "flowers") {
            app.imgPalette(app.images[0], 6, "flowers");
            app.bgcolor = app.pal.randomRGBColor("LIGHT");

        }
        if (app.isnot(app.flower)){
            app.flower = new Flower(createVector(random(width), random(height)), 100,100,5);
        }
        app.flower.live(createVector(random(width), random(height)));
        app.flower.draw();

    }
    else{
        println("loading resources ...");
    }

}



