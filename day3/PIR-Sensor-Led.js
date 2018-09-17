const wpi = require('wiringpi-node');

wpi.setup('wpi');

const sensorInPin = 25;
let pir_state = true;

const ledInPin = 27;

wpi.pinMode(sensorInPin, wpi.INPUT);
wpi.digitalWrite(sensorInPin, wpi.LOW);

wpi.pinMode(ledInPin, wpi.OUTPUT);
wpi.digitalWrite(ledInPin, wpi.LOW);

setInterval(function(){
        if(pir_state){
                if(wpi.digitalRead(sensorInPin)){
                        console.log('누군가 있어요');
                        pir_state = false;
                        wpi.digitalWrite(ledInPin, wpi.HIGH);

                        setTimeout(function(){
                                pir_state = true;
                                wpi.digitalWrite(sensorInPin, wpi.LOW);
                                wpi.digitalWrite(ledInPin, wpi.LOW);
                        }, 2000);
                }else{
                        console.log('아무도 없어요');
                }
        }
}, 1000);
