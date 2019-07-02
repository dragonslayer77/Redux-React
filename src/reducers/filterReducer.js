import actionTypes from '../constants/action-types';

const filterReducer = (state = '', action) => {
    switch (action.type) {
    case actionTypes.SHOW_ALL: {
        return state;
    }
    case actionTypes.SHOW_ALIVE: {
        return 'SHOW_ALIVE';
    }
    case actionTypes.SHOW_DEAD: {
        return 'SHOW_DEAD';
    }
    default:
        return state;
    }
};

export default filterReducer;
