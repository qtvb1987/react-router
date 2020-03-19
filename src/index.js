import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home';
import Add from './add';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.now = 4;
        this.state = {
            listState: true,
            data: [
                {
                    id: 0,
                    title: "空白格",
                    singer: "蔡健雅",
                    selected: true,
                    like: false
                },
                {
                    id: 1,
                    title: "空白格222",
                    singer: "蔡健雅222",
                    selected: true,
                    like: false
                }
                , {
                    id: 2,
                    title: "空白格333",
                    singer: "蔡健雅33",
                    selected: true,
                    like: true
                }
                , {
                    id: 3,
                    title: "空白格444",
                    singer: "蔡健雅444",
                    selected: true,
                    like: false
                }
            ]
        };
        this.add = this.add.bind(this);
        // this.isCheckAll = this.isCheckAll.bind(this);
        this.setCheckAll = this.setCheckAll.bind(this);
        this.setCheck = this.setCheck.bind(this);
        this.setLike = this.setLike.bind(this);
        this.remove = this.remove.bind(this);
        this.removeSelect = this.removeSelect.bind(this);
        this.likeSelect = this.likeSelect.bind(this);
        this.cancelLikeSelect = this.cancelLikeSelect.bind(this);
        this.showLikeList = this.showLikeList.bind(this);
    }
    add(title, singer) {
        let data = this.state.data;
        data.push({
            id: this.now,
            title: title,
            singer: singer,
            selected: false,
            like: false
        });
        this.now++;
        this.setState({
            data
        })

    }
    isCheckAll() {
        let data = this.state.data;
        for (var i = 0; i < data.length; i++) {
            if (!data[i].selected) {
                return false;
            }
        }
        return true;
    }
    setCheckAll(checked) {
        let data = this.state.data.map((val) => {
            val.selected = checked;
            return val;
        });
        this.setState({
            data
        })
    }
    setCheck(index, checked) {
        let data = this.state.data;
        data.forEach((val) => {
            if (val.id === index) {
                val.selected = checked;
            }
        });
        // data[index].selected = checked;
        this.setState({
            data
        })
    }
    setLike(index, checked) {
        let data = this.state.data;
        data.forEach((val) => {
            if (val.id === index) {
                val.like = checked;
            }
        });
        // data[index].like = checked;
        this.setState({
            data
        })
    }
    remove(index) {
        let data = this.state.data.filter((v, i) => v.id !== index);

        this.setState({
            data
        })
    }
    removeSelect() {
        let data = this.state.data.filter((v) => !v.selected);

        this.setState({
            data
        })
    }
    likeSelect() {
        let data = this.state.data.map((v) => {
            if (v.selected) {
                v.like = true;
            }
            return v;
        });

        this.setState({
            data
        })
    }
    cancelLikeSelect() {
        let data = this.state.data.map((v) => {
            if (v.selected) {
                v.like = false;
            }
            return v;
        });

        this.setState({
            data
        })
    }
    showLikeList(state) {

        this.setState({
            listState: state
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!nextState.listState) {
            let likeData = nextState.data.filter((val) => val.like)
            if (!likeData.length) {
                this.setState({
                    listState: true
                })
                return false;
            }

        }
        return true;
    }
    render() {
        let data = this.state.data;
        let selectData = data.filter((val) => val.selected);
        let likeData = data.filter((val) => val.like);

        return (
            <BrowserRouter>
                <div id="musicApp">
                    {/* <h1>首页</h1>
                    <nav>
                        <Link to="/">首页</Link>
                        <span> | </span>
                        <Link to="/add">添加页面</Link>
                    </nav>
                    <hr /> */}
                    <Switch>
                        {/* <Route path="/add" component={Add} /> */}
                        <Route path="/" render={() => {
                            return (
                                <Home
                                    data={this.state.listState ? data : likeData}
                                    isCheckAll={this.isCheckAll()}
                                    checkAll={this.setCheckAll}
                                    setCheck={this.setCheck}
                                    setLike={this.setLike}
                                    remove={this.remove}
                                />
                            )
                        }} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

