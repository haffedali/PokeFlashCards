import { createTheme } from '@material-ui/core/styles';

import * as colors from '../assets/jss/colors'

const theme = createTheme({
    BACKGROUND: colors[colors.CADET_BLUE_CRAYOLA],
    ALERT: colors[colors.ROSSO_CORSA],
    SECONDARY: colors[colors.SELECTIVE_YELLOW],
    PRIMARY: colors[colors.PRUSSIAN_BLUE],
    BORDER: colors[colors.GREEN_BLUE_CRAYOLA]
})

export default theme;