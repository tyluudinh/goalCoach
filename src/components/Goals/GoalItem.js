/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import {completeGoalRef, goalRef} from '../../firebase'


class GoalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        }
    }
    completeGoal()
    {
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        completeGoalRef.push({email, title});
        goalRef.child(serverKey).remove();
    }
    render(){
        const {email, title} = this.props.goal;
        return(
            <div style={{margin: '5px'}}>
                <strong>{title} </strong>
                <span>
                    Submitted by <em>{email} </em>
                </span>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={() => this.completeGoal()}
                >
                    Complete
                </button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {user} = state;
    return{
        user
    }
}
export default connect(mapStateToProps, null)(GoalItem);