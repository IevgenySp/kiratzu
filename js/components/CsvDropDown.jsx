import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class CsvDropDown extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/v1/filesdata')
            .then(response => response.json())
            .then(data => {
                this.props.updateList(data);
            })
            .catch(function() {

            });
    }

    handleChange(event, index, value) {
        this.updateActiveValue(value);
        
        const child = this.children[1][value - 1];

        if (child) {
            this.updateTextInputLink(child.props.link);
        } else {
            this.updateTextInputLink('');
            this.updateTextInputValue('');
        }
    }

    render() {
        const menuItems = this.props.listItems.map((obj, i) => {
            return <MenuItem value={i + 1} primaryText={obj.name} link={obj.path} />
        });

        return (
            <DropDownMenu value={this.props.value} onChange={this.handleChange}
                          updateActiveValue={this.props.updateActiveValue}
                          updateTextInputLink={this.props.updateTextInputLink}
                          updateTextInputValue={this.props.updateTextInputValue}>
                <MenuItem value={0} primaryText={this.props.initString} />
                {menuItems}
            </DropDownMenu>
        );
    }
};
