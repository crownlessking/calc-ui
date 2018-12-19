import all from './components';

export default {
  nav: {
    appName: 'GraphCalc',

    // Main navigation links next to webpage title or logo.
    links: [
      {
        role: 'link',
        text: 'F1'
      }, {
        id: 'debug-modal-example',
        links: [
          {
            modalDef: {
              getContent: ()=>'First link in the DEBUG dropdown',
              title: 'Modal Title'
            },
            role: 'dialog',
            text: 'Modal Example 1'
          }, {
            modalDef: {
              getContent: all.UpdateAppNameForm,
              title: 'Change App Title'
            },
            role: 'dialog',
            text: 'Change App Title'
          }
        ],
        role: 'dropdown',
        text: 'DEBUG'
      }, {
        modalDef: {
          getContent: () => 'This is great!, My 3rd modal! As a direct link on the navbar.',
          title: '3rd Modal'
        },
        role: 'dialog',
        text: 'Modal Example 3'
      }
    ],// */

    // Navigation links on the right
    linksRight: [
      {
        icon: 'glyphicon glyphicon-cog',
        id: 'settings',
        links: [
          {
            icon: 'glyphicon glyphicon-user',
            role: 'link',
            text: 'Login'
          }, {
            icon: 'glyphicon glyphicon-question-sign',
            role: 'link',
            text: 'Help'
          }
        ],
        role: 'dropdown',
      }
    ] // */

  }, // Nav END

  // The area where all operations, expressions, and results can be found.
  home: {
    history: []
  } // resultPane END

}