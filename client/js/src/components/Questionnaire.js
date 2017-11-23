import React, { Component }   from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { connect } from 'react-redux';
import Link from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';

import LoginPage from './LoginPage';

const loginStyle = {
    position: 'absolute',
    top: 0,
    right: 0
};

let loginFormStyle = {
    backgroundColor: 'rgba(255,255,255,1)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    padding: '0 10px 0 10px',
    position: 'absolute',
    right: 100,
    top: 10,
    zIndex: 2,
    display: 'none',
    opacity: 0,
    transition: 'opacity 1s ease-out'
};

const askBackgroundStyle = {
    fontSize: '180px',
    lineHeight: '180px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'rgba(232, 232, 232, 0.3)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transform: 'rotate(-90deg)',
    position: 'absolute',
    left: 0
};

const askStyle = {
    fontSize: '35px',
    fontFamily: 'Conv_Galano Grotesque DEMO Bold',
    background: 'linear-gradient(80deg, #EF4E7B,#A166AB)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
};

const fontStyle =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",' +
    'Helvetica,Arial,sans-serif,"Apple Color Emoji",' +
    '"Segoe UI Emoji","Segoe UI Symbol"';

class Questionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginShown: false
        };
    }

    updateInputNameValue(evt) {
        this.listData.name = evt.target.value;
    }
    updateInputJobValue(evt) {
        this.listData.job = evt.target.value;
    }
    updateInputIndustryValue(evt) {
        this.listData.industry = evt.target.value;
    }
    updateInputHobbieValue(evt) {
        this.listData.hobbie = evt.target.value;
    }

    updateDomainValue(domain){
        this.listData.domain = domain;
    }

    saveData() {
        this.props.onSaveQuestionnarie(this.listData);
    }

    showLoginPage() {
        if (this.state.loginShown) {
            loginFormStyle = Object.assign({}, loginFormStyle);
            loginFormStyle.display = 'none';
            loginFormStyle.opacity = 0;
        } else {
            loginFormStyle = Object.assign({}, loginFormStyle);
            loginFormStyle.display = 'block';
            loginFormStyle.opacity = 1;
        }

        this.setState({loginShown: !this.state.loginShown});
    }
    
    render() {
        //console.log(this.props.ownProps);
        this.listData = {};

        return (
            <div className="questionnaire">
                <FlatButton
                    className="login"
                    label="Login"
                    primary={true}
                    style={loginStyle}
                    labelStyle={{fontFamily: fontStyle, color: '#1098AD'}}
                    onClick={/*() =>
                            this.props.ownProps.router.push('/login')*/ this.showLoginPage.bind(this)}
                />
                <div style={loginFormStyle} className="loginPage">
                    <LoginPage />
                </div>
                <div style={askBackgroundStyle}>Ask</div>
                <AutoComplete style={{width:'80%', fontSize: '100px'}} className="question"
                                  hintText="Ask ..." dataSource={[]}
                                  hintStyle={askStyle}
                                  inputStyle={{fontFamily: fontStyle, fontSize: '20px'}}
                                  underlineFocusStyle={{borderBottom: '2px solid #1098AD'}}
                                  onUpdateInput={this.updateDomainValue.bind(this)}/>

                    <List className="list">
                        <ListItem primaryText="What is this data?"
                                  innerDivStyle={{fontFamily: fontStyle}}
                                  primaryTogglesNestedList={false}
                                  disabled={true}
                                  nestedItems={[
                                  <ListItem className="list-item" key={1} primaryText="" disabled={true}                              
                                    onChange={this.updateInputNameValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your Name"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={{color: '#1098AD'}}
                                     underlineFocusStyle={{borderBottom: '2px solid #1098AD'}}
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                   <ListItem className="list-item" key={2} primaryText="" disabled={true}
                                    onChange={this.updateInputJobValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="What do you do?"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={{color: '#1098AD'}}
                                     underlineFocusStyle={{borderBottom: '2px solid #1098AD'}}
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={3} primaryText="" disabled={true}
                                     onChange={this.updateInputIndustryValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your Industry"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={{color: '#1098AD'}}
                                     underlineFocusStyle={{borderBottom: '2px solid #1098AD'}}
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={4} primaryText="" disabled={true}
                                     onChange={this.updateInputHobbieValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your hobbies"
                                     floatingLabelStyle={{fontFamily: fontStyle}}
                                     floatingLabelFocusStyle={{color: '#1098AD'}}
                                     underlineFocusStyle={{borderBottom: '2px solid #1098AD'}}
                                     dataSource={[]}
                                   />
                                  </ListItem>
                            ]}
                        />

                    </List>
                <FlatButton labelStyle={{fontFamily: fontStyle, color: '#1098AD'}} className="next" label="NEXT" primary={true} onClick={() => {
                        this.saveData.bind(this)();
                        this.props.ownProps.router.push('/file-upload')                 
                    }} />
            </div>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        ownProps
    }),
    dispatch => ({
        onSaveQuestionnarie: (data) => {
            dispatch({ type: 'SAVE_QUESTIONS', payload: data });
        }
    })
)(Questionnaire);