import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `
<dom-module id="shared-styles">
  <template>
    <style>
    :host {
      --light-background-color: #EEEEEE;
      --dark-background-color: #000000;
    }
    * {
      user-select: none;
    }
    </style>
  </template>
</dom-module>
`;

document.head.appendChild($_documentContainer.content);
