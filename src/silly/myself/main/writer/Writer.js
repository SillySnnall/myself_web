import React, {Component} from 'react';
import './Writer.css';
import Ueditor from "../../view/UeditorView";

/**
 * 创作
 */
export default class Writer extends Component {

    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    // 设置标题数据
    _titleHandleChange(event) {
        this.setState({title: event.target.value});
    }

    // 提交文档
    _contentHandleChange() {
        // 获取内容数据
        const xxx1 = this.refs.content.getVal();
        console.log(xxx1);
    }

    render() {
        return (
            <div className="writer">
                <input type="text" onChange={this._titleHandleChange}/>
                <div>
                    {/*<p>{this.props.location.state.account}</p>*/}
                </div>
                <Ueditor id="content" height="500" ref="content"/>
                <button onClick={this._contentHandleChange.bind(this)}>保存</button>
            </div>
        );
    }
}