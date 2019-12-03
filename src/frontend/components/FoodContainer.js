import React from 'react';
import { connect } from 'react-redux';

import FoodItem from './FoodItem';

class FoodContainer extends React.Component {
  render() {
    return (
      <div id="food-container">
        {/**this.props.foodPostItems is state object containing field foodItems that is array of foodposts */}
        {console.log(this.props.foodPostItems.result)}
        {this.props.foodPostItems.result.map(foodPost => (
          <FoodItem foodPostItem={foodPost} />
        ))}
      </div>
    );
  }
}

//state is the global state (object containing array of all foodPosts from db)
const mapStateToProps = state => {
  return {
    foodPostItems: state.foodItems
  };
};

export default connect(mapStateToProps)(FoodContainer);
