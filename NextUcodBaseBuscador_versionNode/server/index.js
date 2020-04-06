var bodyParser = require('body-parser'),
    http       = require('http'),
    express    = require('express'),
    socketio = require('path'),
    path = require ('path'),
    filtro = require('./filtros');




var port        = process.env.PORT || 3000,
    app        = express(),
    Server     = http.createServer(app)

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('public'))
    app.use('/filtros', filtro)

  Server.listen(port, function(){
    console.log("Server is running on port: " + port)
  })

io.on('Connection', function(socket){
  socket.on ('userJoin', (user)=>{
    socket.user = user;
    socket.broadcast.emit('userJoin', user);
  })
})
