var registerBpmnJSPlugin = require('camunda-modeler-plugin-helpers').registerBpmnJSPlugin;
var LoggingPlugin = require('./LoggingPlugin');

registerBpmnJSPlugin(LoggingPlugin);
