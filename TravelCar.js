var express = require('express')
var app = express()

app.set('port' , process.env.PORT || 3000)

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('TravelCar');
});
app.get('/about', function(req, res){
    res.type('text/plain');
    res.send('О Travelcar about us ');
});
// пользовательская страница 404
app.use(function(req, res, next){
    res.type('text/plain')
    res.status(404)
    res.send('404 — Нe найдено')
   })

app.use(function(err , req,res, next){
    console.error(err.stack)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Ошибка сервера')
})
app.listen(app.get('port'), function(){
    console.log('express запущен на ' + app.get('port' + 'нажмите ctrl+c для turn off server'))
})