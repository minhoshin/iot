const wpi = require('wiringpi-node');
wpi.setup('wpi');

wpi.pinMode(26, wpi.OUTPUT);
wpi.digitalWrite(26, wpi.HIGH);

wpi.pinMode(27, wpi.OUTPUT);
wpi.digitalWrite(27, wpi.HIGH);

