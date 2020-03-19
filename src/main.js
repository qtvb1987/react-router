import React from 'react';
import Item from './item';

export default class Main extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <table
                className="main"
                style={{
                    display: data.length ? "table" : "none"
                }}

            >
                <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                id="checkAll"
                                checked={this.props.isCheckAll}
                                onChange={(e) => {
                                    this.props.checkAll(e.target.checked)
                                }}
                            />
                            <label htmlFor="checkAll">全选</label>
                        </th>
                        <th>歌曲</th>
                        <th>歌手</th>
                        <th>收藏</th>
                        <th>删除</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => {
                        return (
                            <Item
                                key={index}
                                data={value}
                                index={value.id}
                                setCheck={this.props.setCheck}
                                setLike={this.props.setLike}
                                remove={this.props.remove}
                            />
                        )
                    })}
                    {/* <tr className="like">
                        <td>
                            <input type="checkbox" name="" />
                        </td>
                        <td>空白格</td>
                        <td>蔡健雅</td>
                        <td>
                            <input type="checkbox" checked name="" />
                        </td>
                        <td>

                            <a >X</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox" name="" />
                        </td>
                        <td>全世界失眠</td>
                        <td>蔡健雅</td>
                        <td>
                            <input type="checkbox" name="" />
                        </td>
                        <td>

                            <a >X</a>
                        </td>
                    </tr>
                    <tr className="selected">
                        <td>
                            <input type="checkbox" checked name="" />
                        </td>
                        <td>全世界失眠</td>
                        <td>蔡健雅</td>
                        <td>
                            <input type="checkbox" name="" />
                        </td>
                        <td>

                            <a >X</a>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        );
    }
}