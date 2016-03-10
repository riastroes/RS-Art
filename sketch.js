var app;

function setup() {


    app = new App(0,3);
    app.loadResources("sandcolors.jpg,watercolors.jpg");

}

function draw() {
    if(app.isloaded) {
        app.test.palette(0);
        app.test.palette(1);
        app.test.palette(2);
        app.test.palette(3);

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
        if (app.scene < app.lastscene) {
            app.scene = (app.scene + 1) % (app.lastscene + 1);
        }
        background(app.pal.colors[1]);
    }
    if (keyCode == LEFT_ARROW) {
        if (app.scene > 0) {
            app.scene = (app.scene - 1) % (app.lastscene + 1);
        }
        background(app.pal.colors[1]);
    }
}

