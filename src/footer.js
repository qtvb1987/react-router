import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        let length = this.props.length;
        let selectLength = this.props.selectLength;
        // let listShow = this.props.listState;
        let likeLength = this.props.likeLength;
        let pathName = this.props.pathName;
        return (
            <footer style={{
                display: length ? "block" : "none"
            }}>
                <div className="info">
                    <span className="align-right"
                        style={{
                            display: selectLength ? "inline-block" : "none"
                        }}
                    >当前选中{selectLength}首歌曲</span>
                    <span>共{length}首歌曲</span>

                </div>
                <input
                    type="button"
                    value="删除选中歌曲"
                    style={{
                        display: selectLength ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.removeSelect();
                    }}
                ></input>
                <input
                    type="button"
                    value="收藏选中歌曲"
                    style={{
                        display: selectLength ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.likeSelect();
                    }}
                ></input>
                <input
                    type="button"
                    value="取消选中歌曲"
                    style={{
                        display: selectLength ? "inline-block" : "none"
                    }}
                    onClick={() => {
                        this.props.cancelLikeSelect();
                    }}
                ></input>
                {(pathName === "/" && likeLength > 0) ? <Link to="/like" >查看收藏列表</Link> : ""}
                {pathName === "/like" ? <Link to="/" >查看所有列表</Link> : ""}
            </footer>
        );
    }
}