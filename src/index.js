// Note to future developers:
// The Sweco React Component set for betty blocks is not fully React.
// Because of little manpower, the components just return raw HTML elements instead.



import * as Core from '@material-ui/core';
import * as Lab from '@material-ui/lab';
import * as Pickers from '@material-ui/pickers';
import * as Styles from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns';
import Icons from './icons';

import * as PowerBIModels from 'powerbi-models';
import {PowerBIEmbed} from 'powerbi-client-react'


// SwecoComponents gives an exception about Tempus Dominus. I think this package is kinda uneccesary anyway.
//import SwecoComponents from '@sweco/sweco-digital-platforms/dist/js/sweco-components'
import SwecoBootstrap from '@sweco/sweco-digital-platforms/dist/js/sweco-bootstrap'
import SwecoStyles from '@sweco/sweco-digital-platforms/dist/css/sweco-bootstrap.css'
import SwecoFonts from './styles/fonts.css'
import SwecoIcons from './styles/icons.css'

// this css file overrides the z-index for the selection element in betty blocks.
// its original z-index is 15, which is lower than dropdown z-index
import BettyBlocksOverride from './styles/bettyblocksOverride.css'


// have to use { } because it is not a default export
import { Typeahead } from 'react-bootstrap-typeahead';
// While the component relies primarily on Bootstrap, some additional styling is needed. You should include the provided CSS file in your project:
import TypeaheadStyles from 'react-bootstrap-typeahead/css/Typeahead.css'









// This exports to window.SwecoBettyBlocks in bettyblocks
export default {
    Core,
    Icons,
    Lab,
    Pickers,
    Styles,
    DateFnsUtils,

    SwecoIcons,
    SwecoFonts,
    SwecoBootstrap,
    SwecoStyles,

    BettyBlocksOverride
};
