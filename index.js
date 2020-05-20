var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('
                
        <script type="text/javascript">
function los() {
var eingabe = document.form1.eingabe.value;
var key = parseInt(document.form1.key.value);
var a = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var geheim = "";

for (var i = 0; i <= eingabe.length-1; i++) {
letter = eingabe[i];
index = a.indexOf(letter);
geheim = geheim + a[(index + key)%26];
}
document.form1.ausgabe.value = geheim;
}

</script>
</head>

<body>
<form name="form1" method="post" action="">
<p>Klartext in Großbuchstaben</p>
<p>
<textarea rows="15" cols="50" name="eingabe"></textarea>
</p>
<p>Schlüssel, geben sie eine Zahl zwischen 0 und 25 ein:</p>
<p>
<input type="text" name="key" />
</p>
<p>Verschl&uuml;sselt:</p>
<p>
<textarea rows="15" cols="50" name="ausgabe"></textarea>
</p>
<p>
<input type="button" onclick="los()" value="verschlüsseln">
</p>
</form>
</body>        
                
                
               ')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
