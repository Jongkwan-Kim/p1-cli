import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid, List, ListItem, ListItemIcon } from '@material-ui/core';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import CONSTANT from "../../constant";
import MenuList from '../../components/p1/setting/MenuList';
import TabGeneral from '../../components/p1/setting/TabGeneral';
import TabDashBoard from '../../components/p1/setting/TabDashBoard';
import TabMBook from '../../components/p1/setting/TabMBook';
import TabUser from '../../components/p1/setting/TabUser';
const styles = theme => ({
    container: {
        padding: '50px',
        height: '100%'
    },
    wrapper: {
        height: '100%'
    },
    nav: {
        border: '1px solid #ffffff',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
    contents: {
        border: '1px solid #ffffff',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        height: '100%',
        padding: '20px'
    },
    list: {
        border: '1px solid #ffffff',
        backgroundColor: '#ffffff',
        borderRadius: '8px'
    }
})


class SettingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabId: CONSTANT.MENU.SETTING.GENERAL,
            categoryName: ''
        };

        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.getTab = this.getTab.bind(this);
        this.handleAddCategory = this.handleAddCategory.bind(this);
    }

    handleChangeTab(tabId) {
        this.setState({
            tabId: tabId
        })
    }

    getTab(tabId) {
        switch (tabId) {
            case CONSTANT.MENU.SETTING.GENERAL:
                return <TabGeneral />
            case CONSTANT.MENU.SETTING.DASH_BOARD:
                return <TabDashBoard />
            case CONSTANT.MENU.SETTING.M_BOOK:
                return <TabMBook />
            case CONSTANT.MENU.SETTING.USER:
                return <TabUser />
            default:
                return <TabGeneral />
        }
    }

    handleAddCategory() {
        console.log('123');
    }

    render() {
        const { classes } = this.props;
        const { tabId } = this.state;
        return (
            <Grid container alignItems={'flex-start'} justify={'center'} className={classes.container}>
                <Grid item xs={12} className={classes.wrapper}>

                    <Grid container alignItems={'flex-start'} justify={'space-around'} className={classes.wrap}>
                        <Grid item xs={2} className={classes.nav}>
                            <MenuList
                                handleChangeTab={this.handleChangeTab}
                                tabId={tabId}
                            />
                        </Grid>
                        <Grid item xs={9} className={classes.contents}>
                            {
                                this.getTab(tabId)
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(SettingPage);