define(['backbone', './transaction'], function(Backbone, Transaction) {

	var Transactions = Backbone.Collection.extend({
		model: Transaction
	});

	return Transactions;

});