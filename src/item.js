import React from 'react';

export default class Item extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <tr className={(data.selected ? "selected" : "")
                + (data.like ? " like" : "")
            }>
                <td>
                    <input
                        type="checkbox"
                        checked={data.selected}
                        onChange={(e) => {
                            this.props.setCheck(this.props.index, e.target.checked)
                        }}
                    />
                </td>
                <td>{data.title}</td>
                <td>{data.singer}</td>
                <td>
                    <input
                        type="checkbox"
                        checked={data.like}
                        onChange={(e) => {
                            this.props.setLike(this.props.index, e.target.checked)
                        }}
                    />
                </td>
                <td>

                    <span onClick={() => {
                        this.props.remove(this.props.index)
                    }}>X</span>
                </td>
            </tr>
        );
    }
}