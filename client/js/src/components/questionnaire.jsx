import React, { Component }   from 'react';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import AutoComplete from 'material-ui/AutoComplete';
import FlatButton from 'material-ui/FlatButton';

class Questionnaire extends Component {
    render() {
        return (
            <div className="fullexpand">
                <div className="questionnaire">
                    <AutoComplete style={{width:'80%'}} className="question"
                                  hintText="Ask ..." dataSource={[]}/>
                    <List className="list">
                        <ListItem primaryText="What is this data?"
                                  primaryTogglesNestedList={false}
                                  disabled={true}
                                  nestedItems={[
                                  <ListItem className="list-item" key={1} primaryText="" disabled={true}>
                                  <AutoComplete
                                     hintText="Your Name"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                   <ListItem className="list-item" key={2} primaryText="" disabled={true}>
                                  <AutoComplete
                                     hintText="What do you do?"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={3} primaryText="" disabled={true}>
                                  <AutoComplete
                                     hintText="Your Indastry"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                                    <ListItem className="list-item" key={4} primaryText="" disabled={true}>
                                  <AutoComplete
                                     hintText="Your hobbies"
                                     dataSource={[]}
                                   />
                                  </ListItem>,
                            ]}
                        />

                    </List>
                </div>
                <FlatButton className="next" label="NEXT" primary={true} />
            </div>
        )
    }
}

export default Questionnaire;