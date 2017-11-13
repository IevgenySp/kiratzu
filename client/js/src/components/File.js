import React, {Component }   from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';
import AutoComplete from 'material-ui/AutoComplete';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px'
};

const pageTytleStyle = {
    fontFamily: "PT Sans Narrow"
};

class File extends Component {
    chooseFile() {
        this.fileInput.click();
    }

    setFile(el) {
        this.fileContainer.innerText = this.fileInput.value.split('\\').slice(-1);
    }

    render() {

        return (
            <div>
                <div className='page-title' style={pageTytleStyle}>Start asking
                    for free
                </div>
                <div style={style}>
                    <div className="file-upload">
                        <div ref={(el)=>{this.fileContainer = el}}
                             className="file-name">

                        </div>
                        <FlatButton onClick={this.chooseFile.bind(this)}
                                    style={{
                                            oveflow:"initial",
                                            minWidth:"auto"
                                        }}
                                    containerElement='label' // <-- Just add me!
                                    label='Choose File'>
                        </FlatButton>
                        <input ref={(el)=>{this.fileInput = el}}
                               onChange={this.setFile.bind(this)}
                               style={{display:"none"}} type="file"/>
                    </div>

                </div>
                <FlatButton className="next" label="NEXT" primary={true}
                            onClick={() =>
                    this.props.ownProps.router.push('/facts')}/>
                <FlatButton className="prev" label="PREVIOUS" primary={true}
                            onClick={() =>
                    this.props.ownProps.router.push('/')}/>
            </div>
        )
    }
}

export default connect((state, ownProps) => ({
    ownProps
}))(File);