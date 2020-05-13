const serialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const connect = (port) => {
  let mySerial = port.path;

  mySerial = new serialPort(port.path, {
    baudRate: 115200,
  });

  let parser = mySerial.pipe(new Readline());
 
  mySerial.on('open', (_) => {
    console.log('Serial started');
    parser.on('data', (data) => {
      console.log(data);
      onReceive({
        index: 0,
        //timestamp: Date.now(),
        value: data,
      });
    });
    mySerial.write('connected');
  });

  mySerial.on('close', (_) => {
    console.log('closed');
    reconnect(port);
  });

  mySerial.on('error', function (err) {
    console.log('Error: ', err.message);
    reconnect(port);
  });
};

const reconnect = (port) => {
  setTimeout(function () {
    console.log('Reconnecting to Esp');
    connect(port);
  }, 2000);
};

const startConnection = () => {
  let foundPort = false;

  serialPort
    .list()
    .then((ports) => {
      if (ports.length > 0) {
        ports.forEach((port) => {
          if (port.manufacturer !== undefined) {
            if (port.manufacturer.includes('Silicon')) {
              foundPort = true;
              connect(port);
            }
          }
        });
        if (foundPort == false) console.log('Esp not found!');
      } else console.log('no port available');
    })
    .catch((err) => console.log(err));
};

startConnection();
