import React from 'react';
import { Grid } from '@material-ui/core';

class DashBoardPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container alignItems={'center'} jusify={'center'}>
                <Grid item xs={12}>
                    DashBoardPage
                </Grid>
            </Grid>
        )
    }
}

export default DashBoardPage;