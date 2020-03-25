import React from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Main from './main';
import Footer from './footer';

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

        let props = this.props;
        let data = props.data;
        let selectData = data.filter((val) => val.selected);
        let likeData = data.filter((val) => val.like);


        return (
            <div>
                <header>
                    <h2 className="title">
                        {props.pathName === "/" ? "播放" : "收藏"}列表

                        <Link to="/add" className="addLink">添加歌曲</Link>

                    </h2>


                </header>
                {/* <Link to="/">所有列表</Link>
                <Link to="/like">收藏列表</Link> */}
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
                    if (likeData.length === 0) {
                        return <Redirect to="/" />
                    }
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

                <Footer
                    pathName={props.pathName}
                    length={data.length}
                    selectLength={selectData.length}
                    likeLength={likeData.length}
                    removeSelect={props.removeSelect}
                    likeSelect={props.likeSelect}
                    cancelLikeSelect={props.cancelLikeSelect}

                />
            </div>
        )
    }
}