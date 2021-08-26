(() => ({
  name: 'DataTableColumn',
  type: 'DATATABLE_COLUMN',
  allowedTypes: ['CONTENT_COMPONENT', 'CONTAINER_COMPONENT'],
  orientation: 'VERTICAL',
  jsx: (() => {
    const { env, useText, getProperty, useProperty } = B;
    const {
      horizontalAlignment,
      headerText,
      property,
      content,
      sortable,
    } = options;
    const { headerOnly, handleSort, orderBy } = parent || {};
    const { type } = property;
    const propertyArray = [property].flat();
    const { name: propertyName, label: propertyLabel } =
      getProperty(property) || {};
    const { field, order = 'asc' } = orderBy || {};
    const isDev = env === 'dev';
    const isEmpty = children.length === 0;
    const contentPlaceholder = isDev && isEmpty ? 'Select property' : '\u00A0';

    const bodyText = useText(content);
    const propContent = isDev ? `{{ ${propertyName} }}` : useProperty(property);

    let columnText = propertyName ? propContent : contentPlaceholder;
    if (type === 'ME_PROPERTY') {
      columnText = isDev ? `{{ ${propertyName} }}` : useText([property]);
    }

    if (bodyText) {
      columnText = bodyText;
    }

    if (typeof columnText === 'boolean') {
      columnText = columnText.toString();
    }

    const header = useText(headerText);
    let columnHeaderText = propertyLabel || contentPlaceholder;
    if (header) {
      columnHeaderText = header;
    }

    const isSortable = propertyName && sortable;

    const createSortHandler = prop => {
      const sortOrder = order === 'asc' ? 'desc' : 'asc';
      handleSort(prop, sortOrder);
    };

    const isFilterSelected = fields => {
      if (!fields || fields.length !== propertyArray.length) return false;

      for (let index = 0; index < fields.length; index += 1) {
        if (fields[index] !== propertyArray[index]) return false;
      }

      return true;
    };

    const Content =
      children.length > 0 ? (
        children
      ) : (
          <span className={classes.content}>{columnText}</span>
        );

    const Header = (
      <th>{columnHeaderText}</th>
    );

    return isDev ? (
      <div>
        {headerOnly ? (
          Header
        ) : (
            Content
          )}
      </div>
    ) : (
        <td>
          {headerOnly ? Header : Content}
        </td>
      );
  })(),
  styles: B => theme => {
    const { env, Styling } = B;
    const style = new Styling(theme);
    const isDev = env === 'dev';
    return {
      root: {
        display: isDev && ['block', '!important'],
        width: ({ options: { width } }) => width || 'auto',
      },
      columnSort: {
        pointerEvents: isDev && 'none',
        '& .MuiSvgIcon-root': {
          opacity: isDev && 0.5,
        },
      },
    };
  },
}))();
