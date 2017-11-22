import React, { Component }   from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import { connect } from 'react-redux';
import Link from 'react-router';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';

const loginStyle = {
    position: 'absolute',
    top: 0,
    right: 0
};

class Questionnaire extends Component {
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
                    onClick={() =>
                            this.props.ownProps.router.push('/login')}
                />
                    <AutoComplete style={{width:'80%'}} className="question"
                                  hintText="Ask ..." dataSource={[]}
                                  onUpdateInput={this.updateDomainValue.bind(this)}/>

                    <List className="list">
                        <ListItem primaryText="What is this data?"
                                  primaryTogglesNestedList={false}
                                  disabled={true}
                                  nestedItems={[
                                  <ListItem className="list-item" key={1} primaryText="" disabled={true}
                                    onChange={this.updateInputNameValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your Name"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                   <ListItem className="list-item" key={2} primaryText="" disabled={true}
                                    onChange={this.updateInputJobValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="What do you do?"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={3} primaryText="" disabled={true}
                                     onChange={this.updateInputIndustryValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your Industry"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={4} primaryText="" disabled={true}
                                     onChange={this.updateInputHobbieValue.bind(this)}>
                                  <AutoComplete
                                     floatingLabelText="Your hobbies"
                                     dataSource={[]}
                                   />
                                  </ListItem>
                            ]}
                        />

                    </List>
                <FlatButton className="next" label="NEXT" primary={true} onClick={() => {
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