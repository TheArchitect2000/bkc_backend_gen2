//address of iabroker

//whichserver from which.server.io

try {
    if(typeof require !== 'undefined') {
        whichserver = require('../../../config/which.config').whichserver;
        fingerprint = require('../../../config/which.config').fingerprint;
    }
} catch (e){
    console.error('which.server load error 1',e);
}



var domainUrl = 'https://localhost';
var brokerUrl = 'mqtts://localhost:3008';//secure https or wss
var domainName = 'localhost';
// var fingerprint = "d12e929a9f60a8e9245863b3038f45f590b390ff";


console.log('server',whichserver)

//for iabroker.internetanywhere.io
if(whichserver === 'internetanywhere') {
    domainUrl = 'https://iabroker.internetanywhere.io';
    brokerUrl = 'mqtts://iabroker.internetanywhere.io:3008';//secure https or wss
    domainName = 'InternetAnywhere';
    // fingerprint = "f309ce5641909efa148fe2690fc2fe3cbea01ff6";
} else
//for iabroker.iabt.io
if(whichserver === 'iabt') {
    domainUrl = 'https://iabroker.iabt.io';
    brokerUrl = 'mqtts://iabroker.iabt.io:3008';//secure https or wss
    domainName = 'IA+';
} else
//for panel.devcopa.com
if(whichserver === 'devcopa') {
    domainUrl = 'https://panel.devcopa.com';
    brokerUrl = 'mqtts://panel.devcopa.com:3008';//secure https or wss
    domainName = 'DevCoPa';
    // fingerprint = "8f:e2:e9:cc:cd:b2:b1:a5:c6:c0:ab:56:10:91:29:be:24:52:ac:b2";
    // fingerprint = "c5:67:0c:58:b7:63:9f:37:29:30:2d:46:de:bc:47:55:ad:e3:63:d0";
} else
//for panel.blocklychain.io
if(whichserver === 'blocklychain') {
    domainUrl = 'https://panel.blocklychain.io';
    brokerUrl = 'mqtts://panel.blocklychain.io:3008';//secure https or wss
    domainName = 'Blocklychain';
    // fingerprint = "7a:cf:de:2f:5e:64:51:c2:3d:32:7e:a5:97:0c:f2:e1:a6:f4:a4:93";
}

var developmentMode = false;

try {
    exports.domainUrl = domainUrl;
    exports.domainName = domainName;
    exports.fingerprint = fingerprint;
    exports.brokerUrl = brokerUrl;
}catch (e) {}
