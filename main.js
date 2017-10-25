var mgr;
var sketchInfo;

//be using serial globally;
var serial;
var latestData = "waiting for data"; // you'll use this to write incoming data to the canvas
var aLight;
var bLight;
var cLight;
var dLight
let count;


let link; //for reward

let gameOver = false;

var rewardSketches;

var rewardSketchInfoDiv;

function setup() {

    createCanvas(windowWidth, windowHeight);
    mgr = new SceneManager();
    mgr.addScene(klee);
    mgr.addScene(youSuck);
    mgr.addScene(disco);
    mgr.addScene(roland);
    mgr.addScene(enickles);
    mgr.addScene(puffin);
    mgr.addScene(pulsing);


    rewardSketches = [klee, youSuck, disco, roland, puffin, pulsing];

    mgr.showScene(game);
    rewardSketchInfoDiv = document.getElementById("sketch-info")

    rewardSketchInfoDiv.hidden = true;

    link = createA("", "");
    link.attribute("target", "blank");

    link.parent("sketch-info");




    serial = new p5.SerialPort();


    serial.open("/dev/cu.usbmodem1411");

    serial.on('connected', serverConnected);

    serial.on('data', gotData);
    serial.on('error', gotError);
    serial.on('open', gotOpen);

}

function serverConnected() {
    print("Connected to Server");
}

function gotOpen() {
    console.log("Serial Port is Open");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
    console.log(theerror);
}

function gotData() {
    var currentString = serial.readLine(); // read the incoming string
    trim(currentString); // remove any trailing whitespace
    if (!currentString) return; // if the string is empty, do no more
    console.log(currentString); // console.log the string
    latestData = currentString; // save it for the draw method

    var lights = split(latestData, ','); // split the string on the commas
    if (lights.length > 3) { // if there are four elements
        aLight = lights[0];
        bLight = lights[1];
        cLight = lights[2];
        dLight = lights[3];
    }

    if (gameOver) {
        let test = (aLight == 0 && bLight == 0 && cLight == 0 && dLight == 0);
        if (test && gameOver) {
            resetGame();
        }

    }
}

function resetGame() {
    gameOver = false;
    colorMode(HSL);
    lastCount = millis();
    count = 60;
    mgr.showScene(game);
}

function draw() {
    mgr.draw();

}

function mousePressed() {
    mgr.mousePressed();
}

function keyPressed() {
    mgr.keyPressed();
}

function randomRewardSketch() {
    colorMode(RGB);
    background(255);
    //if(link)link.remove(); //or instead just change .src and innerhtml?
    mgr.showScene(random(rewardSketches));
    if (mgr.isCurrent(klee)) {
        link.attribute("href", "http://michaeljblum.com/")

        link.html("Sketch by Michael Blum");
        rewardSketchInfoDiv.hidden = false;
    }

    if (mgr.isCurrent(disco)) {
        link.attribute("href", "http://carriesijiawang.com/")
        link.html("Sketch by Carrie");
    } else if (mgr.isCurrent(pulsing)) {
        link.attribute("href", "http://carriesijiawang.com/")
        link.html("Sketch by Carrie");

        rewardSketchInfoDiv.hidden = false;
    } else if (mgr.isCurrent(youSuck)) {
        link.attribute("href", "http://www.katyarozanova.com/blog-1/2017/10/4/you-write")
        link.html("Sketch by Alden & Katya");
        rewardSketchInfoDiv.hidden = false;
    } else if (mgr.isCurrent(roland)) {
        link.attribute("href", "http://ouiouioui.space/")
        link.html("Sketch by Roland");
        rewardSketchInfoDiv.hidden = false;
    } else if (mgr.isCurrent(puffin)) {
        link.attribute("href", "http://www.michaelfuller56.com/")
        link.html("Sketch by Michael Fuller");
        rewardSketchInfoDiv.hidden = false;
    }

}


//manipulate dom within sketch?

/*
    function aldensSketch()

    this.setup(){
	get + modify some DOM element.
    }

    & hide dom elements in main game sketches.
    also have reset button ?
    	- pros: use existing library
    	- cons: duplication across each sketch for messing w dom.

    	experiment w. existing sketch.

    */
