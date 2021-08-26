(() => ({
  name: 'NavigationToolbar',
  type: 'NAVIGATION_TOOLBAR',
  allowedTypes: ["NAVIGATION_ICON"],
  orientation: 'HORIZONTAL',
  jsx: (() => {

    const isDev = B.env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isDev && isEmpty;


    const toolbarClasses = [
      'nav-toolbar',
      isEmpty && classes.empty,
      isPristine && classes.pristine,
    ].join(' ');


    return <div className={toolbarClasses}>
      {isPristine && <p>Nav-Toolbar</p>}
      {!isPristine && children}
    </div>;

  })(),
  styles: () => () => ({
    empty: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
  }),
}))();