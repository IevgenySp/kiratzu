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

        this.props.socket.once('message', function(response) {
            let data = JSON.parse(response.data);
            if (data.message === 'ADD_FACTS') {
                data.facts.forEach((f)=>this.props.onAddFact(f));
            }
        }.bind(this), 'facts');
    }

    render() {

        const facts = this.props.facts.slice(0, 3).map(fact =>
            <Paper zDepth={1} rounded={false} key={fact.id} style={factStyle}>
                <div>{fact.fact}</div>
            </Paper>);

        progressStyle.opacity = this.props.file.progress >= 100 ? 0 : 1;

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
        socket: state.socket,
        ownProps
    }),
    dispatch => ({
        onAddFact: (data) => {
            dispatch({type: 'ADD_FACT', payload: data});
        }
    }))(Facts);