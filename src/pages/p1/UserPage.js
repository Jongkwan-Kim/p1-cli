import React from 'react';
import { Grid } from '@material-ui/core';

class UserPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container alignItems={'center'} jusify={'center'}>
                <Grid item xs={12}>
                    UserPage
                </Grid>
            </Grid>
        )
    }
}

export default UserPage;