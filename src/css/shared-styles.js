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
    .modal-btn{
      display: block;
      width: 100%;
      font-weight: bold;
      padding: 0 12px;
      line-height: 36px;
      font-size: 14px;
      border: 1px solid;
      border-radius: 3px;
      color: var(--white2-black3);
      text-shadow: 0 1px 0 var(--black3-white1);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      border-color: var(--black1-white3);
      background: var(--black1-white2);
      background: -webkit-linear-gradient(top, var(--black3-white1), var(--black1-white2));
      background: -ms-linear-gradient(top, var(--black3-white1), var(--black1-white2));
      background: -moz-linear-gradient(top, var(--black3-white1), var(--black1-white2));
      background: -o-linear-gradient(top, var(--black3-white1), var(--black1-white2));
      margin: 12px 0 24px 0;
      cursor: pointer;
    }
    small {
      margin: 6px 0 0 0;
      font-size: 12px;
      display: block;
      color: var(--grey-color);
      line-height: 1.5em;
    }
    input {
      width:100%;
      max-width: 280px;
      padding: 8px;
      display: block;
      overflow: hidden;
      color: var(--white1-black1);
      line-height: 17px;
      border: 1px solid var(--black3-white3);
      border-radius: 3px;
      font-size: 14px;
      font-weight: 400;
      background: var(--black1-white2);
    }
    input:focus {
      outline: 0;
      border: 1px solid var(--blue-color);
      box-shadow: none;
    }
    .issue {
      color: var(--red-color);
    }
    .error{
      border: 1px solid var(--red-color);
    }
    label {
      margin: 16px 0 6px 0px;
      display: block;
      font-weight:500;
      font-size:14px;
    }
    button:focus {
      outline:0;
    }
    input[type=radio]{
      display: inline-block;
      width: 20px;
    }
    .radio label {
      display: inline-block;
      margin: 24px 0 0 0;
    }
    .radio .side-label {
      margin: 6px 8px 0 0;
    }
    </style>
  </template>
</dom-module>
`;

document.head.appendChild($_documentContainer.content);
