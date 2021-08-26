(() => ({
    name: 'NavigationLinks',
    type: 'NAVIGATION_LINKS',
    allowedTypes: ["NAVIGATION_BUTTON"],
    orientation: 'HORIZONTAL',
    jsx: (() => {

        const isDev = B.env === 'dev';
        const isEmpty = children.length === 0;
        const isPristine = isDev && isEmpty;
        const childElements = children.map(child => <li className="nav-item">{child}</li>);

        const navClasses = [
            'nav',
            isEmpty && classes.empty,
            isPristine && classes.pristine,
          ].join(' ');
        return (
            <div className="col-lg-10">
                <div className="collapse navbar-collapse" id="navbarNorthNav">
                    <div className="navbar-nav mr-md-19">
                        <ul className={navClasses}>
                            {isPristine && <p>Nav-Links</p>}
                            {!isPristine && childElements}
                        </ul>
                    </div>
                </div>
            </div>
        )
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
        },
    }),
}))();