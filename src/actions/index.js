/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import {SIGNED_IN, SET_GOALS} from '../constant'

/**
 *
 * @param email
 * @returns {{type, email: *}}
 */
export function logUser(email) {
    let action = {
        'type': SIGNED_IN,
        email
    };
    return action;
}
/**
 *
 * @param goals
 * @returns {{type, goals: *}}
 */
export function setGoals(goals) {
    let action = {
        'type': SET_GOALS,
        goals
    };
    return action;
}