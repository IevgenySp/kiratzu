import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const style = {
    color: "rgba(0, 0, 0, 0.70)"
}

class Application extends Component {

    render() {

        return (
            <MuiThemeProvider>
                <ReactCSSTransitionGroup
                    transitionName="answerSteps"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className="application">
                        <Paper style={style} zDepth={2} rounded={false}>
                            {this.props.children}
                        </Paper>
                    </div>
                </ReactCSSTransitionGroup>
            </MuiThemeProvider>
        );
    }
}

export default Application;
