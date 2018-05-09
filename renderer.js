
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

    connectionText.textContent = currentConnections[0].ssid;

});

