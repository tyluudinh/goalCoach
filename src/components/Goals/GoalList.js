/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import React from 'react'
import {goalRef} from '../../firebase'
import {connect} from 'react-redux'
import {setGoals} from '../../actions'
import GoalItem from "./GoalItem";

class GoalList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numberMyGoal: 0,
        }
    }
    componentWillMount(){
        let {user} = this.props;
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                let {email, title} = goal.val();
                if(email === user.email){
                    let serverKey = goal.key;
                    goals.push({email, title, serverKey});
                    this.setState({
                        numberMyGoal: this.state.numberMyGoal+1
                    })
                }
            });
            this.props.setGoals(goals);
        });
    }
    render(){
        return(
            <div>
                {
                    this.props.goals.map((goal, index) => {
                        return (
                            <div key={index}>
                                {
                                    goal.email === this.props.user.email &&
                                    <GoalItem goal={goal}/>
                                }
                            </div>
                        )
                    })
                }
                {
                    this.state.numberMyGoal === 0 &&
                        <div className="alert alert-info">
                            Your goals is empty! Let's add goal.
                        </div>
                }
            </div>

        )
    }
}
function mapStateToProps(state) {
    const {goals, user} = state;
    return {
        goals, user
    };
}
export default connect(mapStateToProps, {setGoals}) (GoalList)