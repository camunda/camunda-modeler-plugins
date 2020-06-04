class LoggingPlugin {

  // `eventBus` will be injected through dependency injection
  constructor(eventBus) {
    eventBus.on('shape.added', (context) => {
      
      // Inspect `context` to see all the information that is provided in the context of this event
      console.log('A shape was added to the diagram!', context);
    });
  }
}

// Use `$inject` to specify what modules should be injected
LoggingPlugin.$inject = [ 'eventBus' ];

// Specify the module using a unique name
// Use __init__ to make sure an instance will be created
export default {
  __init__: [ 'loggingPlugin' ],
  loggingPlugin: [ 'type', LoggingPlugin ]
};
