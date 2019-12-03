import {
  ADD_FOOD_SUCCESS,
  ADD_FOOD_FAILURE,
  GET_FOODS_SUCCESS,
  GET_FOODS_FAILURE,
  MARK_GONE_SUCCESS,
  MARK_GONE_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS
} from '../actions/types';


const defaultState = {
    foodItems: [],
    error: null,
    userInfo: null,
}

export default (state = defaultState, action) => {
//console.log(state.foodItems)
  let stateCopy = {...state};

  switch (action.type) {
    case LOGIN_SUCCESS:
        return {...state, userInfo: action.userInfo};
    case LOGIN_FAILURE:
        return {...state, error: action.error};
    case LOGOUT_SUCCESS:
        return {...state, userInfo: null};
    case GET_FOODS_SUCCESS:
    //action.food is Query object returned from get('/foods') route using res.json(result)
    //contains all foods in db
        stateCopy.foodItems = action.foodArray;
        return stateCopy;

    case ADD_FOOD_SUCCESS:
        stateCopy.foodItems.push(action.newFoodItem);
        return stateCopy;

    case MARK_GONE_SUCCESS:
        stateCopy.foodItems = action.updatedFoodPosts;
        return stateCopy;
    
    case GET_FOODS_FAILURE:
        return {...state, error: action.error}
    
    case ADD_FOOD_FAILURE:
        return {...state, error: action.error}
    
    case MARK_GONE_FAILURE:
        return {...state, error: action.error}
    
    default:
        return state
  }
};
