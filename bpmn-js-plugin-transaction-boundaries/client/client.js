var registerBpmnJSPlugin = require('camunda-modeler-plugin-helpers').registerBpmnJSPlugin;
var plugin = require('./transaction-boundaries-with-editor-actions');

registerBpmnJSPlugin(plugin);
