(() => ({
  name: 'Text',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { content, displayType, fontSize,
      isBold, isItalic, isUnderline, isStrikeTrough, isSuperScript, isSubScript } = options;
    const { env } = B;

    const isDev = env === 'dev';
    const isEmpty = content.length === 0;
    const isPristine = isDev && isEmpty;


    let textElement;
    if (isPristine) {
      textElement = "Empty Content";
    } else {
      textElement = content;
    }

    // apply stylings
    if (isBold) {
      textElement = <strong> {textElement}  </strong>;
    }
    if (isItalic) {
      textElement = <em>  {textElement}  </em>;
    }
    if (isUnderline) {
      textElement = <u>  {textElement}  </u>;
    }
    if (isStrikeTrough) {
      textElement = <s>{textElement}</s>
    }
    if (isSuperScript) {
      textElement = <sup>{textElement}</sup>
    }
    if (isSubScript) {
      textElement = <sub>{textElement}</sub>
    }

    /*    const buttonProps = {
      ...generalProps,
      fullWidth,
      variant,
      classes: {
        root: classes.root,
        contained: classes.contained,
        outlined: classes.outlined,
      },
      className: !!buttonContent && classes.empty,
      type: isDev ? 'button' : type,
    };*/


    const fontSizeClass = `font-size-${fontSize} ${classes.wrapping}`;

    let element;
    if (displayType === 'inline') {
      element = <span className={fontSizeClass}> {textElement} </span> // wrapping has no effect with inline text
    } else if (displayType === 'block') {
      element = <p className={fontSizeClass}> {textElement}</p>
    }


    return element;
  })(),
  styles: () => {
    return {
      wrapping: {
        whiteSpace: "pre-wrap"
      }
    }
    
   },
}))();