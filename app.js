var http = require('http');
var url = require('url');

function afficher(tete,titre,contenu){
return '<!DOCTYPE html>'
+
'<html>'
+
' <head>'
+
' <meta charset="utf-8" />'
+

' </head>'
+
' <body>'
+
' <h2>'+titre+'</h2>'
+
' <h5>'+tete+'</h5>'
+
' <p>'+contenu+'</p>'
+
' </body>'
+
'</html>'



}

var server = http.createServer(function(req,res)
{

    var chemin = url.parse(req.url).pathname;
    console.log(chemin);
    res.writeHead(200, {"Content-Type": "text/html"});
    if (chemin == '/') {
        
res.write(afficher('Accueil','Page d accueil','Bonjour c est la pâge d accueil'));
    }
    else if (chemin == '/about') {


        res.write(afficher('A propos','A PROPOS','a propos de node.js'));
    }
    else  {
        res.write(afficher('Erreur 404','Erreur 404 Not found','Olalalal Vous étes perdu  cet page est introuvable'));
    }
    res.end();
});
server.listen(8090);
console.log('Hello Node.js depuis la console !'); 