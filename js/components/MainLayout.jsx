import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Stepper, Step, StepLabel } from 'material-ui/Stepper';
import CsvDropDown from './CsvDropDown';
import CsvTextField from './CsvTextField';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    getStepContent(stepIndex) {
        const updateList = this.props.actions.updateCsvList;
        const updateActiveValue = this.props.actions.updateCsvActiveValue;
        const updateTextInputLink = this.props.actions.updateTextInputLink;
        const updateTextInputValue = this.props.actions.updateTextInputValue;
        const {initString, value, listItems} = this.props.csvDropdown;
        const {link, inputValue} = this.props.textInput;

        /*var upload = function() {
            var photo = document.getElementById("photo");
            var file = photo.files[0];

            console.log("File name: " + file.fileName);
            console.log("File size: " + file.fileSize);
            console.log("Binary content: " + file.getAsBinary());
            console.log("Text content: " + file.getAsText(""));

            var preview = document.getElementById("preview");
            preview.src = file.getAsDataURL();

            return false;
        };*/
        
        switch (stepIndex) {
            case 0:
                return <div className='first-screen'>
                    <div>
                        <section id='main'>
                            It all starts with your data...
                        </section>
                        <section id='sub-section'>
                            <p>Select your data (including header row/column) in Excel or OpenOffice and paste it in the text field on the right. You can also upload a CSV file from your computer. Learn more about how to upload your data.</p>

                            If you just want to try Datawrapper, here‘s a list of some example datasets you can use:
                        </section>
                        <CsvDropDown
                            updateList={updateList}
                            updateActiveValue={updateActiveValue}
                            updateTextInputLink={updateTextInputLink}
                            updateTextInputValue={updateTextInputValue}
                            initString={initString}
                            value={value}
                            listItems={listItems}>
                        </CsvDropDown>
                    </div>
                    <div>
                        <CsvTextField
                            link={link}
                            value={inputValue}
                            updateTextInputValue={updateTextInputValue}
                        />
                        <RaisedButton
                            containerElement='label' // <-- Just add me!
                            label='Csv upload'>
                            <form enctype="multipart/form-data" action="/file_upload" method="post">
                                <input type="file" name="fileName" />
                                <input type='submit' value='Upload!' />
                            </form>
                        </RaisedButton>
                    </div>
                </div>;
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const {finished, stepIndex} = this.props.main;
        const contentStyle = {margin: '0 16px'};
        
        return (
            <MuiThemeProvider>
            <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Upload Data</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Check & Describe</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Visualize</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Publish & Embed</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished ? (
                        <p>
                            <a
                                href="#"
                                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
                            >
                                Click here
                            </a> to reset the example.
                        </p>
                    ) : (
                        <div>
                            <p>{this.getStepContent(stepIndex)}</p>
                            <div style={{marginTop: 12}}>
                                <FlatButton
                                    label="Back"
                                    disabled={stepIndex === 0}
                                    onClick={this.props.actions.handlePrevious}
                                    style={{marginRight: 0}}
                                />
                                <RaisedButton
                                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                                    primary={true}
                                    onClick={this.props.actions.handleNext}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </MuiThemeProvider>
        );
    }
}