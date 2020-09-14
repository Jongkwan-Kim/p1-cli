import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import CONSTANT from "../constant";
import logo from '../images/logo.png'
import { history } from '../utils'

const styles = theme => ({
    container: {
        height: '100%',
        backgroundColor: '#fafafa',
        padding: '10px',
        textAlign: 'center'
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
    inputDiv: {
        marginBottom: '10px'
    }
});


class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleSignin = this.handleSignin.bind(this);
    }

    onChange(e) {
        let {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSignin() {
        // history.push(CONSTANT.URL.DASH_BOARD)
        let data = {
            email: this.state.email,
            password: this.state.password
        };
        try {
            this.props.handleSignin(data);
        } catch(error) {
            console.log(error)
        }
    }

    render() {
        const { classes } = this.props;
        const { email, password } = this.state;
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
                            SIGN IN
                        </div>
                        <div className={classes.inputDiv}>
                            <Input
                                id={'email'}
                                name={'email'}
                                value={email}
                                label={'Email'}
                                handler={this.onChange}
                            />
                        </div>
                        <div className={classes.inputDiv}>
                            <Input
                                id={'password'}
                                name={'password'}
                                value={password}
                                label={'Password'}
                                handler={this.onChange}
                                type={'password'}
                            />
                        </div>
                        <div>

                        </div>
                        <div className={classes.inputDiv}>
                            <Button
                                label={'Sign In'}
                                handler={this.handleSignin}
                            />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

export const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
});
export const mapDispatchToProps = dispatch => ({
    handleSignin(data) {
        dispatch(login(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));