var app;

function setup() {

    app = new App("Blobber");
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(5);

}

function draw() {

    if(app.isloaded) {

        if (app.isnot(app.big)){
            app.big = new BigBlobber();
            app.scene = 0;
        }
        if(app.currentpalettename != "red"){
            app.pal = new Palette(5);
         }
        if(app.isnot(app.l)){
            app.l = 0;
        }
        switch(app.scene) {
            case 0:{

                app.big.draw();
                app.runscene(0);

                break;
            }
            case 1:{
                background(app.pal.colors[1]);
                app.big.lines(app.l);
                app.l +=1;
                app.runscene(100);
                break;
            }
            case 2:{
                background(app.pal.colors[1]);
                app.big.lines(app.l);
                app.l -=1;
                app.runscene(101);
                break;
            }
            case 3:{
                background(app.pal.colors[1]);
                app.big.split();
                app.wait(100);
                break;
            }
            case 4:{
                background(app.pal.colors[1]);
                app.big.split();
                app.wait(100);
                break;
            }
            case 5:{
                background(app.pal.colors[1]);
                app.big.split();
                app.wait(100);
                break;
            }
            case 6:{
                background(app.pal.colors[1]);
                app.big.grow();
                app.wait(100);
                break;
            }
            case 7:{
                background(app.pal.colors[1]);
                app.big.grow();
                app.wait(100);
                break;
            }
            
            default:{
                //wait
                app.wait();
            }



        }

        app.info.show();
        app.gifmaker.check();
       

    }
    else{
        println("loading resources ...");
    }

}



