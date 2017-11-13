/**
 * Created by isp on 11/10/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlatButton from 'material-ui/FlatButton';

import Application from './Application';
import Turn from './Turn';

class AnswerSteps extends Component {
    render() {
        let turns = this.props.turns.map(turn => {
            return <div key={turn.id}><Turn turn={turn} /></div>
        });

        return (
            <Application>
                <div id='answerStepsTitle'>The answer turn by turn:</div>
                <ReactCSSTransitionGroup
                    transitionName="answerSteps"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                {turns}
                </ReactCSSTransitionGroup>
                <FlatButton className="answerStepsPDF" label="Export to PDF" primary={true} />
                <FlatButton className="answerStepsPrevious" label="PREVIOUS" primary={true} onClick={() =>
                    this.props.ownProps.router.push('/facts')}/>
            </Application>
        );
    }
}

export default connect((state, ownProps) => ({
    turns: state.turnsList,
    ownProps
}))(AnswerSteps);