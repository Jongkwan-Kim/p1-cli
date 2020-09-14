import React from 'react';
import { List, ListItem, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { history } from '../../utils'
import CONSTANT from '../../constant';

import CalendarViewDayOutlinedIcon from '@material-ui/icons/CalendarViewDayOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';


const NAV_MENU_LIST = [
    {
        id: 'dashBoard',
        url: CONSTANT.URL.DASH_BOARD,
        icon: <AssignmentIndOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'Dash Board'
    },
    {
        id: 'mBook',
        url: CONSTANT.URL.M_BOOK,
        icon: <CalendarViewDayOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'M Book'
    },
        {
        id: 'user',
        url: CONSTANT.URL.USER,
        icon: <GroupOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'user'
    },
    {
        id: 'setting',
        url: CONSTANT.URL.SETTING,
        icon: <SettingsApplicationsOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'setting'
    }
];



const styles = theme => ({
    listDiv: {
        margin: '10px 0'
    },
    listIcon: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'schedule'
        };
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickItem(menu) {
        this.setState({
            selectedItem: menu.id
        });
        history.push(menu.url);
    }

    render() {
        const { classes } = this.props;
        const { selectedItem } = this.state;

        return (
            <List>
                {
                    NAV_MENU_LIST.map((menu, index) => {
                        return (
                            <ListItem
                                key={menu.id}
                                title={menu.label}
                                className={classes.listDiv}
                                button
                                selected={selectedItem === menu.id}
                                onClick={e => this.handleClickItem(menu)}
                            >
                                <ListItemIcon className={classes.listIcon}>
                                    { menu.icon }
                                </ListItemIcon>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }
}

export default withStyles(styles)(SideNav);