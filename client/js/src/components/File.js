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
        let _this = this;
        const file = this.fileInput.files[0];
        const value = this.fileInput.value;
        const fileName = value.split('\\').slice(-1);

        this.fileContainer.innerText = fileName;

        let request = new XMLHttpRequest();
        request.open("POST", '/upload-file', true);

        _this.props.onFileUpload({
            file: fileName,
            progress: 0
        });

        request.upload.onprogress = function(e) {
            _this.props.onFileUpload({
                file: fileName,
                progress: e.loaded / e.total * 100
            });
        };
        request.send(file);
        this.props.ownProps.router.push('/facts')
    }


    render() {

        let fileName;

        if (this.props.file.file) {
            fileName = this.props.file.file
        }

        return (
            <div>
                <div className='page-title' style={pageTytleStyle}>Start asking
                    for free
                </div>
                <div style={style}>
                    <div className="file-upload">
                        <div ref={(el)=>{this.fileContainer = el}}
                             className="file-name">
                            {fileName}
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
        file: state.file,
        ownProps
    }),
    dispatch => ({
        onFileUpload: (data) => {
            dispatch({type: 'FILE_UPLOAD', payload: data});
        }
    }))(File);