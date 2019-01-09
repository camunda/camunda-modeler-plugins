import TransactionBoundariesModule from 'camunda-transaction-boundaries';

function TransactionBoundariesEditorActions(injector, eventBus, transactionBoundaries) {

  eventBus.on('editorActions.init', function(event) {
    var editorActions = event.editorActions;

    editorActions.register('toggleTransactionBoundaries', function() {
      transactionBoundaries.toggle();
    });
  });
}

TransactionBoundariesEditorActions.$inject = [
  'injector',
  'eventBus',
  'transactionBoundaries'
];

export default {
  __depends__: [
    TransactionBoundariesModule
  ],
  __init__: [ TransactionBoundariesEditorActions ]
};