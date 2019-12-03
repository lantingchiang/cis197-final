import React from 'react';
import { connect } from 'react-redux';
import { addLoginUser } from '../actions/actions';

class Login extends React.Component {
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
        <p>This website allows you to post free food! Please log in or sign up to post :)</p>
        Username:
            <input id="login-username" type="text" name="username" value={this.state.username} 
                onChange={e => this.setState({ username: e.target.value })}/>
            <br/>
        Password: 
            <input id="login-password" type="text" name="password" value={this.state.password} 
                onChange={e => this.setState({ password: e.target.value })}/>
            <br/>
            <button id='login-sumbit' onClick={() => this.props.addLogin(this.state)}>Login</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    addLogin: loginInfo => dispatch(addLoginUser(loginInfo))
});

export default connect(null, mapDispatchToProps)(Login);