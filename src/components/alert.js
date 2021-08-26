(() => ({
  name: 'Alert',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {

    const {
      alertType,
      message
    } = options;

    const { env } = B;

    const isDev = env === 'dev';

    const boldText = <strong> {alertType.charAt(0).toUpperCase() + alertType.slice(1)}! </strong>

    const alertClass = `alert alert-${alertType}`;
    const buttonClass = `close close-${alertType}`;
    const alertElement = (
      <div className={alertClass} role="alert">
        {!isDev && <button type="button" className={buttonClass} data-dismiss="alert">
          <span>Close</span>
        </button>}

        <i class="far fa-exclamation-circle" />
        {boldText}
        {message}
      </div>
    )

    return alertElement;
  })(),
  styles: () => ({}),
}))();