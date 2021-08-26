(() => ({
  name: 'NavigationButton',
  type: 'NAVIGATION_BUTTON',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { text, linkType, linkTo, linkToExternal, visible } = options;
    const { env, useText, Link, useEndpoint } = B;
    const isDev = env === 'dev';
    const hasLink = linkTo && linkTo.id !== '';
    const hasExternalLink = linkToExternal && linkToExternal.id !== '';
    const linkToExternalVariable =
      (linkToExternal && useText(linkToExternal)) || '';

    const [isVisible, setIsVisible] = useState(visible);

    const hideButton = () => setIsVisible(false);
    const showButton = () => setIsVisible(true);
    const toggleVisibility = () => setIsVisible(s => !s);



    useEffect(() => {
      setIsVisible(visible);
    }, [visible]);

    B.defineFunction('Show', showButton);
    B.defineFunction('Hide', hideButton);
    B.defineFunction('ToggleVisibility', toggleVisibility);

    const handleClick = () => {
      if (linkType === 'internal') {
        window.location.href = useEndpoint(linkTo);
      } else if (linkType === 'external') {
        window.location.href = linkToExternalVariable;
      }
    }
    return (
      <button onClick={handleClick} type="button" className="btn nav-link">{text}</button>
    )


  })(),
  styles: B => t => { },
}))();
