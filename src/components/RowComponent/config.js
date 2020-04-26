export default {
  // Component type machine name.
  type: 'row',

  // Component label.
  label: 'Row',

  // Defines which component types are allowed to be added as child.
  allowedChilds: ['col'],

  // Defines the available modifiers for the componeent.
  availableModifiers: {
    align: {
      title: 'Vertical alignment',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        'align-items-start': 'Top',
        'align-items-center': 'Middle',
        'align-items-end': 'Bottom',
      },
    },
    justify: {
      title: 'Horizontal alignment',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        'justify-content-start': 'Left',
        'justify-content-center': 'Middle',
        'justify-content-end': 'Right',
      },
    },
  },
};
