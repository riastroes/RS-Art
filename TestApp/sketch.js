var app;

function setup() {

    app = new App("TestApp");
    app.loadResources("watercolors.jpg,sandcolors.jpg");


}

function draw() {
    if(app.isloaded) {

        if(app.currentpalettename != "menu") {
            app.imgPalette(app.images[0], 8, "menu");
        }
        if(app.isnot(app.menu)){
            app.menu = new Menu("Palette,Styles,Grid,Button,Stopwatch,Blobber");
        }
        if(app.isnot(app.proces)) {
            app.proces = new Proces(0, 30);
        }
        if(app.isnot(app.test)) {
            app.test = new Test();
        }

        else if(app.menu.selected == ""){
            app.menu.draw();
            app.menu.isclicked();


        }
        else{
            app.test.testrun(app.menu.selected, app.proces.scene);
        }


        app.info.show();
    }
    else{
        println("loading resources ...");
    }
}


function keyPressed() {
    if (key == 'l' || key == 'L') {
        if (app.isrunning) {
            noLoop();
        } else {
            loop();
            app.isrunning = false;
        }
    }
    if (keyCode == RIGHT_ARROW) {
        app.proces.nextScene(app.pal.colors[1]);

    }
    if (keyCode == LEFT_ARROW) {
        app.proces.previousScene(app.pal.colors[1]);

    }
    if (key  == " ") {
        app.menu.selected ="";

    }
}

