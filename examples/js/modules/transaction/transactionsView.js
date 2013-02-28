define([
	'backbone', 
	'./transactionType',
	'hb!./transactions'
], function(
	Backbone, 
	transactionType,
	transactionsTemplate
) {

var TransactionsView = Backbone.View.extend({
    initialize: function(options) {
        this.transactions = options.transactions;
    },
    render: function() {
		var sortedTransactions = this.transactions.sortBy(
          function(transaction) {
            var timestamp = Date.parse(transaction.get('createdAt')) * 1000;
            if (transaction.get("type") === transactionType.ONE_TYPE) {
                timestamp += "B";
            } else if (transaction.get("type") === 
              transactionType.ANOTHER_TYPE) {
                timestamp += "A";
            } 

            return timestamp;
        });

        var json = _.map(sortedTransactions, function(transaction){ return transaction.toJSON(); });
        this.$el.html(transactionsTemplate(json));

        return this;
    }
});

return TransactionsView;

});