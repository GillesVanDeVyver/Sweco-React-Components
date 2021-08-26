(() => ({
    name: 'InputGroupAppend',
    type: 'INPUTGROUP_APPEND',
    allowedTypes: ['BODY_COMPONENT', 'CONTAINER_COMPONENT', 'CONTENT_COMPONENT'],
    orientation: 'HORIZONTAL',
    jsx: (() => {
      const isDev = B.env === 'dev';
      const isEmpty = children.length === 0;
      const isPristine = isDev && isEmpty;
  
      const classNames = [
        'input-group-append',
        isEmpty && classes.empty,
        isPristine && classes.pristine
      ].join(' ');
  
  
      return (
        <div className={classNames}>
          {isPristine ? <span>
            Append
        </span>
            : children}</div>
      );
    })(),
    styles: () => {
      return {
        empty: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          fontSize: '0.75rem',
          color: '#262A3A',
          textTransform: 'uppercase',
          boxSizing: 'border-box',
        },
        pristine: {
          borderWidth: '0.0625rem',
          borderColor: '#AFB5C8',
          borderStyle: 'dashed',
          backgroundColor: '#F0F1F5',
        },
      };
    },
  }))();
  