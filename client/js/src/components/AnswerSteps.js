/**
 * Created by isp on 11/10/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlatButton from 'material-ui/FlatButton';

import Turn from './Turn';

const pageTytleStyle = {
    fontFamily:"PT Sans Narrow"
};

class AnswerSteps extends Component {
    render() {
        const turns = this.props.turns.map(turn => <div key={turn.id}><Turn turn={turn}/></div>);

        return (
            <div className="charts">
                <div className='page-title' style={pageTytleStyle}>The answer turn by turn:</div>
                {turns}
                <FlatButton className="export-pdf" label="Export to PDF"
                            primary={true}/>
                <FlatButton className="next" label="NEXT" primary={true}
                            onClick={() => false}/>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            onClick={() =>
                    this.props.ownProps.router.push('/facts')}/>
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
    turns: state.turnsList,
    ownProps
}))(AnswerSteps);