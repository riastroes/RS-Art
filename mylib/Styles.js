function Style() {

}
Style.prototype.reset = function () {
    stroke(app.pal.colors[0]);
    fill(app.pal.colors[1]);
    strokeWeight(1);
    rectMode(CORNER);
    blendMode(BLEND);
};
Style.prototype.text = function (size, align, acolor) {
    textSize(size);
    textAlign(align);
    fill(acolor);

    noStroke();
    blendMode(BLEND);

};
Style.prototype.image = function (alignmode, blendmode) {
    imageMode(alignmode);
    if (blendmode == "" || blendmode == null || blendmode == false) {
        blendMode(BLEND);
    }
    else {
        blendMode(blendmode);
    }
};
Style.prototype.set = function (strokecolor, fillcolor, strokeweight, rectmode, blendmode) {
    if (strokecolor == "" || strokecolor == null || strokecolor == false) {
        noStroke();
    }
    else {
        stroke(strokecolor);
    }
    if (fillcolor == "" || fillcolor == null || fillcolor == false) {
        noFill();
    }
    else {
        fill(fillcolor);
    }
    strokeWeight(strokeweight);
    if (typeof(rectmode) !== "undefined") {
        rectMode(rectmode);
    }
    if (typeof(blendmode) !== "undefined") {
        blendMode(blendmode);
    }
};
Style.prototype.pg = function (pg, strokecolor, fillcolor, strokeweight) {
    this.set(strokecolor, fillcolor, strokeweight);
    if (strokecolor == "" || strokecolor == null || strokecolor == false) {
        pg.noStroke();
    }
    else {
        pg.stroke(strokecolor);
    }
    if (fillcolor == "" || fillcolor == null || fillcolor == false) {
        pg.noFill();
    }
    else {
        pg.fill(fillcolor);
    }
    pg.strokeWeight(strokeweight);
    pg.rectMode(CORNER);
    pg.imageMode(CORNER);
};

Style.prototype.getBlendMode = function (i) {
    switch (i) {

        case 1:
        {
            return ADD;
        }
        case 2:
        {
            return DARKEST;
        }
        case 3:
        {
            return LIGHTEST;
        }
        case 4:
        {
            return DIFFERENCE;
        }
        case 5:
        {
            return EXCLUSION;
        }
        case 6:
        {
            return MULTIPLY;
        }
        case 7:
        {
            return SCREEN;
        }
        case 8:
        {
            return REPLACE;
        }
        case 9:
        {
            return OVERLAY;
        }
        case 10:
        {
            return HARD_LIGHT;
        }
        case 11:
        {
            return SOFT_LIGHT;
        }
        case 12:
        {
            return DODGE;
        }
        case 13:
        {
            return BURN;
        }
        default:
        {
            return BLEND;
        }
    }
};
