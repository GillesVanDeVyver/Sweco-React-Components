(() => ({
  name: 'BreadcrumbItem',
  type: 'BREADCRUMB_ITEM',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { Link, useText, env } = B;
    const isDev = env === 'dev';
    const { endpoint, breadcrumbContent } = options;
    const content = useText(breadcrumbContent);
    const hasEndpoint = endpoint && endpoint.id !== '';

    const isEmpty = breadcrumbContent.length === 0;
    const isPristine = isEmpty && isDev;
    const PlaceHolder = (
      <div
        className={[
          isEmpty ? classes.empty : '',
          isPristine ? classes.pristine : '',
        ].join(' ')}
      />
    );

    if(isDev){
      content = content + " / ";
    }


    const ItemContent = (
      <a className="breadcrumb-item">
        <Link endpoint={endpoint}>
          {content}
        </Link>
      </a>
    );

    const breadcrumbItem = isEmpty ? PlaceHolder : ItemContent;

    return isDev ? (
      <div className={classes.root}>{breadcrumbItem}</div>
    ) : (
        breadcrumbItem
      );
  })(),
  styles: B => t => {
    return {
      empty: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '1rem',
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
          content: '"Breadcrumb Item"',
        },
      },
    };
  },
}))();
