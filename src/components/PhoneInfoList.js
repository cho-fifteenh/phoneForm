import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };
  render() {
    const { data, onRemove, onUpdate } = this.props; //data 가져오기

    console.log("rendering list");
    const list = data.map(
      // data안에 있는
      (info) => (
        <PhoneInfo
          onRemove={onRemove}
          onUpdate={onUpdate}
          info={info}
          key={info.id}
        />
      )
    );
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
