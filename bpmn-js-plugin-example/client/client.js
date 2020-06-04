import { registerBpmnJSPlugin } from 'camunda-modeler-plugin-helpers';

import LoggingPlugin from './LoggingPlugin';

// Register a plugin for bpmn-js
registerBpmnJSPlugin(LoggingPlugin);