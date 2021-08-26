(() => ({
  name: 'NavigationDropdownButton',
  type: 'NAVIGATION_DROPDOWN_BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {

    const { text, hasIcon, icon, linkType, linkTo, linkToExternal } = options;
    const { useText, useEndpoint } = B;


    const isLinkToInternal = linkType === 'internal';
    const isLinkToExternal = linkType === 'external';

    const handleClick = () => {
      if (isLinkToInternal) {
        window.location.href = useEndpoint(linkTo);
      } else if (isLinkToExternal) {
        const linkToExternalVariable = (linkToExternal && useText(linkToExternal)) || '';
        window.location.href = linkToExternalVariable;
      }
    };


    const headerElement = (
      <button type="button" className="dropdown-item" onClick={handleClick}>
        {hasIcon && <i className={icon}></i>}
        <span>{text}</span>
      </button>
    )
    return headerElement;
  })(),
  styles: () => ({}),
}))();
