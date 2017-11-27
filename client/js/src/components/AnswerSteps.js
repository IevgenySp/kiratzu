/**
 * Created by isp on 11/10/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FlatButton from 'material-ui/FlatButton';

import Turn from './Turn';

/*const pageTitleStyle = {
    fontFamily:"PT Sans Narrow"
};*/

const pageTitleStyle = {
    fontSize: '25px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'linear-gradient(80deg, #EF4E7B,#A166AB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class AnswerSteps extends Component {
    render() {
        const layouts = [[1,4], [1,4], [1,3], [2,2]]; //Items layouts for layout amager
        const turns = this.props.turns.map((turn, index) =>
            <div key={turn.id}><Turn turn={turn} layout={layouts[index]}/></div>);

        return (
            <div className="charts">
                <div className='page-title' style={pageTitleStyle}>The answer turn by turn:</div>
                {turns}
                <FlatButton className="export-pdf" label="Export to PDF"
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            primary={true}/>
                <FlatButton className="next" label="NEXT" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() => false}/>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/answer')}/>
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
    turns: state.turnsList,
    ownProps
}))(AnswerSteps);