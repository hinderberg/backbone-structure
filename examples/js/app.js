requirejs.config({
    urlArgs: 'v=' + Math.random(),

    paths: {
        'jquery': '../libs/jquery',
        'underscore': '../libs/underscore',
        'backbone': '../libs/backbone',

         'text': '../libs/text',

        'handlebars': '../libs/hb/customHandlebars',
        'hb': '../libs/hb/hb'
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

define([
    'jquery', 
    'backbone',

    'modules/transaction/transactionType',
    'modules/transaction/transaction',
    'modules/transaction/transactions',
    'modules/transaction/transactionsView'
], function(
    $, 
    Backbone,

    transactionType,
    Transaction,
    Transactions,
    TransactionsView
) {  

    var $body = $("body");

    var Router = Backbone.Router.extend({
        routes: {
            'transactions': 'transactions'
        },
        transactions: function() {
            var transaction1 = new Transaction({
                type: transactionType.ONE_TYPE,
                sum: "10",
                from: "Ola",
                to: "Gunn",
                createdAt: new Date()
            });
    
            var transaction2 = new Transaction({
                type: transactionType.ANOTHER_TYPE,
                sum: "20",
                from: "Geir",
                to: "Ove",
                createdAt: new Date()
            });

            var transactions = new Transactions([transaction1, transaction2]);

            var transactionsView = new TransactionsView({ transactions: transactions });

            $body.html(transactionsView.render().el);
        }
    });

    new Router();

    $(document).ready(function() {

        Backbone.history.start();
    });
});