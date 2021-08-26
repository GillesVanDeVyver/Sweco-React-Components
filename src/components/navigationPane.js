(() => ({
  name: 'NavigationPane',
  type: 'BODY_COMPONENT',
  allowedTypes: ['NAVIGATION_TOOLBAR', 'NAVIGATION_LINKS'],
  orientation: 'HORIZONTAL',
  jsx: (() => {

    const { endpoint } = options;

    const navbarToggleElement = (
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNorthNav" aria-controls="navbarNorthNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="btn-nav-box">
          <span className="btn-nav-inner"/>
        </span>
      </button>
    )
    const logoElement =
      (
        <div className="col-lg-2">
          <header>
            <a href="./" className="logotype logotype-white" role="banner">Sweco</a>
          </header>
        </div>
      ) 

    const navElement =
      (
        <nav className="navbar navbar-dark navbar-expand-lg">
          <div className="container">
            <div className="row no-gutters">
              {logoElement}
              {navbarToggleElement}
              {children}
            </div>
          </div>
        </nav>
      )

    return navElement;


  })(),
  styles: () => ({}),
}))();