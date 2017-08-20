/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import {SET_GOALS} from '../constant'


/**
 *
 * @param state array or object
 * @param action
 * @returns {*}
 */
export default (state = [], action) => {
    switch (action.type){
        case SET_GOALS:
            let {goals} = action;
            return goals;
        default:
            return state;
    }
}