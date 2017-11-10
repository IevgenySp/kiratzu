import React, {Component} from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Application extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div className="application">
                    <Paper zDepth={2} rounded={false}>
                        {this.props.children}
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect((state) => ({
    facts: state.facts,
    file: state.file,
    questionnarie: state.questionnarie
}))(Application);
