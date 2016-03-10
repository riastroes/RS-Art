var app;

function setup() {


    app = new App(0,3);
    app.loadResources("sandcolors.jpg,watercolors.jpg");

}

function draw() {
    if(app.isloaded) {
        switch(app.proces.scene){
            case 0:{
                app.test.start();
                break;
            }
            case 1:{
                app.test.palette(0);
               break;
            }
            case 2:{
                app.test.palette(1);
                 break;
            }
            case 3:{
                app.test.palette(2);
                break;
            }
            case 4:{
                app.test.palette(3);
                break;
            }
            case 5 :{
                app.test.styles(0);
                break;
            }
            default :{
                app.test.end();
                break;
            }
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
        app.proces.nextScene(app.colors[1]);

    }
    if (keyCode == LEFT_ARROW) {
        app.proces.previousScene(app.colors[1]);

    }
}

