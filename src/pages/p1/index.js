import React from 'react';
import { Route, Switch } from "react-router-dom";
import CONSTANT from '../../constant';

import P1Template from '../../components/p1/common/Template'
import DashBoardPage from './DashBoardPage';
import MBookPage from './MBookPage';
import UserPage from './UserPage';
import SettingPage from './SettingPage';

class P1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <P1Template>
                <Switch>
                    <Route exact path={`${CONSTANT.URL.DASH_BOARD}`}
                           component={DashBoardPage}/>
                    <Route exact path={`${CONSTANT.URL.M_BOOK}`}
                           component={MBookPage}/>
                    <Route exact path={`${CONSTANT.URL.USER}`}
                           component={UserPage}/>
                    <Route exact path={`${CONSTANT.URL.SETTING}`}
                           component={SettingPage}/>
                </Switch>
            </P1Template>
        )
    }
}

export default P1;