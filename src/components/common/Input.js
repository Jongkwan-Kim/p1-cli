import React from 'react';
import { InputBase } from '@material-ui/core';
import { withStyles, fade, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { orange } from '@material-ui/core/colors';

const styles = theme => ({
    input: {
        width: '100%'
    }
});

const theme = createMuiTheme({
    palette: {
        primary: orange,
    },
});

const StyledInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
        '&:hover': {
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

class CustomInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, id, name, value, label, handler, ...rest } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <StyledInput
                    {...rest}
                    id={id}
                    name={name}
                    value={value}
                    onChange={handler}
                    placeholder={label}
                    className={classes.input}
                />
            </ThemeProvider>
        )
    }
}

export default withStyles(styles)(CustomInput);