import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class CsvTextField extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (this.props.link) {
            fetch(this.props.link)
                .then(response => response.text())
                .then(data => {
                    if (this.props.value !== data) {
                        this.props.updateTextInputValue(data);
                    }
                })
                .catch(function() {

                });
        }
    }

    render() {
        const style = {
            width: '400px',
            fontSize: '14px'
        };

        return (
            <TextField
                hintText="Paste your copied data here..."
                multiLine={true}
                rows={8}
                rowsMax={8}
                value={this.props.value}
                style={style}
            />
        );
    }
};
