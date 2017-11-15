import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { shuffle } from 'lodash';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px'
};

const factStyle = {
    flex: 1,
    padding: '15px',
    margin: '10px'
};

const progressStyle = {
    margin: '0',
    width: '100%',
    position: 'absolute',
    top: 0,
};

const pageTytleStyle = {
    fontFamily: "PT Sans Narrow"
};

class Facts extends Component {
    constructor(props) {
        super(props);
    }

    getFacts() {
        let facts = this.props.facts;

        facts = shuffle(facts);

        return facts.slice(0, 3);
    }

    render() {

        let facts = this.getFacts().map(fact => <Paper zDepth={1}
                                                       rounded={false}
                                                       key={fact.id}
                                                       style={factStyle}>
            <div>{fact.fact}</div>
        </Paper>);

        if (this.props.file.progress >= 100) {
            progressStyle.opacity = 0;
        } else {
            progressStyle.opacity = 1;
        }

        return (
            <div className="facts">
                <LinearProgress className="upload-progress" mode="determinate"
                                value={this.props.file.progress}
                                style={progressStyle}/>
                <div className='page-title' style={pageTytleStyle}>Fun facts
                    about you, your industry, your
                    hobbies
                </div>
                <div style={style}>{facts}</div>
                <FlatButton className="next" label="NEXT" primary={true}
                            onClick={() =>
                    this.props.ownProps.router.push('/answer')}/>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            onClick={() =>
                    this.props.ownProps.router.push('/file-upload')}/>
            </div>
        )
    }
}

export default connect((state, ownProps) => ({
    facts: state.facts,
    userData: state.questionnaire,
    file: state.file,
    ownProps
}))(Facts);