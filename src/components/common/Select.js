import React from 'react';
import { Select , MenuItem, InputBase } from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles/index";

const CustomSelect = withStyles(theme => ({
    icon: {
        marginRight: '10px'
    }
}))(Select);

const RowsSelectBox = withStyles(theme => ({
    input: {
        borderRadius: 4,
        border: '1px solid #eeeeee',
        backgroundColor: '#ffffff',
        width: '30px',
        fontSize: 14,
        padding: '10px 10px 10px 20px',
        display: 'flex',
        alignItems: 'center',
        height: '18px',
        boxShadow: '2.9px 4.1px 10px 0 rgba(0, 0, 0, 0.02)',
        '&:focus': {
            borderColor: '#009688',
            borderRadius: 4,
        },
        '&:hover': {
            borderColor: '#009688',
            borderRadius: 4,
        }
    }
}))(InputBase);

const CustomMenuItem = withStyles(theme => ({
    root: {
        fontSize: '14px',
        color: '#444444',
    }
}))(MenuItem);

const styles = theme => ({

});


const DefaultSelect = ({ value, handler, items }) => {
    return (
        <CustomSelect
            data-test-id='rowSelectBox'
            value={value}
            onChange={handler}
            input={<RowsSelectBox name="row" id="row-custom-select" />}
            MenuProps={{
                getContentAnchorEl: () => null,
            }}
        >
            {
                items.map((item, index) => {
                    return (
                        <CustomMenuItem key={index} value={item.value}>
                            { item.label }
                        </CustomMenuItem>
                    )
                })
            }
        </CustomSelect>
    )
};

export default withStyles(styles)(DefaultSelect);