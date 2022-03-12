const { SerialPort } = require('serialport')

const parsers = SerialPort.parsers
const parser = new parsers.readline({
    delimiter:"\r\n"
})

const port = new SerialPort({
    path:"",
    baudRate:9600,
    parity:'none',
    stopBits:1,
    flowContent:false
})

port.pipe(parser)

parser.on("data", (data)=>{
    console.log(data)
})