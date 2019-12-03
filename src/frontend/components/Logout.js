import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/actions';

class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding:"30px"}}>
          <button id='logout' onClick={() => this.props.logout()}>Logout</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logOut())
});

export default connect(null, mapDispatchToProps)(Logout);