process.title = 'MyWebServer';
1. var args = process.argv,
2.   port = args[2] || 7070,
    3.   webServer = require('./server');
4.
5. webServer.listen(port, function () {
    6.   console.log('Server started at port ' + port);
    7.
});