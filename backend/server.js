const http = require('http')

const server = http.createServer((req, res) =>{
    res.end('Voila mon premier serveur avec node js')
})

server.listen(process.env.PORT || 3000)