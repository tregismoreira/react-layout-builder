export default {
  // Component machine name.
  name: 'container',

  // Component label.
  label: 'Container',

  // Defines which component types are allowed to be added as child.
  allowedChilds: ['row'],

  // Defines the available settings for the componeent.
  settings: {
    fluid: {
      title: 'Vertical alignment',
      type: 'checkbox',
      value: false,
      options: {
        false: 'False', // .container
        true: 'True', // .container-fluid
      },
    },
  },
};
