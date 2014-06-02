var derby = require('derby');
var express = require('express');

function loadStatic(app) {
    app._static = [];
    return function(path) {
        app._static.push(path);
    }
}

function getStaticMiddleware(app) {
    return function(options) {
        var router = express.Router();

        [].concat(options).concat(app._static).forEach(function(o) {
            if (typeof o === 'string') {
                router.use(express.static(o));
            } else {
                router.use(o.route, express.static(o.dir));
            }
        });

        return router;
    }
}

function getStaticRoutes(app) {
    return function() {
        return [].concat(options).concat(app._static).map(function (route) {
            if (typeof route === 'string') {
                return { route: '/', dir: route };
            } else {
                return route;
            }
        });
    }
}

module.exports = function(app, options) {
    app.loadStatic = loadStatic(app);
    app.static = getStaticMiddleware(app);
    app.getStaticRoutes = getStaticRoutes(app);
};
