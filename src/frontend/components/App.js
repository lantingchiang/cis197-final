import React from 'react';

import { connect } from 'react-redux';

import { getFood } from '../actions/actions';

import FoodActions from './FoodActions';
import FoodContainer from './FoodContainer';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Fetch foods from api server and initialize redux store
    this.props.getFoodPosts();    
  }

  render() {
    //
    const user = this.props.user;
    if (user) {
      return (
        <div style={{backgroundColor: "#F1AA85", textAlign: "center"}}>
          {/**if this.props.error isn't empty put the error in h1 else nothing is in h1 */}
          {this.props.error ? <h1>{this.props.error}</h1> : null}
          <FoodActions />
          <FoodContainer />
          <Logout />
        </div>
      )
    } else {
      return (
        <div style={{backgroundColor: "#F1AA85", textAlign: "center"}}>
          <Login />
          <Signup />
        </div>

      )
    }
  }
}

const mapStateToProps = state => {
    return {
        foodItem: state.foodItems,
        errors: state.error,
        user: state.userInfo
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getFoodPosts: () => dispatch(getFood())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
