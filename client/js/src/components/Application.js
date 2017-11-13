import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Application extends Component {

    render() {
        let style = {
            width: '100%'
        };

        return (
            <MuiThemeProvider>
                <div className="application">
                    <Paper zDepth={2} rounded={false}>
                        <div style={style}>{this.props.children}</div>
                    </Paper>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Application;
