var app;

function setup() {

    app = new App("Jigsaw");
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(10);

}

function draw() {

    if(app.isloaded) {

        if (app.isnot(app.jigsaw)){
            app.jigsaw = new Jigsaw();
            app.scene = 0;
        }
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(3);
            
        }

        switch(true) {
            case (app.scene == 0):{

                app.style.set(app.pal.colors[0], app.pal.colors[1],1);
                app.jigsaw.grid.show();
                app.wait(0);
                break;
            }
            case (app.scene == 1):{
                app.jigsaw.init(8);
                app.jigsaw.draw();
                app.jigsaw.grid.show();
                app.wait(8);
                break;
            }

        }

        app.gifmaker.check();
       

    }
    else{
        println("loading resources ...");
    }

}



