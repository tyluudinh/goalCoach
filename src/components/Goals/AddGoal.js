/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */
import React from 'react'
import {goalRef} from '../../firebase'
import {connect} from 'react-redux'

class AddGoal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
        }
    }
    addGoal(){
        const {title} = this.state;
        const {email} = this.props.user;
        goalRef.push({
            email: email,
            title: title
        });
    }
    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                    <input
                        placeholder="Add a goal"
                        className="form-control"
                        onChange={event => this.setState({title: event.target.value})}
                        style={{marginRight: '5px'}}
                        type="text"/>
                    <button
                        className="btn btn-success"
                        onClick={() => {this.addGoal()}}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {user} = state;
    return {
        user
    }
}
export default connect(mapStateToProps, null)(AddGoal);