define(['backbone'], function(Bacbone) {

var Transaction = Backbone.Model.extend({
    defaults: {
        sum: undefined,
        from: undefined,
        to: undefined,
        createdAt: undefined,
        type: undefined
    }
});

return Transaction;


});