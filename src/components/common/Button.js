import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange } from '@material-ui/core/colors';

const styles = theme => ({
    button: {
        width: '100%',
        height: '40px'
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        borderRadius: '0',
        borderColor: orange[500],
        color: theme.palette.getContrastText(orange[800]),
        backgroundColor: orange[500],
        '&:hover': {
            backgroundColor: orange[300],
            borderColor: orange[300],
        },
    },
}))(Button);

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, label, handler, ...rest } = this.props;
        return (
            <ColorButton
                {...rest}
                variant="outlined"
                className={classes.button}
                onClick={handler}
            >
                { label }
            </ColorButton>
        )
    }
}

export default withStyles(styles)(CustomButton);