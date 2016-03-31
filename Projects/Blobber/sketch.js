var app;

function setup() {

    app = new App("Blobber",540,540);
    app.resourcepath ="resources";
    app.loadResources("signature.png,spring.jpg");
    //frameRate(5);

}

function draw() {

    if(app.isloaded) {

        if (app.isnot(app.big)){
            app.grid = new Grid(9,9,0,0,0,0);
            app.grid.maskCircle(width/2, height/2,100);
            app.big = new BigBlobber(app.grid.mask);
            
            app.scene = 0;
        }
        if(app.currentpalettename != "spring"){
            app.pal = new Palette(5);
            app.imgPalette(app.images[1],6,"spring");
         }
        if(app.isnot(app.l)){
            app.l = 0;
        }
        switch(app.scene) {
            case 0:{
                background(app.pal.tint(app.pal.colors[1],50));
                frameRate(10);
                app.big.live();
                app.big.draw();
                
                app.runscene(2000);
                break;
            }
            case 1:{
                background(app.pal.colors[1]);
                app.big.lines(app.l);
                app.l +=1;
                app.runscene(20);
                break;
            }
            case 2:{
                background(app.pal.colors[1]);
                app.big.lines(app.l);
                app.l -=1;
                app.runscene(21);
                break;
            }
            case 3:{
               // frameRate(1);
                //app.big.grow(2);
                app.big.split();
                app.big.draw();


                app.runscene(0);
                println( "3: 2 = " + app.big.blobbers.length );
                break;
                }
            case 4:{
                // frameRate(1);
                app.big.grow(0.1);

                app.big.draw();


                app.runscene(5);
               
                break;
            }
            case 5:{
                background(app.pal.colors[1]);

                app.big.draw();
                app.big.lines(app.l);
                app.l +=1;
                app.runscene(20);
                break;
            }
            case 6:{
                background(app.pal.colors[1]);
                app.big.draw();
                app.big.lines(app.l);
                app.l -=1;
                app.runscene(21);
                break;
            }
            case 7:{
                //app.big.grow(2);
                app.big.live();
                app.big.draw();

                app.runscene(50);
               
                break;
            }
           
            
            default:{
                //wait
                app.wait();
            }



        }
        app.info.add("Blobbers:" +  app.big.blobbers.length);
        app.info.show();
        app.gifmaker.check(0,20,false);
       

    }
    else{
        println("loading resources ...");
    }

}



