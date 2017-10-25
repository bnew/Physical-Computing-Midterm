function game() {
    var lightColor = color(20, 200, 50)

    let lightSize = 50;
    //let lightSpacingMultiple = 1;
    var lastCount;
    var currentTime;
    var flash = 50;

    this.setup = function () {
        colorMode(HSL);
        lastCount = millis();
        count = 60;
        console.log("game setup run")
    }



    this.draw = function () {
        rewardSketchInfoDiv.hidden = true; //agressive but I do not know where else to put
        background(0);
        textSize(16);
        textAlign(CENTER);
        fill(255);
        if (count < 21) flasher();



        text("GOAL: TURN ON ALL LIGHTS", width / 2, height / 2 - lightSize * 3);

        currentTime = millis();
        textSize(40);
        text(count, width / 2, height * 3 / 4);
        if (currentTime - lastCount > 1000) {
            count--;
            lastCount = currentTime;
        }

        fill(175);
        noStroke();
        ellipse(width / 2 - lightSize, height / 2 - lightSize, lightSize);
        ellipse(width / 2 + lightSize, height / 2 - lightSize, lightSize);
        ellipse(width / 2 - lightSize, height / 2 + lightSize, lightSize);
        ellipse(width / 2 + lightSize, height / 2 + lightSize, lightSize);

        if (aLight == 1) {
            noStroke();
            fill(lightColor);
            ellipse(width / 2 - lightSize, height / 2 - lightSize, lightSize);
        }

        if (bLight == 1) {
            noStroke();
            fill(lightColor);
            ellipse(width / 2 + lightSize, height / 2 - lightSize, lightSize);
        }

        if (cLight == 1) {
            noStroke();
            fill(lightColor);
            ellipse(width / 2 - lightSize, height / 2 + lightSize, lightSize);
        }

        if (dLight == 1) {
            noStroke();
            fill(lightColor);
            ellipse(width / 2 + lightSize, height / 2 + lightSize, lightSize);
        }

        if (aLight == 1 && bLight == 1 && cLight == 1 && dLight == 1) {
            loadingReward();
            gameOver = true;
        }

        if (count < 1) {
            gameOver = true;
            mgr.showScene(gameLost);
        }


    }

    function loadingReward() {
        background(0);
        fill(255);
        textSize(40);
        textAlign(CENTER);
        fill(255);
        text("YOU DID IT!\nLOADING REWARD", width / 2, height * 3 / 4);
        fill(lightColor);
        ellipse(width / 2 - lightSize, height / 2 - lightSize, lightSize);
        ellipse(width / 2 + lightSize, height / 2 - lightSize, lightSize);
        ellipse(width / 2 - lightSize, height / 2 + lightSize, lightSize);
        ellipse(width / 2 + lightSize, height / 2 + lightSize, lightSize);

        setTimeout(function () {
            console.log("waiting");
            if (mgr.isCurrent(game)) randomRewardSketch();

        }, 2000);

    }

    function flasher() {
        background(0, 100, flash);
        if (count < 6 && count > 3) flash -= 2;
        else if (count < 4) flash -= 4;
        else flash--;

        if (flash < 0) flash = 50;
    }
}
