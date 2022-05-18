/*TestRefClass에서 ref 콜백과 create.ref를 사용해서 클릭했을때
input의 style의 backgroundColor값을 red로 바꾸세요*/
import  React, { Component } from "react";

class TestRefClass extends Component {
  constructor(props) {
    super(props);
    this.inputText = null;
    this.inputTextCall = (el) => { this.inputText = el };
    this.inputTextChange = () => {
      const ref = this.inputText;
      
      if(ref.style.backgroundColor === 'red'){
        ref.style.backgroundColor = 'white';
      } else if(ref) {
        ref.style.backgroundColor = 'red';
      }
    };

    this.myRef = React.createRef();
    this.myRefChange = () => {
      const ref = this.myRef.current;
      if(ref.style.backgroundColor === 'red') {
        ref.style.backgroundColor = 'white';
      }
      else{
        ref.style.backgroundColor = 'red';
      }
    };
  }

  render() {
    return(
      <div>
        <input type='text' ref={this.inputTextCall} placeholder='callback'></input>
        <button onClick={this.inputTextChange}>색상변경</button>
        <br />
        <input type='text' ref={this.myRef} placeholder='create.ref'></input>
        <button onClick={this.myRefChange}>색상변경</button>
      </div>
    );
  }
};
export default TestRefClass;