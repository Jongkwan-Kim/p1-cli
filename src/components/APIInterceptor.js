import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { get, has, isUndefined, isEmpty, isEqual } from 'lodash';


class APIInterceptor extends React.Component {

    doLogout() {

    }

    componentDidMount() {
        this.requestInterceptor = axios.interceptors.request.use(
            req => {
                if (!isUndefined(this.props.token) && !isEmpty(this.props.token)) {
                    req.headers.Authorization = this.props.token;
                }
                return req;
            },
            error => {
                return Promise.reject(error);
            }
        );
        this.responseInterceptor = axios.interceptors.response.use(
            res => {
                console.log(res)
                return res;
            },
            error => {
                console.log(error)
            }
        );
    }

    componentWillUnmount() {
        axios.interceptors.request.eject(this.requestInterceptor);
        axios.interceptors.response.eject(this.responseInterceptor);
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    // startBlockUI: () => {
    //     dispatch(baseActions.startBlockUI());
    // },
    // endBlockUI: () => {
    //     dispatch(baseActions.endBlockUI());
    // },
    // openNoticeModal: (noticeModalInfo) => {
    //     dispatch(baseActions.openNoticeModal(noticeModalInfo));
    // },
    // logout: () => {
    //     dispatch(authActions.logout());
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(APIInterceptor);