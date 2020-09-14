import React from 'react';
import Header from './Header';
import SideNav from './SideNav';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
    container: {
        height: 'inherit',
    },
    header: {
        zIndex: 2
    },
    contents: {
        display: 'flex',
        height: 'calc(100% - 64px)'
    },
    sideNav: {
        zIndex: 2,
        height: '100%',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
    },
    mainContents: {
        backgroundColor: '#ffffff',
        width: '100%'
    }
});

class Template extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes, children } = this.props;

        return (
            <Grid container alignItems={'center'} justify={'center'} className={classes.container}>
                <Grid item xs={12} className={classes.header}>
                    <Header />
                </Grid>
                <Grid item xs={12} className={classes.contents}>
                    <div className={classes.sideNav}>
                        <SideNav />
                    </div>
                    <div className={classes.mainContents}>
                        { children }
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Template);