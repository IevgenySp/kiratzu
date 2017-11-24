/**
 * Created by isp on 11/21/17.
 */

import React, { Component } from 'react';

const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
};

const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
};

class LayoutManager extends Component {

    layoutSchema() {
        const colls = this.props.layout[0];
        const rows = this.props.layout[1];
        const orientation = this.props.orientation;
        const items = this.props.items;
        let layout = [];
        let itemsCount = 0;

        //if (orientation === 'rows') {
            for (let i = 0; i < rows; i++) {
                let row = [];

                for (let j = 0; j < colls; j++) {
                    if (!items[itemsCount]) {
                        if (row.length > 0) {
                            layout.push(row);
                        }

                        return layout;
                    }

                    row.push(items[itemsCount]);

                    itemsCount++;
                }

                layout.push(row);
            }
        //}

        return layout;
    }

    render() {
        //console.log(this.layoutSchema());

        let sectionDirection =
            this.props.orientation === 'rows' ? rowStyle : columnStyle;
        let mainDirection =
            this.props.orientation === 'rows' ? columnStyle : rowStyle;

        let items = this.layoutSchema().map((arr, index) => {
            return (<div key={index} style={sectionDirection}>{arr}</div>);
        });



        return (
            <div style={mainDirection}>{items}
            </div>
        );
    }
}

LayoutManager.propTypes = {
    layout: React.PropTypes.array.isRequired,
    orientation: React.PropTypes.string,
    items: React.PropTypes.array
};

export default LayoutManager;