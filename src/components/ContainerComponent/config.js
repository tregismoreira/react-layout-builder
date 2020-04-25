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
      title: 'Fluid container',
      type: 'checkbox',
      value: false,
    },
  },
};
