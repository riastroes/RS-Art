var app;

function setup() {

    app = new App("Logo",540, 540);
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(5);

}

function draw() {

    if(app.isloaded) {
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(5);
            app.imgPalette(app.images[1],6,"spring");
        }
        if (app.isnot(app.logo)){
            app.grid = new Grid(20,20,0,0,0,0);
            app.logo = new Logo(app.grid.maskCircle(width/2, height/2,150));

            app.scene = 0;
        }

        if(app.isnot(app.l)){
            app.l = 0;
        }
        switch(app.scene) {
            case 0:{
                background(app.pal.colors[1]);
                app.logo.style(app.pal.colors[0], app.pal.colors[1],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(500);
                break;
            }
            case 1:{
                background(app.pal.colors[1]);
                app.logo.style(app.pal.colors[0], app.pal.colors[2],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(500);
                break;
            }
            case 2:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[0], app.pal.colors[2],1, app.pal.colors[0], app.pal.colors[1],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(500);
                break;
            }
            case 3:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[2], app.pal.colors[0],1, app.pal.colors[2], app.pal.colors[1],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(500);
                break;
            }
            case 4:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[2], app.pal.colors[0],1, app.pal.colors[2], app.pal.colors[1],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(500);
                break;
            }
            case 5:{
                app.grid = new Grid(40,40,0,0,0,0);
                app.logo = new Logo(app.grid.maskCircle(width/2, height/2,150));

                app.runscene(0);
                break;
            }
            case 6:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[3], app.pal.colors[4],1, app.pal.colors[3], app.pal.colors[1],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(10);
                break;
            }
            case 7:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[5], app.pal.colors[6],1, app.pal.colors[6], app.pal.colors[5],1);
                app.logo.rotate(0.01);
                app.logo.scale(0.1);
                app.logo.draw();

                app.runscene(0);
                break;
            }
            case 8:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[5], app.pal.colors[6],1, app.pal.colors[6], app.pal.colors[5],1);
                app.logo.rotate(0.02);
                app.logo.scale(0.2);
                app.logo.draw();

                app.runscene(800);
                break;
            }
            case 9:{
                app.grid = new Grid(40,40,0,0,0,0);
                app.logo = new Logo(app.grid.maskCircle(width/2, height/2,150));

                app.runscene(0);
                break;
            }
            case 10:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[3], app.pal.colors[4],1, app.pal.colors[3], app.pal.colors[1],1);
                app.logo.rotate(0.01);
                app.logo.draw();

                app.runscene(10);
                break;
            }
            case 11:{
                background(app.pal.colors[1]);
                app.logo.styleRandom(app.pal.colors[5], app.pal.colors[6],1, app.pal.colors[6], app.pal.colors[5],1);
                app.logo.rotate(0.02);
                app.logo.scale(0.02);
                app.logo.draw();

                app.runscene(8000);
                break;
            }



            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check(1, 80, false);


    }
    else{
        println("loading resources ...");
    }

}
