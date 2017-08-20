/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */

import React, {Component} from 'react'
import {firebaseApp} from '../firebase'
import {Link } from 'react-router'
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            error:{
                message: ''
            }
        }
    }
    signUp(){
        let {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
            .catch(error => {
                console.log('Error: '+error);
                this.setState({error})
            })
    }
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.signUp();
        }
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-login">
                        <div className="panel text-center panel-heading">
                            Sign In
                        </div>
                        <div>
                            <form>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Email"
                                        autoFocus={true}
                                        type="text"
                                        onKeyPress={this._handleKeyPress.bind(this)}
                                        onChange={(e) => {this.setState({email: e.target.value})} }
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Password"
                                        type="password"
                                        onKeyPress={this._handleKeyPress.bind(this)}
                                        onChange={(e) => {this.setState({password: e.target.value})} }
                                    />
                                </div>
                                {
                                    this.state.error.message !== '' &&
                                    <div className="form-group">
                                        <div className="alert alert-danger">{this.state.error.message}</div>
                                    </div>
                                }
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <button className="btn btn-info" type="button" onClick={() => {this.signUp()}}>
                                                Register
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <Link to={'/signIn'}>
                                                Already a user ? Sign In instead
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SignUp;