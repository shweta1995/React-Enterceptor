/**
 * App Light Theme
 */
import { createMuiTheme } from 'material-ui/styles';
import AppConfig from '../../constants/AppConfig';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: AppConfig.themeColors.info
        },
        secondary: {
            main: AppConfig.themeColors.warning
        }
    }
});

export default theme;