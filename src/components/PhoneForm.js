import React, { Component } from "react";

class PhoneForm extends Component {
  input = null;

  //1) state로 기본 설정
  state = {
    name: "",
    phone: "",
  };

  //2) 변경 이벤트가 발생할때 처리할 함수 만들기
  handleChange = (e) => {
    this.setState({
      // name: e.target.value, // name값을 input value 값으로 설정. 여기서 e.target는 input
      [e.target.name]: e.target.value, //input이 여러개이기 때문에, e.targeet=input     input.name값을 넣어준다. ===> 각 input 구분 가능
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state); //props로 받았던 onCreate를 호출한다.

    //입력 후 초기화
    this.setState({
      name: "",
      phone: "",
    });

    //focus
    this.input.focus();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* - input에서 값이 바뀔 때마다 name 값이 바뀜.
            - 여러 input을 관리하기 위해서 name 값을 줘야함.
        */}
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange} //이벤트 속성은 문자열이 아닌 {this.onNameHandler}로 작성.
          value={this.state.name}
          ref={(ref) => (this.input = ref)}
        />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <button type="submit">등록</button>
        {/* <div>
          {this.state.name} {this.state.phone}
        </div> */}
      </form>
    );
  }
}

export default PhoneForm;
