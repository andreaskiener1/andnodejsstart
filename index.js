var express = require('express')
var app = express()


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
 
app.get('/', function(request, response) {
  //response.send('<h1>Cäsar Verschlüsselung</h1>')
  response.sendFile(path.join(__dirname + '/caesar26.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
