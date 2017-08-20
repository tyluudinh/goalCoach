/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import * as firebase from 'firebase'

/**
 *
 * @type {{apiKey: string, authDomain: string, databaseURL: string, projectId: string, storageBucket: string, messagingSenderId: string}}
 */
const config = {
    apiKey: "AIzaSyAoCvjRutZyzbYNErGfpjcAuMvtIvxccr8",
    authDomain: "goalcoach-8e074.firebaseapp.com",
    databaseURL: "https://goalcoach-8e074.firebaseio.com",
    projectId: "goalcoach-8e074",
    storageBucket: "goalcoach-8e074.appspot.com",
    messagingSenderId: "630244497464"
};
export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoal');

