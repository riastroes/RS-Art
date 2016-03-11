var app;

function setup() {

    app = new App(0,3);
    app.loadResources("sandcolors.jpg,watercolors.jpg");

}

function draw() {
    if(app.isloaded) {
        if(app.menu.selected == ""){
            app.menu.draw();
            app.menu.isclicked();
        }
        else{
            app.test.testrun(app.menu.selected);
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
}

