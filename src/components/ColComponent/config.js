export default {
  // Component machine name.
  name: 'col',

  // Component label.
  label: 'Column',

  // Defines which component types are allowed to be added as child.
  allowedChilds: ['row'],

  // Defines the available modifiers for the componeent.
  modifiers: {
    size: {
      title: 'Size',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        'col-1': '1',
        'col-2': '2',
        'col-3': '3',
        'col-4': '4',
        'col-5': '5',
        'col-6': '6',
        'col-7': '7',
        'col-8': '8',
        'col-9': '9',
        'col-10': '10',
        'col-11': '11',
        'col-12': '12',
      },
    },
    align: {
      title: 'Self alignment',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        'align-self-start': 'Left',
        'align-self-center': 'Middle',
        'align-self-end': 'Right',
      },
    },
    offset: {
      title: 'Offset',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        'offset-1': '1',
        'offset-2': '2',
        'offset-3': '3',
        'offset-4': '4',
        'offset-5': '5',
        'offset-6': '6',
        'offset-7': '7',
        'offset-8': '8',
        'offset-9': '9',
        'offset-10': '10',
        'offset-11': '11',
        'offset-12': '12',
      },
    },
    margin: {
      title: 'Auto margin',
      type: 'select',
      value: 'none',
      options: {
        none: '- None -',
        'ml-left': 'Left',
        'mr-right': 'Right',
      },
    },
  },
};
