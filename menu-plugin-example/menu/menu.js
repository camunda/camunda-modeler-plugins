'use strict';

module.exports = function(electronApp, menuState) {
  return [{
    label: 'Open BPMN Reference',
    accelerator: 'CommandOrControl+[',
    enabled: function() {

      // only enabled for BPMN diagrams
      return menuState.bpmn;
    },
    action: function() {
      var shell = require('electron').shell;
      shell.openExternal('https://camunda.org/bpmn/reference/');
    }
  }, {
    label: 'Create BPMN Diagram',
    accelerator: 'CommandOrControl+]',
    enabled: function() {
      return true;
    },
    action: function() {
      electronApp.emit('menu:action', 'create-bpmn-diagram');
    }
  }, {
    label: 'Apply some color',
    accelerator: 'CommandOrControl+-',
    enabled: function() {
      return menuState.elementsSelected;
    },
    action: function() {
      electronApp.emit('menu:action', 'setColor', { fill: '#fff', stroke: '#52b415' });
    }
  }, {
    label: 'Close Modeler',
    accelerator: 'CommandOrControl+!',
    enabled: function() {
      return true;
    },
    action: function() {
      process.exit(7);
    }
  }];
};
