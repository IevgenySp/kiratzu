/**
 * Created by isp on 11/9/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChartRenderer from './ChartRenderer';
import Paper from 'material-ui/Paper';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px'
};

const circleStyle = {
    background: 'rgb(211, 211, 211)',
    height: 30,
    width: 30,
    margin: '0 10px 0 0',
    textAlign: 'center',
    display: 'inline-block',
    lineHeight: '30px',
    color: '#fff'
};

class Turn extends Component {
    render() {

        return (
            <div className='turn' style={style} key={this.props.turn.id}>
                    <Paper style={circleStyle} zDepth={0} circle={true}>
                        <div id='number'>{this.props.turn.id}</div>
                    </Paper>
                    <div style={{flex:1, width:'calc(100% - 300px)'}} id='text'>{this.props.turn.text}</div>
                    <ChartRenderer chart={this.props.turn.data}/>
            </div>
        );
    }
}

ChartRenderer.propTypes = {
    turn: PropTypes.object
};

ChartRenderer.defaultProps = {
    turn: {}
};

export default Turn;