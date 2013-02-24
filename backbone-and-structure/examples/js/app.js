requirejs.config({
    urlArgs: 'v=' + Math.random(),

    paths: {
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

define(['jquery', 'backbone'], function($, Backbone) {  

    var $body = $("body");

    var Router = Backbone.Router.extend({
        routes: {
            'transactions': 'transactions'
        },
        transactions: function() {
            $body.html("hHfhfhf");
        }
    });

    new Router();

    $(document).ready(function() {

        Backbone.history.start();
    });
});