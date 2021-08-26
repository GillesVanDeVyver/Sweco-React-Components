(() => ({
  name: 'Title',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (() => {
    const { content, type } = options;

    const { env } = B;

    const isDev = env === 'dev';

    const Tag = type;
    const element = (
      <Tag>
        {content.length > 0 && <B.Text value={content} />}
        {content.length === 0 && isDev && <span>Empty Content</span>}
      </Tag>
    );

    return element;
  })(),
  styles: () => {},
}))();
