var sensor = require("node-dht-sensor");
var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://54.227.191.176');

client.on('connect', function () {
  setInterval(function() {
    sensor.read(11, 4, function(err, temperature) {
      if (!err) {
        console.log(`${temperature}`);
        client.publish('lapa', `${temperature}`);
      }
    });
  }, 5000);
});
