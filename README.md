derby-static
============
Application
```javascript
app.serverUse(module, require('derby-static'));

// Now components can add own routes for serve static files
app.loadStatic(__dirname + '/fonts');
app.loadStatic({ route: '/images', dir: __dirname + '/images');

app.use(require('derby-bundle-bootstrap'));
```
Server:
```javascript
...
expressApp.use(app.static(options));
...
```
or
```javascript
var server = require('derby-starter');
var app = require('./app');
server.run(app, { 'static': app.getStaticRoutes() });
```
// example with 'derby-starter' https://github.com/plasticut/derby-tree/tree/master/example-static