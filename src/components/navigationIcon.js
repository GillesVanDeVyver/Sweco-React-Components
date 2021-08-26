(() => ({
  name: 'NavigationIcon',
  type: 'NAVIGATION_ICON',
  allowedTypes: ['NAVIGATION_DROPDOWN'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { icon, hasDropdown } = options;
    const { env } = B;
    const isDev = env === 'dev';

    let buttonProperties = {
      type: 'button',
      className: 'btn btn-icon',
    }
    if (hasDropdown) {
      buttonProperties["data-toggle"] = 'dropdown';
      buttonProperties['aria-haspopup'] = 'true';;
    }

    const buttonElement = (
      <button {...buttonProperties}>
        <i className={icon}></i>
      </button>
    )



    const iconButton = (
      <div>
        {buttonElement}
        {hasDropdown && children}
      </div>
    )

    return isDev ? <div className={classes.wrapper}> {iconButton} </div> : iconButton;
  })(),
  styles: () => () => ({
    wrapper: {
      border: "5px red solid"
    }
  }),
}))();