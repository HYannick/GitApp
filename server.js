//Initialisation des variables
var express = require('express'),
    app     = express(),
    path    = require('path');

//Indique ou se trouvent les fichiers statiques
app.use(express.static(__dirname + '/public'));

//Route vers la homepage
app.get('*',function(req,res){
   res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

//Lancement du serveur sur le port 3000
app.listen(3000);
console.log('Listening port 3000.');