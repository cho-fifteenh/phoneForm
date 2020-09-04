import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  id = 3; //데이터를 추가 할 때마다 고유한 id 값이 들어가도록 0으로 만들어준다. --> 추가,제거 할때 효율적으로 하기 위해서

  state = {
    information: [
      { id: 0, name: "11", phone: "010-0000-0001" },
      { id: 1, name: "2", phone: "010-0000-0001" },
      { id: 2, name: "3", phone: "010-0000-0001" },
    ], // 정보를 배열로 받아오기
    keyword: "",
  };

  handleCreate = (data) => {
    //2. 비구조화 할당 사용  -> 가독성
    const { information } = this.state;

    //1. 비구조화 할당 사용 x
    // this.setState({
    //   information: this.state.information.concat(data), //불변성 유지를 위해 기본 배열을 수정하지 않고 새로운 배열 생성. --> concat 사용
    // });

    this.setState({
      //1. concat 상용 첫번째 방법
      // information: information.concat({
      //   ...data,
      //   id: this.id++, // 데이터가 추가 될 때마다 id 값이 1씩 증가
      // }),

      //2. concat 상용 두번째 방법
      information: information.concat(
        Object.assign({}, data, {
          //비어있는 객체에 data를 집어넣음..???
          id: this.id++, // 데이터가 추가 될 때마다 id 값이 1씩 증가
        })
      ),
    });
    // console.log(data); // data 받아오기
  };

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter((info) => info.id !== id),
    });
  };

  handleUpdate = (id, data) => {
    const { information } = this.state; //information에 대한 rf
    this.setState({
      information: information.map((info) => {
        if (info.id === id) {
          return {
            id,
            ...data, //name, phone...
          };
        }
        return info; //받아온것 그대로 리턴
      }),
    });
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."
        />
        <PhoneInfoList
          data={this.state.information.filter(
            (info) => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
