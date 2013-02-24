define(['backbone'], function(Backbone) {

var TransactionsView = Backbone.View.extend({
    events: {
        'click .sortByDate': 'sortByDateAndType'
    },
    initialize: function(options) {
        this.transactions = options.transaction;
    },
    sortByDateAndType: function(e) {
        e.preventDefault();

        var type = this.$('.transaction-type:selected').val();
        this.transactions.sortBy(function(transaction) {
            var timestamp = Date.parse(transaction.get('createdAt')) * 1000;
            if (type === 'something') {
                timestamp += "A";
            } else if (type === 'somethingElse') {
                timestamp += "B";
            } else if (type === 'someOtherThing') {
                timestamp += "C";
            }
            return timestamp;
        });
    }
});

return TransactionsView;

});