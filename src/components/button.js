(() => ({
  name: 'Button',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'VERTICAL',
  jsx: (() => {
    const {
      variant,
      buttonText,
      buttonStyle,
      disabled,
      fullWidth,
      size,
      icon,
      linkType,
      linkTo,
      linkToExternal,
      type,
      visible,
      actionId,
      actionProperties,
      outerSpacing,
    } = options;

    const { env, useText, useAction, useEndpoint } = B;
    const isDev = env === 'dev';
    const isAction = linkType === 'action';
    const hasLink = linkTo && linkTo.id !== '';
    const hasExternalLink = linkToExternal && linkToExternal.id !== '';
    const linkToExternalVariable =
      (linkToExternal && useText(linkToExternal)) || '';
    const isIcon = variant === 'icon';
    const buttonContent = useText(buttonText);

    const [isVisible, setIsVisible] = useState(visible);

    const hideButton = () => setIsVisible(false);
    const showButton = () => setIsVisible(true);
    const [isLoading, setIsLoading] = useState(false);
    const toggleVisibility = () => setIsVisible(s => !s);

    const propertyMappings = new Map(actionProperties);
    const input = Array.from(propertyMappings.keys()).reduce((acc, key) => {
      const propertyId = propertyMappings.get(key);

      const value = isDev ? '' : B.useProperty(propertyId);
      acc[key] = value;
      return acc;
    }, {});

    const [actionCallback, { loading }] = (isAction &&
      useAction(actionId, {
        variables: {
          input,
        },
        onCompleted(data) {
          B.triggerEvent('onActionSuccess', data.actionb5);
        },
        onError(error) {
          B.triggerEvent('onActionError', error.message);
        },
      })) || [() => {}, { loading: false }];

    const toggleLoading = () => setIsLoading(l => !l);

    useEffect(() => {
      setIsVisible(visible);
    }, [visible]);

    B.defineFunction('Show', showButton);
    B.defineFunction('Hide', hideButton);
    B.defineFunction('ToggleVisibility', toggleVisibility);
    B.defineFunction('ToggleLoadingState', toggleLoading);

    useEffect(() => {
      if (loading) {
        B.triggerEvent('onActionLoad', loading);
      }
    }, [loading]);





    const handleClick = () => {
      if(linkType === 'internal'){
        window.location.href = useEndpoint(linkTo);
      } else if (linkType === 'external'){
        window.location.href = linkToExternalVariable;
      } else if (linkType === 'action'){
        actionCallback();
      }
    };


    const buttonProps = {
      className: [
        !!buttonContent && classes.empty,
        'btn',
        `btn-${buttonStyle}`,
        `btn-${size}`,
        fullWidth ? 'btn-block' : '',
        disabled ? 'disabled' : '',

      ].join(" "),
      type: isDev ? 'button' : type,
    };

    const showIndicator = !isIcon && (isLoading || loading);

    if(outerSpacing.length === 0){
      outerSpacing[0] = '0';
    }

    const ButtonComponent = (
      <button
        {...buttonProps}
        style={{margin:outerSpacing[0].split(" ").join("px ") + "px" }}
        onClick={handleClick}
      >
        {isIcon && <i className={`${icon}`}/>}
        {!isIcon && buttonContent}
        {showIndicator && (
          <span class="spinner-border spinner-border-white spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
        )}
      </button>
    );

    if (isDev) {
      return <div className={classes.wrapper}>{ButtonComponent}</div>;
    }
    return isVisible ? ButtonComponent : <></>;
  })(),
  styles: B => t => {
    const style = new B.Styling(t);
    const getSpacing = (idx, device = 'Mobile') =>
      idx === '0' ? '0rem' : style.getSpacing(idx, device);
    return {
      wrapper: {
        display: ({ options: { fullWidth } }) =>
          fullWidth ? 'block' : 'inline-block',
        width: ({ options: { fullWidth } }) => fullWidth && '100%',
        minHeight: '1rem',
        '& > *': {
          pointerEvents: 'none',
        },
      },
      loader: {
        marginLeft: '0.25rem',
      },
      empty: {
        '&::before': {
          content: '"\xA0"',
        },
      },
    };
  },
}))();