/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import {SIGNED_IN} from '../constant'

/**
 *
 * @type {{email: null}}
 */
let user = {
    email: null
};

/**
 *
 * @param state array or object
 * @param action
 * @returns {{email: null}}
 */
export default (state = user, action) => {
    switch (action.type){
        case SIGNED_IN:
            const {email} = action;
            user = {
                email
            };
            return user;
        default:
            return state;
    }
}