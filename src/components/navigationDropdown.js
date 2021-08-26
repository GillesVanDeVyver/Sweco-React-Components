(() => ({
  name: 'NavigationDropdown',
  type: 'NAVIGATION_DROPDOWN',
  allowedTypes: ['NAVIGATION_DROPDOWN_HEADER', 'NAVIGATION_DROPDOWN_DIVIDER', 'NAVIGATION_DROPDOWN_BUTTON'],
  orientation: 'VERTICAL',
  jsx: (() => {

    const { stayVisibleInDev } = options;
    const { env } = B;
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const isPristine = isDev && isEmpty;



    const dropdownClasses = [
      'dropdown-menu',
      'dropdown-menu-right',
      'dropdown-menu-wrap',
      isDev && stayVisibleInDev && "show",
      isEmpty && classes.empty,
      isPristine && classes.pristine,
    ].join(' ');

    const dropdownElement = (
      <div class={dropdownClasses} role="menu">
        {isPristine && <p>Nav-Dropdown</p>}
        {!isPristine && children}
      </div>
    )

    return dropdownElement;
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
    }
  }),
}))();
