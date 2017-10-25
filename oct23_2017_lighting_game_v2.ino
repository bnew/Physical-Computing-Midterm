int aLight = LOW;
int aBttn = 3;
int aledPin = 9;
int aPrevious = 0;

int bLight = LOW;
int bBttn = 4;
int bledPin = 10;
int bPrevious = 0;

int cLight = LOW;
int cBttn = 5;
int cledPin = 11;
int cPrevious = 0;


int dLight = LOW;
int dBttn = 6;
int dledPin = 12;
int dPrevious = 0;



int buttons[] = {aBttn, bBttn, cBttn, dBttn};
int readings[] = {1, 1, 1, 1};

void setup()
{ Serial.begin(9600);

  pinMode(aledPin, OUTPUT);
  pinMode (aBttn, INPUT_PULLUP);

  pinMode(bledPin, OUTPUT);
  pinMode (bBttn, INPUT_PULLUP);

  pinMode(cledPin, OUTPUT);
  pinMode (cBttn, INPUT_PULLUP);

  pinMode(dledPin, OUTPUT);
  pinMode (dBttn, INPUT_PULLUP);

  digitalWrite(aledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(50);
  digitalWrite(aledPin, LOW);    // turn the LED off by making the voltage LOW
  delay(50);

  digitalWrite(bledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(50);
  digitalWrite(bledPin, LOW);    // turn the LED off by making the voltage LOW
  delay(50);

  digitalWrite(cledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(50);
  digitalWrite(cledPin, LOW);    // turn the LED off by making the voltage LOW
  delay(50);

  digitalWrite(dledPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(50);
  digitalWrite(dledPin, LOW);    // turn the LED off by making the voltage LOW
  delay(50);

  digitalWrite(aledPin, HIGH);

  digitalWrite(bledPin, HIGH);

  digitalWrite(cledPin, HIGH);

  digitalWrite(dledPin, HIGH);

  delay(100);


  digitalWrite(aledPin, LOW);

  digitalWrite(bledPin, LOW);

  digitalWrite(cledPin, LOW);

  digitalWrite(dledPin, LOW);
  delay(100);


  digitalWrite(aledPin, HIGH);

  digitalWrite(bledPin, HIGH);

  digitalWrite(cledPin, HIGH);

  digitalWrite(dledPin, HIGH);

  delay(100);

  digitalWrite(aledPin, LOW);

  digitalWrite(bledPin, LOW);

  digitalWrite(cledPin, LOW);

  digitalWrite(dledPin, LOW);

    sendData();

}

void loop()
{
  for (int i = 0; i < 4; i++) {
    readings[i] = digitalRead(buttons[i]);
    delay(1); //necessary?
  }

  //Button A controls light C and B
  if (readings[0] == LOW && aPrevious == HIGH) {
    bttnA();
    sendData();
  }
  aPrevious = readings[0];


  //Button B controls light A, B and C

  if (readings[1] == LOW && bPrevious == HIGH) {
    bttnB();
    sendData();
  }
  bPrevious = readings[1];
  

  //Button C controls light  C and D


  if (readings[2] == LOW && cPrevious == HIGH) {
    bttnC();
    sendData();
  }
  cPrevious = readings[2];

  //Button D controls light B, C and D

  if (readings[3] == LOW && dPrevious == HIGH) {
    bttnD();
    sendData();
  }
  dPrevious = readings[3];

}




void bttnA () {
  cLight = !cLight; 
  bLight = !bLight;
  digitalWrite(cledPin, cLight);
  digitalWrite(bledPin, bLight);
}

void bttnB () {
  aLight = !aLight; 
  bLight = !bLight; 
  cLight = !cLight;
  digitalWrite(aledPin, aLight);
  digitalWrite(bledPin, bLight);
  digitalWrite(cledPin, cLight);

}


void bttnC () {
  cLight = !cLight; 
  dLight = !dLight;
  digitalWrite(cledPin, cLight);
  digitalWrite(dledPin, dLight);
}

void bttnD () {
  bLight = !bLight; 
  cLight = !cLight; 
  dLight = !dLight;
  digitalWrite(bledPin, bLight);
  digitalWrite(cledPin, cLight);
  digitalWrite(dledPin, dLight);

}

void sendData() {
  Serial.print (aLight);
  Serial.print(",");
  Serial.print (bLight);
  Serial.print(",");
  Serial.print (cLight);
  Serial.print(",");
  Serial.println (dLight);
}


