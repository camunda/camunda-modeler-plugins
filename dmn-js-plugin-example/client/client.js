import { registerDmnJSPlugin } from 'camunda-modeler-plugin-helpers';

import LoggingPlugin from './LoggingPlugin';

// Register a plugin for dmn-js' DRD modeler
registerDmnJSPlugin(LoggingPlugin, [ 'drd' ]);