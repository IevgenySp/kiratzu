import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import LinearProgress from 'material-ui/LinearProgress';
import Application from './Application';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { shuffle } from 'lodash';

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
        let style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '10px',
            margin: '0 10px 0 10px'
        };

        let factStyle = {
            flex: 1,
            padding: '5px',
            margin: '10px'
        };

        let progressStyle = {
            margin: '0 10px 0 10px',
            width: 'auto'
        };

        let facts = this.getFacts().map(fact => {
            return <Paper zDepth={1} rounded={false} key={fact.id} style={factStyle}><div>{fact.fact}</div></Paper>;
        });

        return (
            <Application>
                <LinearProgress mode="determinate" value={this.state.completed} style={progressStyle} />
                <div id='factsTitle'>Fun facts about you, your industry, your hobbies</div>
                <ReactCSSTransitionGroup
                    transitionName="answerSteps"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                    transitionLeave={true}
                    transitionLeaveTimeout={500}>
                    <div style={style}>{facts}</div>
                </ReactCSSTransitionGroup>
                <FlatButton className="factsNext" label="NEXT" primary={true} onClick={() =>
                    this.props.ownProps.router.push('/answer-steps')} />
                <FlatButton className="factsPrevious" label="PREVIOUS" primary={true} onClick={() => 
                    this.props.ownProps.router.push('/file-upload')}/>
            </Application>
        )
    }
}

export default connect((state, ownProps) => ({
    facts: state.facts,
    userData: state.questionnaire,
    ownProps
}))(Facts);