/*jslint node:true, vars:true, bitwise:true, unparam:true */
/*jshint unused:true */

/*
A simple node.js application intended to blink the onboard LED on the Intel based development boards such as the Intel(R) Galileo and Edison with Arduino breakout board.

MRAA - Low Level Skeleton Library for Communication on GNU/Linux platforms
Library in C/C++ to interface with Galileo & other Intel platforms, in a structured and sane API with port nanmes/numbering that match boards & with bindings to javascript & python.

Steps for installing MRAA & UPM Library on Intel IoT Platform with IoTDevKit Linux* image
Using a ssh client: 
1. echo "src maa-upm http://iotdk.intel.com/repos/1.1/intelgalactic" > /etc/opkg/intel-iotdk.conf
2. opkg update
3. opkg upgrade

Article: https://software.intel.com/en-us/html5/articles/intel-xdk-iot-edition-nodejs-templates
*/

var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the Intel XDK console

//Initialize LED array
var ledArray = [];

for (var i = 11; i < 14; i++) {
    ledArray[i] = new mraa.Gpio(i);
    ledArray[i].dir(mraa.DIR_OUT);
}
console.log(ledArray);

//Initialize Timer Array
var timerArray = [];
timerArray[11] = 1500;
timerArray[12] = 3500;
timerArray[13] = 5000;
console.log(timerArray);


//misc variables
var ledState = true;
var timeout = 5000; //variable timeout for LED flip command
var increasefreq = true;
mainLoop(); //call the periodicActivity function


function TriggerLED11()
{
    ledArray[11].write(1);
    console.log("LED 11 ON!");  
    
}

function TriggerLED12()
{
    ledArray[12].write(1);
    console.log("LED 12 ON!");  
    
}

function TriggerLED13()
{
    ledArray[13].write(1);
    console.log("LED 13 ON!");  
    
}

function setLEDtimer()
{
    setTimeout(TriggerLED11,timerArray[11]);
    setTimeout(TriggerLED12,timerArray[12]);
    setTimeout(TriggerLED13,timerArray[13]);
    console.log("Timers Set"); 
}

function mainLoop()
{
    //Loop to toggle GPIO 11, 12, 13 LED states
    
    for (var i = 11; i < 14; i++) {
        ledArray[i].write(0);
    }
    //ledState = !ledState;
    //setTimeout(mainLoop,1500); //repeat loop every 1500ms
    setLEDtimer();
    
    /*
    
    myOnboardLed.write(ledState?1:0); //if ledState is true then write a '1' (high) otherwise write a '0' (low)
    ledState = !ledState; //invert the ledState
    setTimeout(periodicActivity, timeout); //call the indicated function after 1 second (1000 milliseconds)
    
    //increasefreq = (timeout == 1000)?1:0;  //determine if frequency is decreasing or increasing
    console.log("timeout =", timeout);  
    console.log("freQ+ =", increasefreq);

    //determine direction of frequency
    if(timeout == 1000){
        increasefreq = false;
    }
    if(timeout == 100){
        increasefreq = true;
    }
    
    //increases frequency if timeout <1000, otherwise resets to 100
    if(increasefreq){
        timeout += 100;
    }else{
        timeout -= 100;
        
    */
    
}
