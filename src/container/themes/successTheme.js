/**
 * App Success Theme
 */
import { createMuiTheme } from 'material-ui/styles';
import AppConfig from '../../constants/AppConfig';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: AppConfig.themeColors.success
        },
        secondary: {
            main: AppConfig.themeColors.primary
        }
    }
});

export default theme;