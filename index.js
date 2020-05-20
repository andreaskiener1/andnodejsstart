var express = require('express')
//var path = require('path')

var app = express()
app.set('port', (process.env.PORT || 5000))

//var dateipfad = path.join(__dirname, 'public', 'caesar26.html')
 
app.get('/', function(request, response) {
   //response.sendFile(dateipfad)
   response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
