/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */

import React, {Component} from 'react'
import {firebaseApp} from '../firebase'
import {connect} from 'react-redux'
import AddGoal from "./Goals/AddGoal";
import GoalList from './Goals/GoalList'
class App extends Component{
    signOut(){
        firebaseApp.auth().signOut();
    }
    render(){
        return (
            <div className="container">
                <h3>Goal Coach</h3>
                <AddGoal/>
                <h4>Goals</h4>
                <hr/>
                <GoalList/>
                <button
                    className="btn btn-danger"
                    onClick={() => {this.signOut()}}
                >
                    Sign Out
                </button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps, null) (App);