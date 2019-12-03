import axios from 'axios';
import {
  ADD_FOOD_SUCCESS,
  ADD_FOOD_FAILURE,
  GET_FOODS_SUCCESS,
  GET_FOODS_FAILURE,
  MARK_GONE_SUCCESS,
  MARK_GONE_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_SUCCESS
} from './types';



export const addFood = newFood => {
  return dispatch => {
    console.log("dispatched")
    axios
      .post('/api/post-new-food', 
        { foodname: newFood.foodname,
          location: newFood.location,
          image: newFood.image,
          description: newFood.description,
        })
      //data is the created newFoodPost
      .then(({ data }) => {
        dispatch({ type: ADD_FOOD_SUCCESS, newFoodItem: data });
      })
      .catch(error => {
        dispatch({ type: ADD_FOOD_FAILURE, error });
      });
  };
};

export const getFood = () => {
  return dispatch => {
    axios
      .get('/api/foods')
      //data is Query object returned from get('/foods') route using res.json(result)
      .then(({ data }) => {
        dispatch({ type: GET_FOODS_SUCCESS, foodArray: data });
      })
      .catch(error => {
        dispatch({ type: GET_FOODS_FAILURE, error });
      });
  };
};

export const markFoodGone = foodId => {
  return dispatch => {
    axios
      .post('/api/mark-food-as-gone', { foodId })
      //data is all FoodPosts in db
      .then(({ data }) => {
        dispatch({ type: MARK_GONE_SUCCESS, updatedFoodPosts: data });
      })
      .catch(error => {
        dispatch({ type: MARK_GONE_FAILURE, error });
      });
  };
};

export const addLoginUser = loginInfo => {
  return dispatch => {
    axios
      .post('/account/login', { username: loginInfo.username, password: loginInfo.password})
      //data is the user object found in db
      .then(({ data }) => {
        dispatch({ type: LOGIN_SUCCESS, userInfo: data });
      })
      .catch(error => {
        dispatch({ type: LOGIN_FAILURE, error });
      });
  };
};

export const addSignupUser = signupInfo => {
  return dispatch => {
    axios
      .post('/account/signup', { username: signupInfo.username, password: signupInfo.password})
      //data is the newly created user object
      .then(({ data }) => {
        dispatch({ type: SIGNUP_SUCCESS, signupInfo: data });
      })
      .catch(error => {
        dispatch({ type: SIGNUP_FAILURE, error });
      });
  };
};

export const logOut = () => {
  return dispatch => {
    axios
      .get('/account/logout')
      .then( () => {
        dispatch({ type: LOGOUT_SUCCESS});
      })
  };
};

