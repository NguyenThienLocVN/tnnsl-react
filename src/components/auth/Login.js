import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from "axios";
import { trackPromise } from 'react-promise-tracker';

import './Auth.css';

export default class Login extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            name: '',
            password: '',
            redirect: false,
            error: false,
            msg: ''
        }
    }
    
    componentDidMount(){
        document.title = "Đăng nhập | Giám sát tài nguyên nước Sơn La";
    }

    onChangehandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let data = {};
        data[name] = value;
        this.setState(data);
    };

    onSignInHandler = () => {
        trackPromise(
            axios
            .post("http://localhost/tnnsl-api/public/api/login", {
                name: this.state.name,
                password: this.state.password,
            })
            .then((response) => {
                if(response.status === 200)
                {
                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("userData", JSON.stringify(response.data));
                    this.setState({redirect: true})
                }
            })
            .catch((error) => {
                this.setState({msg: error.response.data.message})
            })
        );
    };
    
    render(){
        const login = localStorage.getItem("isLoggedIn");
        if(login || this.state.redirect)
        {
            return <Redirect to="/"/>
        }
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/images/screenshot-tai-nguyen-nuoc.png'} className="background-login" alt="screenshot-tai-nguyen-nuoc" />
                <div className="form-login position-absolute">
        
                    <img src={process.env.PUBLIC_URL + '/images/ANHSOTNMT.png'} className="w-100 mb-3" alt="ANHSOTNMT" />
        
                        <div>
                            <div className="d-flex">
                                <span className="input-group-text"><i className="fa fa-user" aria-hidden="true"></i></span>
                                <input id="name" onChange={this.onChangehandler} className="form-control block w-full font-13" type="text" name="name" required autoFocus placeholder="Tên đăng nhập" />
                            </div>
                        </div>
        
                        <div className="mt-4">
                            <div className="d-flex">
                                <span className="input-group-text"><i className="fa fa-lock" aria-hidden="true"></i></span>
                                <input id="password" onChange={this.onChangehandler} className="form-control block w-full font-13" type="password" name="password" required autoComplete="current-password" placeholder="Mật khẩu" />
                            </div>
                        </div>

                        {this.state.msg ? <div className="alert alert-danger mt-3">
                            <span>{this.state.msg}</span>
                        </div> : "" }
        
                        <div className="text-center d-flex mt-3">
                            <button onClick={this.onSignInHandler} className="col-5 btn font-13 button-login text-white">Đăng nhập</button>
        
                            <Link to="register" className="btn font-13 col-6">Đăng ký</Link>
                        </div>
                        <div className="text-center mt-4">
                            <a className="underline text-sm text-gray-600 hover:text-gray-900 font-13 font-weight-bold" href="{{ route('password.request') }}">Quên mật khẩu?</a>
                        </div>
                </div> 
            </div>
        )
    }
}
