(() => ({
  name: 'Breadcrumbs',
  type: 'CONTAINER_COMPONENT',
  allowedTypes: ['BREADCRUMB_ITEM'],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const isDev = B.env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isEmpty && isDev;



    const PlaceHolder = (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      />
    );

    const breadcrumbs =
      children.length > 0 ? (
        <nav className="breadcrumb">
          {children}
        </nav>
      ) : (
          PlaceHolder
        );
    return isDev ? <div>{breadcrumbs}</div> : breadcrumbs;
  })(),
  styles: () => () => ({
    empty: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '4rem',
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
      '&::after': {
        content: '"Breadcrumbs"',
      },
    },
  }),
}))();
