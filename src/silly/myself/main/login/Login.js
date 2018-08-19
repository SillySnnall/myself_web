import React, {Component} from 'react';
import './Login.css';

/**
 * 首页
 */
export default class Login extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="login">
                <form action="/" method="get">
                    <input type="text" pattern="[0-9]"/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}