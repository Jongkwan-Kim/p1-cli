import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/common/Button';
import { history } from '../utils'
import CONSTANT from '../constant';
import logo from '../images/logo.png'

const styles = theme => ({
    container: {
        height: '100%',
        backgroundColor: '#fafafa',
        padding: '10px',
        textAlign: 'center',
    },
    paper: {
        padding: '15px'
    },
    logo: {
        margin: '50px 0',
    },
    title: {
        marginBottom: '30px',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#fbc02d'
    },
    btn: {
        marginBottom: '10px'
    }
});

class MainPage extends React.Component {
    constructor(props) {
        super(props);

    }

    handleClickLogin() {
        history.push(CONSTANT.URL.LOG_IN);
    }

    handleClickRegister() {
        history.push(CONSTANT.URL.REGISTER);
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container alignItems={'center'} justify={'center'} className={classes.container}>
                <Grid item xs={12} sm={8} md={4} lg={3}>
                    <Paper elevation={3} className={classes.paper}>
                        <div className={classes.logo}>
                            <Link to={CONSTANT.URL.ROOT}>
                                <img src={logo} alt="" width={'15%'} height={'auto'}/>
                            </Link>
                        </div>
                        <div className={classes.title}>
                            ROOT
                        </div>
                        <div className={classes.btn}>
                            <Button
                                label={'Log in'}
                                handler={this.handleClickLogin}
                            />
                        </div>
                        <div className={classes.btn}>
                            <Button
                                label={'Register'}
                                handler={this.handleClickRegister}
                            />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(MainPage);