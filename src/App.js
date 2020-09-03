import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";

class App extends Component {
  state = {
    information: [], // 정보를 배열로 받아오기
  };

  handleCreate = (data) => {
    this.setState({
      information: this.state.information.concat(data),
    });
    // console.log(data); // data 받아오기
  };

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
