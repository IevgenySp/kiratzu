/**
 * Created by isp on 11/21/17.
 */

import React, { Component } from 'react';

import TimeIcon from 'material-ui/svg-icons/device/access-time';
import WomanIcon from 'material-ui/svg-icons/action/face';

const colors = ['#bccbde', '#c2dde6', '#e6e9f0', '#431c5d', '#e05915', '#cdd422'];

const textFormStyle = {
    display: 'flex',
    flexDirection: 'row',
    //borderBottom: '3px solid #bccbde'
};

const numericIconStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    padding: '5px 10px 0 0',
    //color: colors[Math.floor(Math.random() * colors.length)]
    color: colors[5],
    whiteSpace: 'nowrap'
};

const timeIconStyle = {
    width: '46px',
    height: '46px',
    color: colors[1],
    padding: '0 10px 0 0'
};

const womanIconStyle = {
    width: '46px',
    height: '46px',
    color: colors[0],
    padding: '0 10px 0 0'
};

const textStyle = {
    padding: '5px 0 0 0'
};

class LabeledText extends Component {

    getIcon(category) {
        let icon;
        
        switch(category) {
            case 'numeric':
                icon = <div style={numericIconStyle}
                            className="numericIcon">{this.props.mainText}</div>;
                break;
            case 'time':
                icon = <TimeIcon style={timeIconStyle} />;
                break;
            case 'woman':
                icon = <WomanIcon  style={womanIconStyle}/>

        }
        
        return icon;
    }
    
    render() {
        let icon = this.getIcon(this.props.category);

        return (
            <div style={textFormStyle}>
                <div className="factIcon">{icon}</div>
                <div style={textStyle} className="factText">{this.props.text}</div>
            </div>
        );
    }
}

LabeledText.propTypes = {
    category: React.PropTypes.string,
    mainText: React.PropTypes.string,
    text: React.PropTypes.string.isRequired
};

export default LabeledText;