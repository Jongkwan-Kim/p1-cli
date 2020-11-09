import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { connect } from 'react-redux';
import { createCategory, searchCategory } from '../../../actions/setting';
import {isEmpty} from 'lodash';
import Table from './Table';
const styles = theme => ({
    titleDiv: {
        padding: '10px',
        fontSize: '1.5rem',
        fontWeight: 'bold'
    },
    subTitleDiv: {
        padding: '10px',
        fontSize: '1.3rem',
        fontWeight: '500'
    },
    fieldWrap: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
    },
    nameInputDiv: {
        padding: '10px',
        width: '20%'
    },
    desInputDiv: {
        padding: '10px',
        width: '60%'
    },
    btnDiv: {
        width: '20%',
        padding: '10px',
    }
});

const TabMBook = ({ classes, searchCategory, createCategory, categoryList }) => {

    const [values, setValues] = useState({ name: '', des: '' });
    const [categorise, setCategories] = useState([]);

    const searchCategoryList = async () => {
        try {
            await searchCategory({});
        } catch(error) {
            console.log(error);
        }
    };

    const saveCategory = async () => {
        let params = {
            name: values.name,
            des: values.des
        };
        try {
            await createCategory(params);
        } catch(error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        let { name, value } = e.target;
        setValues({...values, [name]: value });
    };

    const isValid = () => {
        return !isEmpty(values.name);
    };

    const handleSave = () => {
        if (isValid()) {
            saveCategory();
        }
    };

    useEffect(() => {
        searchCategory();
    }, []);

    useEffect(() => {
        setCategories(categoryList)
    }, [categoryList]);

    return (
        <Grid container>
            <Grid item xs={12} className={classes.titleDiv}>
                M Book
            </Grid>
            <Grid item xs={12}>
                <Grid container alignItems={'center'}>
                    <Grid xs={12} className={classes.subTitleDiv}>
                        Main Category
                    </Grid>
                    <Grid xs={12}>
                        <div className={classes.fieldWrap}>
                            <div className={classes.nameInputDiv}>
                                <Input
                                    name='name'
                                    value={values.name}
                                    handler={handleChange}
                                    label={'Name'}
                                />
                            </div>
                            <div className={classes.desInputDiv}>
                                <Input
                                    name='des'
                                    value={values.des}
                                    handler={handleChange}
                                    label={'Description'}
                                />
                            </div>
                            <div className={classes.btnDiv}>
                                <Button
                                    label={'ADD'}
                                    handler={handleSave}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={12} className={classes.subTitleDiv}>
                        List
                    </Grid>
                    <Grid xs={12}>
                        <Table
                            type={'category'}
                            dataList={categorise}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export const mapStateToProps = state => ({
    categoryList: state.setting.categoryList
});
export const mapDispatchToProps = dispatch => ({
    searchCategory: async (params) => {
        await dispatch(searchCategory(params));
    },
    createCategory: async (params) => {
        await dispatch(createCategory(params))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TabMBook));