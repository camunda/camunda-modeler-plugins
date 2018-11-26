# Camunda Modeler bpmn-js Plugin Example

Use this example as a starting point if you want to extend bpmn-js with your own module.

Create your module:

```javascript
function LoggingPlugin(eventBus) {
  eventBus.on('shape.added', function() {
    console.log('A shape was added to the diagram!');
  });
}

module.exports = {
  __init__: [ 'loggingPlugin' ],
  loggingPlugin: [ 'type', LoggingPlugin ]
};
```

Make sure to require your file in `client/client.js`:

```javascript
var registerClientPlugin = require('./registerClientPlugin');
var module = require('./LoggingPlugin');

registerClientPlugin({
  type: 'bpmn.modeler.additionalModules',
  module: module
});
```

Bundle your plugin:

```
npm run client
```

Put the directory into the `plugins` directory of the modeler.

If you're interested in how to create your own plugins see the [documentation](https://github.com/camunda/camunda-modeler/tree/master/docs/plugins) and this [example](https://github.com/camunda/camunda-modeler-plugin-example).
