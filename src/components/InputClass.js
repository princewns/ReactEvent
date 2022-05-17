// 클래스형 컴포넌트
import {Component} from 'react';

//input태그의 값을 받아와서 수정하는 컴포넌트
class InputClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message : '',
      user : ''
    };
    this.inputChange = this.inputChange.bind(this);
    //this.showMessage = this.showMessage.bind(this);
  };

  //input 값이 바뀔떄마다 값을 state에 넣어주는 메소드
  inputChange(e) {
      this.setState({ message : e.target.value });
  };
  //화살표 함수로 연결시 bind로 연결하지 않아도 된다.
  showMessage = () => {
    alert(this.state.message+","+this.state.user);
  };
  render() {
    const {message, user} = this.state
    return (
      <div>
        <h2>이벤트 연습</h2>
        <input type="text" name='message' placeholder='입력하세요'
        value={message} onChange={(e) => {
          this.setState({ message : e.target.value });
        }}></input>
        <p>{message}</p>
        <input type='text' placeholder='입력하세요'
         onChange={(e) => (
           this.setState(() => ({
             //객체 형태 키 : 값
             //키를 [] 감싸면 가르키는 실제값이 사용
             user : e.target.value
           }))
         )}></input>
         <p>{user}</p>

         <button onDoubleClick={this.showMessage}>응애</button>
      </div>
    );
  };
};
export default InputClass;