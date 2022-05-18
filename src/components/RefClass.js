import React, {Component} from 'react'

class RefClass extends Component {
  constructor(props) {
    super(props);
    this.textInput = null;
    // ref 콜백 함수를 통해 DOM에 접근
    this.setTextInputRef = (element) => { this.textInput = element; };
    // ref 콜백 함수로 가져온 엘리먼트(textInput)에 접근해서 값 수정
    this.focusTextInput = () => {
      // textInput의 focus() 사용
      if(this.textInput) this.textInput.focus();
    };
    //React.createRef를 통해 DOM 접근하기
    this.myRef = React.createRef();
    this.myRefFocus = () => {
      // current로 접근해서 사용가능
      if(this.myRef) this.myRef.current.focus();
    };
  }

  render() {
    return(
      <div>
        <input type='text' ref={this.setTextInputRef} //ref를 통해서 input 엘리먼트 전달
        ></input>
        <button onClick={this.focusTextInput} // 버튼을 누르면 input 엘리먼트에 포커싱
        >포커스</button>

        <input type='text' ref={this.myRef} // createRef를 통해서 input 엘리먼트 전달
        ></input>
        <button onClick={this.myRefFocus}>포커스</button>
      </div>
    );
  }
}

export default RefClass;