import React from 'react';
import { connect } from 'react-redux';
import { addFood } from '../actions/actions';

class FoodActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodname: '', 
      location: '', 
      postedby: '',
      available: true,
      image: '',
      description: '',
      foodId: ''
    };
  }

  render() {
    return (
      <div id="submit-new-food" style={{padding:"30px"}}>
        Food Name:
            <input id="form-foodname" type="text" name="foodname" value={this.state.foodname} 
                onChange={e => this.setState({ foodname: e.target.value })}/>
            <br/>
        Location: 
            <input id="form-location" type="text" name="location" value={this.state.location} 
                onChange={e => this.setState({ location: e.target.value })}/>
            <br/>
        Image: 
            <input id="form-image" type="url" name="image" value={this.state.image} 
                onChange={e => this.setState({ image: e.target.value })}/>
            <br/>
        Description:
            <input id="form-descript" type="text" name="description" value={this.state.description} 
                onChange={e => this.setState({ description: e.target.value })}/>
            <br/>
            {/**this.state is object containing all fields required for new food item; pass in to addFoodItem */}
            <button id='form-sumbit' onClick={() => this.props.addFoodItem(this.state)}>Post Food!</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFoodItem: foodObject => dispatch(addFood(foodObject))
  };
};

export default connect(null, mapDispatchToProps)(FoodActions);
