/* eslint-disable */
import axios from 'axios';
import { GET_LEVELS } from './actionConstants';

/*********** ACTION CREATORS ***********/
const getLevels = (levels) => ({ type: GET_LEVELS, levels });

/*********** THUNKS ***********/
export const getLevelsFromServer = () => {
    return (dispatch) => {
      return axios.get('/api/levels')
        .then(res => res.data)
        .then(levels => dispatch(getLevels(levels)))
        .catch(err => console.error(err))
    };
  };
  
/*********** REDUCER ***********/

const levelsReducer = (state = [], action) => {
    switch (action.type) {
      case GET_LEVELS:
        state = action.levels;
        break;
    };
    return state;
    };
    
    export default levelsReducer;
