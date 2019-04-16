import { GET_NEWS } from '../actions';

let initialState: any = [];

export default (state = initialState, action: any) => {
    switch(action.type) {
        case GET_NEWS:
            return [...state, action.payload];
        default:
            return state;
    }
}