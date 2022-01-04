import React, { Component } from "react";

class Signup extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                email: '',
                password: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render(){
        document.title="Sign Up"

        return( 
            <div className="modal modal-signin position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSignin">
                <div className="modal-dialog" role="document">
                    <div className="modal-content rounded-5 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            {/* <h5 className="modal-title">Modal title</h5> */}
                            <h2 className="fw-bold mb-0">Sign up for free</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body p-5 pt-0">
                            <form className="" onSubmit={this.onSubmit}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control rounded-4" id="floatingInput" placeholder="name@example.com" value={this.state.email} onChange={this.onChangeEmail}></input>
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control rounded-4" id="floatingPassword" placeholder="Password" value={this.state.password} onChange={this.onChangePassword}></input>
                                    <label for="floatingPassword">Password</label>
                                </div>
                                <button className="w-100 mb-2 btn btn-lg rounded-4 btn-primary" type="submit">Sign up</button>
                                <small className="text-muted">By clicking Sign up, you agree to the terms of use.</small>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;