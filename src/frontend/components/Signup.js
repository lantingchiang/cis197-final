import React from 'react';
import { connect } from 'react-redux';
import { addSignupUser } from '../actions/actions';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div style={{padding:"30px"}}>
        Username:
            <input id="signup-username" type="text" name="username" value={this.state.username} 
                onChange={e => this.setState({ username: e.target.value })}/>
            <br/>
        Password: 
            <input id="signup-password" type="text" name="password" value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value })}/>
            <br/>
            <button id='signup-sumbit' onClick={() => this.props.addSignup(this.state)}>Signup!</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSignup: signupInfo => dispatch(addSignupUser(signupInfo))
  };
};

export default connect(null, mapDispatchToProps)(Signup);