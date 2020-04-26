import icon from './icon.svg';

export default {
  // Component type machine name.
  type: 'container',

  // Component label.
  label: 'Container',

  // component icon
  icon,

  // Defines which component types are allowed to be added as child.
  allowedChilds: ['row'],

  // Defines the available modifiers for the componeent.
  availableModifiers: {
    fluid: {
      title: 'Fluid container',
      type: 'checkbox',
      value: false,
    },
  },
};
