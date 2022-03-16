'use strict';

module.exports = function(electronApp, menuState) {
  return [{
    label: 'Toggle Transaction Boundaries',
    accelerator: 'CommandOrControl+t',
    enabled: () => menuState.bpmn && menuState.platform === 'platform',
    action: () => electronApp.emit('menu:action', 'toggleTransactionBoundaries')
  }];
};
