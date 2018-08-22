import React, {Component} from 'react';
import './Login.css';
import '../../common/Config'

const axios = require('axios');
/**
 * 登录
 */
export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            account: '',
            pwd: ''
        };
        this._accountHandleChange = this._accountHandleChange.bind(this);
        this._pwdHandleChange = this._pwdHandleChange.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    // 设置帐号数据
    _accountHandleChange(event) {
        this.setState({account: event.target.value});
    }

    // 设置帐号数据
    _pwdHandleChange(event) {
        this.setState({pwd: event.target.value});
    }

    // 登录请求
    _loginRequest() {
        axios.post(global.constants.SERVICE_URL, {
            ac: 'login',
            lastName: 'xxxx',
        }, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },

        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="login">
                <div className="login_box">
                    <p>帐号: <input type="text" onChange={this._accountHandleChange}/></p>
                    <p>密码: <input type="text" onChange={this._pwdHandleChange}/></p>
                    <p>{this.state.account}</p>
                    <button onClick={() => this._loginRequest()}>登录</button>
                </div>
            </div>
        );
    }
}