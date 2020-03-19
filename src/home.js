import React from 'react';
import { Link, Route } from 'react-router-dom';
import Main from './main';
// class All extends React.Component {
//     render() {
//         console.log(this.props);

//         return (
//             <h3>所有列表</h3>
//         )
//     }
// }
// class Like extends React.Component {
//     render() {
//         return (
//             <h3>收藏列表</h3>
//         )
//     }
// }

export default class Home extends React.Component {
    render() {
        console.log(this.props);
        let props = this.props;
        let data = props.data;
        let selectData = data.filter((val) => val.selected);
        let likeData = data.filter((val) => val.like);

        return (
            <div>
                {/* <h2>列表页</h2>
                <nav>

                    <Link to="/like">收藏列表</Link>
                </nav> */}
                <Route path="/" exact render={() => {
                    return (
                        <Main
                            data={data}
                            isCheckAll={props.isCheckAll}
                            checkAll={props.setCheckAll}
                            setCheck={props.setCheck}
                            setLike={props.setLike}
                            remove={props.remove}
                        />
                    )
                }} />
                <Route path="/like" render={() => {
                    return (
                        <Main
                            data={likeData}
                            isCheckAll={props.isCheckAll}
                            checkAll={props.setCheckAll}
                            setCheck={props.setCheck}
                            setLike={props.setLike}
                            remove={props.remove}
                        />
                    )
                }} />
            </div>
        )
    }
}