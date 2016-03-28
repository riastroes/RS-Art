var app;

function setup() {

    app = new App("Horizon");
    app.resourcepath = "resources";
    app.loadResources("signature.png,greens.jpg,blues.jpg,bg.jpg,church.png");


}

function draw() {
    if(app.isloaded) {

        if(app.isnot(app.horizon)){
            app.horizon = new Horizon(app.images[3]);
       //     app.scene = 0;
        }
        // if(app.currentpalettename != "greens"){
        //     app.imgPalette(app.images[3],10,"greens");
        // }
        
        switch(app.scene){
            case 0:{
                app.horizon.drawBackground();
                break;
            }
        }
       // app.info.show();
       // app.gifmaker.check();
    }
    else{
        println("loading resources ...");
    }
}



