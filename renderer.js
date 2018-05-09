
const wifi = require('node-wifi');

// Initialize wifi module
// Absolutely necessary even to set interface to null
wifi.init({
    iface : null // network interface, choose a random wifi interface if set to null
});



let connectionText = document.getElementById("connections");

// List the current wifi connections
wifi.getCurrentConnections(function(err, currentConnections) {
    if (err) {
        console.log(err);
    }
    if(currentConnections[0]){
        connectionText.textContent = "You're connected to" + currentConnections[0].ssid;
    }
    else {
        connectionText.textContent = "You're not connected to network";
    }

});

