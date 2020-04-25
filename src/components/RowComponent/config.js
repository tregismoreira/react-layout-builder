export default {
  // Component machine name.
  name: 'row',

  // Component label.
  label: 'Row',

  // Defines which component types are allowed to be added as child.
  allowedChilds: ['col'],

  // Defines the available parameters for the componeent.
  params: {
    align: {
      title: 'Vertical alignment',
      type: 'select',
      value: 'none',
      options: {
        start: 'Top', // .align-items-start
        center: 'Middle', // .align-items-center
        end: 'Bottom', // .align-items-end
      },
    },
    justify: {
      title: 'Horizontal alignment',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        start: 'Left', // .justify-content-start
        center: 'Middle', // .justify-content-center
        end: 'Right', // .justify-content-end
      },
    },
  },
};
