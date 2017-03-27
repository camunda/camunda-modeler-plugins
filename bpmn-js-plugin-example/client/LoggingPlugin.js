'use strict';

function LoggingPlugin(eventBus) {
  eventBus.on('shape.added', function(event) {
    console.log('%c A shape was added to the diagram!', 'background-color: #52b415; color: #fff; font-size: 24px;');
  });
}

module.exports = {
  __init__: [ 'loggingPlugin' ],
  loggingPlugin: [ 'type', LoggingPlugin ]
};
