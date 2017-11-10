import React , { Component}                   from 'react';
import { Route, Router, Switch, Redirect }       from 'react-router';

import Application             from './src/components/application.jsx';
import Questionnarie           from './src/components/questionnaire.jsx';
import File                    from './src/components/file.jsx';

export default ()=> (
    <div>
        <Application>
            <Switch>
                <Route exact path="/" component={Questionnarie}/>
                <Route path="/questionnaire" component={Questionnarie}/>
                <Route path="/file" component={File}/>
            </Switch>
        </Application>
    </div>
)
