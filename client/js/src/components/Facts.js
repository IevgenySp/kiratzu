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

        this.state = {
            completed: 0,
        };
    }

    getFacts() {
        let facts = this.props.facts;

        facts = shuffle(facts);

        return facts.slice(0, 3);
    }

    componentDidMount() {
        //let intervalId = setInterval(this.forceUpdate.bind(this), 4000);

        this.timer = setTimeout(() => this.progress(5), 1000);

        //this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        //clearInterval(this.state.intervalId);
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }

    render() {

        let facts = this.getFacts().map(fact => <Paper zDepth={1}
                                                       rounded={false}
                                                       key={fact.id}
                                                       style={factStyle}>
            <div>{fact.fact}</div>
        </Paper>);

        return (
            <div className="facts">
                <LinearProgress className="upload-progress" mode="determinate"
                                value={this.state.completed}
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
    ownProps
}))(Facts);