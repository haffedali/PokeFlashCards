import React from "react";
import theme from "./theme.js";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const defaultContextData = {};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext)

const ThemeProvider = ({children}) => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeContext.Provider value={theme}>
                {children}
            </ThemeContext.Provider>
        </MuiThemeProvider>
    )
}

export {ThemeProvider, useTheme}