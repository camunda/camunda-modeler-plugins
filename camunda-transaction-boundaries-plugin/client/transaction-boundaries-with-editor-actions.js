var inherits = require('inherits');

var TransactionBoundaries = require('../node_modules/bpmn-js-transaction-boundaries/lib/TransactionBoundaries');

function TransactionBoundariesWithEditorActions(elementRegistry, overlays, eventBus, editorActions) {
  TransactionBoundaries.call(this, elementRegistry, overlays, eventBus);

  var that = this;

  editorActions.register({
    toggleTransactionBoundaries: function() {
      that.toggle();
    }
  });
}

inherits(TransactionBoundariesWithEditorActions, TransactionBoundaries);

TransactionBoundariesWithEditorActions.$inject = [ 'elementRegistry', 'overlays', 'eventBus', 'editorActions' ];

module.exports = {
  __init__: [ 'transactionBoundariesWithEditorActions' ],
  'transactionBoundariesWithEditorActions': [ 'type', TransactionBoundariesWithEditorActions ]
};
