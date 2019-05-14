import initialState from './initialState';
import moment from 'moment';

import {UPDATE_TIME} from '../actions/actionTypes';

// export default function stuff(state = initialState.clockTime, action) {
//     let newState;
//     switch (action.type) {
//         case GET_TIME:
//             newState = action.stuff;
//             console.log('GET_TIME Action')
//             return newState;

//         default:
//             return state;
//   }
// }

const clockApp = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TIME:
            return Object.assign({}, state, { currentTime: moment(state.currentTime).add(1, 'seconds') })
        default:
            return state;
    }
}

export default clockApp;
