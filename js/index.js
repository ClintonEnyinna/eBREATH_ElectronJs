const serialPort = require('serialport');
const Delimiter = require('@serialport/parser-delimiter');


const connect = (port) => {
  let mySerial = port.path;

  mySerial = new serialPort(port.path, {
    baudRate: 115200,
    dataBits: 8, // this is the default for Arduino serial communication
    parity: 'none', // this is the default for Arduino serial communication
    stopBits: 1, // this is the default for Arduino serial communication
    flowControl: false, // this is the default for Arduino serial communication
  });

  let parser = mySerial.pipe(new Delimiter({ delimiter: '\n' }));
 
  mySerial.on('open', (_) => {
    console.log('Serial started');
    parser.on('data', (data) => {

      var text = JSON.parse(data);
      console.log(text.v.toString());

      onReceive({
        index: 0, 
        v: text.v.toString(),
        f: text.f.toString(),
        p: text.p.toString()
      });
      
    });
    $('#activo').prop('checked', true);
    mySerial.write('connected');
  });

  mySerial.on('close', (_) => {
    console.log('closed');
    reconnect(port);
  });

  mySerial.on('error', function (err) {
    console.log('Error: ', err.message);
    $('#activo').prop('checked', false);
    reconnect(port);
  });
};

const reconnect = (port) => {
  setTimeout(function () {
    console.log('Reconnecting to Esp');
    onReceive({
        index: 0, 
        v: 0,
        f: 0,
        p: 0
      });
    connect(port);
  }, 1000);
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
        if (foundPort == false){
          console.log('Esp not found!');
          $('#activo').prop('checked', false);
        }
      } else console.log('no port available');
    })
    .catch((err) => console.log(err));
};

startConnection();
