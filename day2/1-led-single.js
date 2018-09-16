const wpi = require('wiringpi-node');
wpi.setup('wpi');

wpi.pinMode(26, wpi.OUTPUT);
wpi.digitalWrite(26, wpi.HIGH);
//wpi.digitalWrite(26, wpi.LOW);

//wpi.pinMode(26, wpi.INPUT);
