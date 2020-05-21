const serialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const Delimiter = require('@serialport/parser-delimiter');

const esp32_port = new serialPort('/dev/ttyUSB0', {
  baudRate: 115200, // this is synced to what was set for the Arduino Code
  dataBits: 8, // this is the default for Arduino serial communication
  parity: 'none', // this is the default for Arduino serial communication
  stopBits: 1, // this is the default for Arduino serial communication
  flowControl: false, // this is the default for Arduino serial communication
}, function(err)
{
  if (err) {
   return console.log('Error: ', err.message)
 }
});

const parser = esp32_port.pipe(new Delimiter({ delimiter: '\n' }));
parser.on('data', onSerialData);

function onSerialData(data)
{
  var text = JSON.parse(data);
  
  console.log(text.v.toString());
  onReceive({
    index: 0, 
    v: text.v.toString(),
    f: text.f.toString(),
    p: text.p.toString()
  });
  
}

/*const connect = (port) => {
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

startConnection();*/
