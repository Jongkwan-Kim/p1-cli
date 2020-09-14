import React from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/styles';
import { history } from '../../utils'
import CONSTANT from '../../constant';
import { connect } from 'react-redux';
import {login, logout} from '../../actions/auth';

const styles = theme => ({
    appBar: {
        backgroundColor: '#f57c00',
    }
})

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    handleClickLogout() {
        let data = {
            id: this.props.userId,
            token: this.props.token
        };
        try {
            this.props.handleLogout(data);
        } catch(error) {
            console.log(error)
        }
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

export const mapStateToProps = state => ({
    userId: state.auth.id,
    token: state.auth.token
});
export const mapDispatchToProps = dispatch => ({
    handleLogout(data) {
        dispatch(logout(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));