var app;

function setup() {

    app = new App("Horizon");
    app.loadResources("greens.jpg,blues.jpg,church.png");


}

function draw() {
    if(app.isloaded) {

        if(app.isnot(app.horizon)){
            app.horizon = new Horizon();
        }
        if(typeof(app.horizon.planets[0]) == "undefined"){
            app.horizon.init();
            background(app.horizon.bgcolor);
        }


        app.horizon.draw();
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

