/**
 * Created by isp on 11/27/17.
 */

import React, {Component }   from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';

import ChartRenderer from './ChartRenderer';
import LayoutManager from './LayoutManager';

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

const questionsStyle = {
    paddingBottom: '40px',
    paddingTop: '60px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
};

const blockStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px',
    alignItems: 'center',
    textAlign: 'center'
};

const separationLine = {
    width: '2px',
    height: '490px',
    background: 'linear-gradient(270deg, #5073B8,#1098AD)',
    position: 'absolute',
    opacity: 0.2,
    margin: '10px 0 0 0'
};

class SuggestedQuestions extends Component {

    render() {

        const questions = this.props.questions.map((obj, id) => {
            return (
                <div key={obj.id} style={blockStyle}>
                    <div style={{fontFamily: fontStyle, padding: '0 0 10px 0'}}>{obj.question}</div>
                    <ChartRenderer chart={this.props.charts[id].data}/>
                </div>
            );
        });

        const layoutManager =
            <LayoutManager layout={[2,2]} orientation="rows" items={questions} />;

        return (
            <div className="suggestedQuestions" style={questionsStyle}>
                <div className="page-title">Questions you might want to ask</div>
                {layoutManager}
                <div style={separationLine}></div>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                            onClick={() =>
                    this.props.ownProps.router.push('/answer-steps')}/>
            </div>
        );
    }
}

export default connect((state, ownProps) => ({
        questions: state.suggestedQuestions,
        charts: state.turnsList,
        ownProps
    }),
    dispatch => ({
        onAddQuestion: (data) => {
            dispatch({type: 'ADD_QUESTION', payload: data});
        }
    }))(SuggestedQuestions);