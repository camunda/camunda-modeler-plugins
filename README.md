> Looking for a starting point to create you own plugin? Checkout our [plugin starter project](https://github.com/camunda/camunda-modeler-plugin-example) or consult the [plugins documentation](https://github.com/camunda/camunda-modeler/tree/master/docs/plugins).


# Camunda Modeler Plugins :electric_plug:

[![Build Status](https://img.shields.io/github/workflow/status/camunda/camunda-modeler-plugins/CI)](https://github.com/camunda/camunda-modeler-plugins/actions?query=workflow%3ACI)

This repository contains a number of plugins for the [Camunda Modeler](https://github.com/camunda/camunda-modeler). You can also find it in an accessible and structured manner via the [`plugins.json`](./plugins.json) file.

Checkout our [contribution guidelines](#contribute) to add more plugins to the list.

### General

* [Menu Plugin Example](./menu-plugin-example) - An example of how to create a Camunda Modeler menu plugin.

### bpmn-js

* [bpmn-js Plugin Example](./bpmn-js-plugin-example) - An example of how to create a bpmn-js plugin.
* [Embedded Comments Plugin](./bpmn-js-plugin-embedded-comments) - [bpmn-js Embedded Comments](https://github.com/bpmn-io/bpmn-js-embedded-comments) as a Camunda Modeler plugin.
* [Token Simulation Plugin](https://github.com/camunda/camunda-modeler-token-simulation-plugin) - [bpmn-js-token-simulation](https://github.com/bpmn-io/bpmn-js-token-simulation) as a Camunda Modeler plugin.
* [Transaction Boundaries Plugin](./camunda-transaction-boundaries-plugin) - [camunda-transaction-boundaries](https://github.com/bpmn-io/camunda-transaction-boundaries) as a Camunda Modeler plugin.

### dmn-js

* [dmn-js Plugin Example](./dmn-js-plugin-example) - an example of how to create a dmn-js plugin.

### Other

* [Style Plugin Example](./style-plugin-example) - An example of how to create a style plugin.

## Plugins in other repositories

### General

* [Autosave Plugin](https://github.com/pinussilvestrus/camunda-modeler-autosave-plugin) - A Camunda Modeler plugin that automatically saves your diagrams.
* [Internationalization Plugin](https://github.com/FlowSquad/camunda-modeler-i18n-plugin) - A Camunda Modeler Plugin that allows you to translate the UI.
* [Multi-Diagram Plugin](https://github.com/sharedchains/camunda-modeler-plugin-multidiagram) - A Camunda Modeler plugin that allows to manage multiple diagrams on a single BPMN file.
* [Camunda Modeler Script Box Height Plugin](https://github.com/shepda/camunda-modeler-script-box-height-plugin) - A Camunda Modeler plugin that increases the height of the script box.

### bpmn-js

* [bpmn-js Resize Tasks Plugin](https://github.com/philippfromme/camunda-modeler-plugin-resize-tasks) - A Camunda Modeler plugin that makes tasks resizable in bpmn-js.
* [Color Picker](https://github.com/camunda-community-hub/camunda-modeler-plugin-color-picker) - A color picker plugin that lets you choose any color for your BPMN elements.
* [Generated Form Preview](https://github.com/camunda-community-hub/camunda-modeler-plugin-usertask-generatedform-preview) - A plugin that allows  you to preview forms in the Camunda Modeler.
* [Linter Plugin](https://github.com/camunda/camunda-modeler-linter-plugin) - A Camunda Modeler plugin to validate your BPMN diagrams using configurable linting rules.
* [Process I/O Specification](https://github.com/camunda/camunda-modeler-process-io-specification-plugin) - A plugin that allows you to document your process input and output specifications.
* [Property Info Plugin](https://github.com/umb/camunda-modeler-property-info-plugin) - Visualizes technical attributes like execution listeners, I/O mappings, field injections and extensions.
* [Reduced Palette](https://github.com/camunda-community-hub/camunda-modeler-plugin-reduced-palette) - A plugin that reduces the number of available entries in the palette and the context menu.
* [Technical ID Generator](https://github.com/camunda-community-hub/camunda-modeler-plugin-rename-technical-ids) - A plugin that generates technical IDs for BPMN elements according to best practices.
* [Tooltip Plugin](https://github.com/viadee/camunda-modeler-tooltip-plugin) - Adds tooltips to various BPMN elements revealing hidden properties and conditional flows.

### dmn-js

* [DMN Testing Plugin](https://github.com/bpmn-io/dmn-testing-plugin) - A Camunda Modeler plugin to test your DMN decision tables and decision graphs using an embedded Camunda decision engine.
* [Excel Import Plugin](https://github.com/pinussilvestrus/camunda-modeler-excel-import-plugin) - Camunda Modeler Plugin to import Excel Sheets to DMN Tables.

## Contribute

Would you like to contribute to this list? [Propose your addition](https://github.com/camunda/camunda-modeler/edit/master/README.md) by editing the plugins list.

Add your plugin to the [`plugins.json`](./plugins.json) to make it accessible in a structured manner.

```json
 {
  "id": "my-plugin",
  "displayName": "Example Plugin",
  "version": "0.1.0",
  "description": "A Camunda Modeler example plugin",
  "url": "https://github.com/example/camunda-modeler-example-plugin",
  "category": "General"
}
```

## Additional Resources

* [Plugins documentation](https://docs.camunda.io/docs/components/modeler/desktop-modeler/plugins/)
* [Plugin Starter Project](https://github.com/camunda/camunda-modeler-plugin-example)


## License

MIT _(unless noted otherwise)_
