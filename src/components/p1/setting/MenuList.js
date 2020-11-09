import React from 'react';
import CONSTANT from '../../../constant';
import { Grid, List, ListItem, ListItemIcon } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({

});

const SETTING_MENU_LIST = [
    {
        id: CONSTANT.MENU.SETTING.GENERAL,
        // icon: <CalendarViewDayOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'GENERAL'
    },
    {
        id: CONSTANT.MENU.SETTING.DASH_BOARD,
        // icon: <CalendarViewDayOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'DASH BOARD'
    },
    {
        id: CONSTANT.MENU.SETTING.M_BOOK,
        // icon: <CalendarViewDayOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'M BOOK'
    },
    {
        id: CONSTANT.MENU.SETTING.USER,
        // icon: <CalendarViewDayOutlinedIcon style={{ fontSize: 32 }}/>,
        label: 'USER'
    },
];

const MenuList = ({ classes, handleChangeTab, tabId }) => {
    return (
        <List className={classes.list}>
            {
                SETTING_MENU_LIST.map((menu, index) => {
                    return (
                        <ListItem
                            key={menu.id}
                            title={menu.label}
                            className={classes.listDiv}
                            button
                            selected={tabId === menu.id}
                            onClick={e => handleChangeTab(menu.id)}
                        >
                            { menu.label }
                        </ListItem>
                    )
                })
            }
        </List>
    )
};

export default withStyles(styles)(MenuList);