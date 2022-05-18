// TestRefClass 컴포넌트를 들고와서 현재 컴포넌트에서 제어

import { Component } from "react";
import TestRefClass from "./TestRefClass";

class RefComponent extends Component {
  constructor(props) {
    super(props);
    this.componentRef = null;
    this.changeAll = () => {
      this.componentRef.inputTextChange();
      this.componentRef.myRefChange();
    }
  }

  render() {
    return(
      <div>
        <TestRefClass //ref를 사용해서 엘리먼트 확인
        ref={(el) => {
          this.componentRef = el;
        }}
        />
        <button onClick={this.changeAll}>모두 바꾸기</button>
      </div>
    );
  }
}

export default RefComponent;