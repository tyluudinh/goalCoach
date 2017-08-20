/**
 * Created by dinhty.luu@gmail.com on 20/8/17.
 */

import React, {Component} from 'react'
import {firebaseApp} from '../firebase'
import {Link} from 'react-router'
class SignIn extends Component{
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
    signIn(){
        let {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
            .catch(error => {
                this.setState({error})
            })
    }
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.signIn();
        }
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-login">
                        <div className="panel text-center panel-heading">
                            Login
                        </div>
                        <div>
                            <form>
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        placeholder="Email"
                                        type="text"
                                        autoFocus={true}
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
                                            <button className="btn btn-primary" type="button" onClick={() => {this.signIn()}}>
                                                Login
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <Link to={'/signUp'}>
                                                Register Now!
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
export default SignIn;