# Camunda Modeler bpmn-js Moddle Extension Plugin Example

[![Compatible with Camunda Modeler version 2.2+](https://img.shields.io/badge/Modeler_Version-2.2+-blue.svg)](#) [![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN_Moddle-orange.svg)](#)

Use this example as a starting point if you want to extend bpmn-js with your own moddle extension.

First, let's create a new moddle extension. In this case we're creating a simple moddle extension that allows custom data to be added to BPMN flow nodes:

```javascript
// See `resources/qa.json`

{
  "name": "QualityAssurance",
  "uri": "http://some-company/schema/bpmn/qa",
  "prefix": "qa",
  "xml": {
    "tagAlias": "lowerCase"
  },
  "types": [
    {
      "name": "AnalyzedNode",
      "extends": [
        "bpmn:FlowNode"
      ],
      "properties": [
        {
          "name": "suitable",
          "isAttr": true,
          "type": "Float"
        }
      ]
    },
    ...
}
```

Next, we have to register our moddle extension as a plugin for bpmn-js:

```javascript
// See `client/client.js`

import { registerBpmnJSModdleExtension } from 'camunda-modeler-plugin-helpers';

import ModdleExtension from '../resources/qa.json';

// Register a moddle extension for bpmn-js
registerBpmnJSModdleExtension(ModdleExtension);
```

Finally, we need to bundle our plugin so it can be executed in the Camunda Modeler:

```
npm run bundle
```

Now, we can put the directory into the `plugins` directory of the modeler.

If you're interested in how to create your own plugins see the [documentation](https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/) and this [example](https://github.com/camunda/camunda-modeler-plugin-example).
