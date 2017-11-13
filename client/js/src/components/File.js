import React, {Component }   from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/FlatButton';

const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    margin: '0 10px 0 10px'
};

const pageTytleStyle = {
    fontFamily:"PT Sans Narrow"
};


class File extends Component {
    render() {

        return (
            <div>
                <div className='page-title' style={pageTytleStyle}>Start asking for free</div>
                <div style={style}>
                    <FlatButton
                        containerElement='label' // <-- Just add me!
                        label='Upload'>
                        <input type="file"/>
                    </FlatButton>
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