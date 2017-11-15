/**
 * Created by isp on 11/9/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChartRenderer extends Component {

    buildChart(container) {
        this.chart = echarts.init(container);
        this.chart.setOption(this.props.chart);
    }

    updateChart() {
        this.chart.clear();
        this.chart.setOption(this.props.chart);
    }

    componentDidMount() {
        this.buildChart(this.container);
    }

    componentDidUpdate() {
        this.updateChart(this.container);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.chart !== this.props.chart;
    }

    render() {
        if (!window.echarts)
            throw new Error('ECharts library is not defined');

        let style = {
            width: this.props.width !== undefined ?
                this.props.width + 'px' : 300 + 'px',
            height: this.props.height !== undefined ?
                this.props.height + 'px' : 200 + 'px'
        };

        return (
            <div style={style} ref={(element) => { this.container = element }}></div>
        );
    }
}

ChartRenderer.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chart: PropTypes.object
};

ChartRenderer.defaultProps = {
    width: 300,
    height: 200,
    chart: {}
};

export default ChartRenderer;