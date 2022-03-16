# Camunda Modeler dmn-js Plugin Example

[![Compatible with Camunda Modeler version 2.2+](https://img.shields.io/badge/Modeler_Version-2.2+-blue.svg)](#) [![Plugin Type](https://img.shields.io/badge/Plugin_Type-DMN-orange.svg)](#)

Use this example as a starting point if you want to extend dmn-js with your own module.

First, let's create a new module. In this case we're creating a simple module that will listen for an event and log it to the console:

```javascript
// See `client/LoggingPlugin.js`

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
```

Next, we have to register our module as a plugin for dmn-js, specifically its DRD modeler:

```javascript
// See `client/client.js`

import { registerDmnJSPlugin } from 'camunda-modeler-plugin-helpers';

import LoggingPlugin from './LoggingPlugin';

// Register a plugin for dmn-js' DRD modeler
registerDmnJSPlugin(LoggingPlugin, [ 'drd' ]);
```

Finally, we need to bundle our plugin so it can be executed in the Camunda Modeler:

```
npm run bundle
```

Now, we can put the directory into the `plugins` directory of the modeler.

If you're interested in how to create your own plugins see the [documentation](https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/) and this [example](https://github.com/camunda/camunda-modeler-plugin-example).
