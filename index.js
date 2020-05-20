var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('<h1>Cäsar Verschlüsselung</h1> <form name="form1" method="post" action=""> <p>Klartext in Großbuchstaben</p> <p> <textarea rows="15" cols="50" name="eingabe"></textarea> </p> <p>Schlüssel, geben sie eine Zahl zwischen 0 und 25 ein:</p> <p> <input type="text" name="key" /> </p> <p>Verschl&uuml;sselt:</p> <p> <textarea rows="15" cols="50" name="ausgabe"></textarea> </p> <p> <input type="button" onclick="los()" value="verschlüsseln"> </p> </form>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
