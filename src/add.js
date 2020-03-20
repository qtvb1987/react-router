/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class Add extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: "",
            singer: ""
        }
    }
    getBack() {
        if (this.props.length > 0) {
            return (
                <a
                    className="backLink"
                    onClick={() => {
                        this.props.router.history.goBack();
                    }}
                >返回</a>
            )
        }
    }
    render() {
        console.log(this.props.router);

        return (
            <header>
                <h2 className="title">
                    播放列表
                    {this.getBack()}
                </h2>
                <input
                    type="text"
                    placeholder="输入歌曲名字"
                    value={this.state.title}
                    onChange={(e) => {
                        this.setState({
                            title: e.target.value
                        })
                    }}
                ></input>
                <input
                    type="text"
                    placeholder="输入歌手名字"
                    value={this.state.singer}
                    onChange={(e) => {
                        this.setState({
                            singer: e.target.value
                        })
                    }}
                ></input>
                <input
                    type="button"
                    value="添加音乐"
                    onClick={() => {
                        console.log(this.state)
                        this.props.add(this.state.title, this.state.singer);
                        this.setState({
                            title: '',
                            singer: ''
                        });
                        this.props.router.history.push('/');
                    }}
                ></input>
            </header>
        )
    }
}