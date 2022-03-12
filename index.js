const express = require('express')
const path = require('path')
const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res)=>{
    res.render(path.join(__dirname + '/public/views/index.ejs'))
})

app.listen(port, ()=>{
    console.log(`servidor rodando na porta ${port}`)
})