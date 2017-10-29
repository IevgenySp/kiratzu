import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainLayout from '../components/MainLayout'
import * as MainActions from '../actions'

const Main = ({main, csvDropdown, textInput, actions}) => (
    <MainLayout main={main} csvDropdown={csvDropdown} textInput={textInput} actions={actions} />
);

Main.propTypes = {
    main: PropTypes.array.isRequired,
    csvDropdown: PropTypes.array.isRequired,
    textInput: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    main: state.main,
    csvDropdown: state.csvDropdown,
    textInput: state.textInput
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(MainActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)
