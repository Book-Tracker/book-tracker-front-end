import React, { Component } from "react";
import './login.css';

class Login extends Component {

    
    render(){
        document.title="Login"

        return(
            <div className="container padding">
                <div className="col-4">
                    <body className="text-center">
            
                        <main className="form-signin">
                            <form>
                                <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="checkbox mb-3">
                                    <label>
                                        {/*<input type="checkbox" value="remember-me"> Remember me </input>*/} 
                                    </label>
                                </div>
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
                            </form>
                        </main>

                    </body>
                </div>
            </div>
        );

    }
}

export default Login;