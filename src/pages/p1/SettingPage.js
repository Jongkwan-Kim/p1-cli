import React from 'react';
import { Grid } from '@material-ui/core';

class SettingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container alignItems={'center'} jusify={'center'}>
                <Grid item xs={12}>
                    SettingPage
                </Grid>
            </Grid>
        )
    }
}

export default SettingPage;