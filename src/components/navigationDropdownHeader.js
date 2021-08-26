(() => ({
    name: 'NavigationDropdownHeader',
    type: 'NAVIGATION_DROPDOWN_HEADER',
    allowedTypes: [],
    orientation: 'VERTICAL',
    jsx: (() => {
      const { text } = options;
      const headerElement = (
        <h6 className="dropdown-header">
          <span>{text}</span>
        </h6>
      )
      return headerElement;
    })(),
    styles: () => ({}),
}))();
