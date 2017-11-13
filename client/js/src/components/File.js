import React, {Component }   from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import Application from './Application';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class File extends Component {
    render() {
        let style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            padding: '10px',
            margin: '0 10px 0 10px'
        };

        return (
            <Application>
                <div id='fileUploadTitle'>Start asking for free</div>
                <ReactCSSTransitionGroup
                    transitionName="answerSteps"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                    transitionLeave={true}
                    transitionLeaveTimeout={500}>
                    <div style={style}>
                        <FlatButton
                        containerElement='label' // <-- Just add me!
                        label='Upload'>
                            <input type="file" />
                        </FlatButton>
                    </div>
                </ReactCSSTransitionGroup>
                <FlatButton className="next" label="NEXT" primary={true} onClick={() =>
                    this.props.ownProps.router.push('/facts')} />
                <FlatButton className="prev" label="PREVIOUS" primary={true} onClick={() =>
                    this.props.ownProps.router.push('/')}/>
            </Application>
        )
    }
}

export default connect((state, ownProps) => ({
    ownProps
}))(File);