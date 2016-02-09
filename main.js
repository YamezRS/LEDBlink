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

//Initialize LEDs
var LED11 = new mraa.Gpio(11); //LED hooked up to digital pin 13 (or built in pin on Intel Galileo Gen2 as well as Intel Edison)
var LED12 = new mraa.Gpio(12); 
var LED13 = new mraa.Gpio(13); 
LED11.dir(mraa.DIR_OUT); //set the gpio direction to output
LED12.dir(mraa.DIR_OUT); //set the gpio direction to output
LED13.dir(mraa.DIR_OUT); //set the gpio direction to output

var timeout = 5000; //variable timeout for LED flip command
var increasefreq = true;
mainLoop(); //call the periodicActivity function

function TriggerAllLED()
{
    LED11.write(1);
    LED12.write(1);
    LED13.write(1);
    console.log("ALL LED ON!");  
}

function TriggerLED11()
{
    LED11.write(1);
    console.log("LED 11 ON!");  
    
}

function TriggerLED12()
{
    LED12.write(1);
    console.log("LED 12 ON!");  
    
}

function TriggerLED13()
{
    LED13.write(1);
    console.log("LED 13 ON!");  
    
}

function setLEDtimer()
{
    setTimeout(TriggerLED11,5000);
    setTimeout(TriggerLED12,10000);
    setTimeout(TriggerLED13,3000);
    console.log("Timers Set", timeout); 
}

function mainLoop()
{
    LED11.write(0);
    LED12.write(0);
    LED13.write(0);
    console.log("ALL LED OFF!");  
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
