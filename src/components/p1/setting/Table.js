import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableSortLabel, TableRow, Paper, Checkbox, Select, MenuItem, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {connect} from "react-redux";

const styles = theme => ({

})

const CategoryTable = ({ type, dataList, handleAllCheckBox, handleCheckBox, removeItem, updateItem }) => {

    const headers = [
        {
            id: 'name',
            label: 'Name'
        },
        {
            id: 'des',
            label: 'Description'
        }
    ];

    return (
        <TableContainer component={Paper} style={{borderRadius: '0'}}>
            <Table aria-label="simple table">
                <TableHead style={{backgroundColor: '#1db4b3'}}>
                    <TableRow>
                        <TableCell padding="checkbox" >
                            <Checkbox
                                color="primary"
                            />
                        </TableCell>
                        {
                            headers.map((header) => (
                                <TableCell key={header.id} >
                                    { header.label }
                                </TableCell>
                            ))
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataList.map((row, index) => (
                            <TableRow
                                key={index}
                                hover
                                // onClick={e => this.props.handleClickRow(row)}
                            >
                                <TableCell padding="checkbox" >
                                    <Checkbox
                                        // checked={this.isSelected(row.id)}
                                        color="primary"
                                        // onClick={e => {e.stopPropagation(); this.handleCheckbox(row.id)}}
                                    />
                                </TableCell>
                                <TableCell style={{width: '25%'}}>
                                    {row.name}
                                </TableCell>
                                <TableCell style={{width: '75%'}}>
                                    {row.des}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default withStyles(styles)(CategoryTable);