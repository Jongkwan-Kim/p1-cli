import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import { history } from '../../utils'
import CONSTANT from '../../constant';

const styles = theme => ({
    appBar: {
        backgroundColor: '#f57c00',
    }
})

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickLogout() {
        history.push(CONSTANT.URL.LOG_IN);
    }

    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Button color="inherit" onClick={this.handleClickLogout} style={{marginLeft: 'auto'}}>Logout</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);