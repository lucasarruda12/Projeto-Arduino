const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')

const portname = 'COM5'

const port = new SerialPort({
    path:portname,
    baudRate:9600
  });

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

parser.on("data", (data)=>{
    console.log(data)
})