

var app;

function setup() {

    app = new App("Next",540,540);
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(5);

}

function draw() {
    var i,c;
    if(app.isloaded) {
        if(app.pal.name != "black_white"){
            app.pal = new Palette(4, "black_white");
            app.scene = 0;
        }
        if(app.isnot(app.project)){
          app.project = new Project();
        }

        switch(app.scene) {
            case 0:{
                background(app.pal.colors[1]);
                app.pal.show();
                app.wait(50);
                break;
            }
            case 1:{
                background(app.pal.colors[11]);
                app.project.move();
                app.project.draw();
                app.runscene(0);
                break;
            }

            case 2:{
                background(app.pal.colors[11]);
                app.project.implotionCenter();
                app.project.draw();
                app.runscene(0);
                break;
            }
            case 3:{
                background(app.pal.colors[2]);
                app.project.attackBiggest();
                app.project.draw();
                app.runscene(1000);
                break;
            }

            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check(10, 80, false);


    }
    else{
        println("loading resources ...");
    }

}
