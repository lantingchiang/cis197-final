import React from 'react';
import { connect } from 'react-redux';

import { markFoodGone } from '../actions/actions';

class FoodItem extends React.Component {
  render() {
    return (
    <div id="food-item" style={{backgroundColor:"white", height:"auto", width:"50%", borderBlockStyle:"solid", borderBlockWidth: "10px", borderBlockColor:"black", position:"relative", left:"300px", padding:"30px", textAlign:"left", fontSize:"20px"}}>
        <p id="post-foodname">Food Name: {this.props.foodPostItem.foodname}</p>
        <p id="post-location">Location: {this.props.foodPostItem.location}</p>
        <p id="post-author">Posted By: {this.props.foodPostItem.postedby}</p>
        <p id="post-available">Still available?: {this.props.foodPostItem.available}</p>
        <img id="post-image" src={this.props.foodPostItem.image} height="100px" width="100px"/>
        <p id="post-description">Description: {this.props.foodPostItem.description}</p>
        <button id="mark-gone" onClick={() => this.props.markGone(this.props.foodPostItem._id)}>Mark as Gone</button>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    markGone: foodId => dispatch(markFoodGone(foodId))
  };
};

export default connect(null, mapDispatchToProps)(FoodItem);
