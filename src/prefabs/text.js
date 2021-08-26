(() => ({
  name: 'Text',
  icon: 'ParagraphIcon',
  category: 'CONTENT',
  structure: [
    {
      name: 'Text',
      options: [
        {
          type: 'VARIABLE',
          label: 'Content',
          key: 'content',
          value: [],
          configuration: {
            as: 'MULTILINE',
          },
        },    
        {
          type: 'CUSTOM',
          label: 'Font Size',
          key: 'fontSize',
          value: 'base',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Extra Small', value:'xs'},
              { name: 'Small', value:'sm'},
              { name: 'Base', value:'base'},
              { name: 'Large', value:'lg'},
              { name: 'Extra Large', value:'xl'}
            ]
          }
        },
        {
          type: 'CUSTOM',
          label: 'Display type',
          key: 'displayType',
          value: 'block',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Block', value: 'block'},
              { name: 'Inline', value: 'inline'}
            ]
          }
        },
        {
          type: 'TOGGLE',
          label: 'Bold',
          key: 'isBold',
          value: false
        },
        {
          type: 'TOGGLE',
          label: 'Italic',
          key: 'isItalic',
          value: false
        },
        {
          type: 'TOGGLE',
          label: 'Underline',
          key: 'isUnderline',
          value: false
        },
        {
          type :'TOGGLE',
          label: 'Strike trough',
          key: 'isStrikeTrough',
          value: false
        },
        {
          type :'TOGGLE',
          label: 'Superscript',
          key: 'isSuperScript',
          value: false
        }
        ,
        {
          type :'TOGGLE',
          label: 'Subscript',
          key: 'isSubScript',
          value: false
        }
      ],
      descendants: [],
    },
  ],
}))();
