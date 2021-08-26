(() => ({
    name: 'powerBI',
    type: 'CONTENT_COMPONENT',
    allowedTypes: [],
    orientation: 'HORIZONTAL',
    jsx: (() => {
        const { env } = B;
        const { uniqueId, reportId, showNavigationPane, showFilterPane, prefilter, startpage } = options;
        const preloadId = uniqueId + "-preload";
        const dashboardId = uniqueId + "-dashboard";
        const isDev = env === 'dev';

        const embedUrl = [
            'https://app.powerbi.com/reportEmbed?',
            `reportId=${reportId}&`,
            'autoAuth=true&',
            `filterPaneEnabled=${showFilterPane}&`,
            `navContentPaneEnabled=${showNavigationPane}&`,
            startpage.length > 0 ? `pageName=${startpage}&` : '',
            prefilter.length > 0 ? `filter=${prefilter}` : '',
        ].join('');



        onPowerBILoad = () => {
            document.getElementById(uniqueId).width = 0.8 * window.innerWidth;
            document.getElementById(uniqueId).height = 0.45 * window.innerWidth;
            document.getElementById(preloadId).style.display = 'none';
            document.getElementById(dashboardId).style.display = 'block'
        }

        const powerBIElement =
            <div>
                <div id={dashboardId}>
                    <iframe
                        id={uniqueId}
                        //onload={onPowerBILoad}
                        frameborder="0"
                        width="1200px"
                        height="900px"
                        src={embedUrl} />
                </div>
            </div >
        return isDev ? <div className={classes.wrapper}> {powerBIElement} </div> : powerBIElement;
    }
    )(),
    styles: () => ({
        wrapper: {
            border: "10px red solid"
        }
    }),
}))();