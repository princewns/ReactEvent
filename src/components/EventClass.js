// 클래스형 컴포넌트
import {Component} from 'react';

// 리액트에서 component를 상속받아 사용
class EventClass extends Component {
  //props값은 부모 컴포넌트에서 받아오는 값이므로 component에서 미리 받아오고있다.
  constructor(props) {
    // 받아온 값을 super로 전달 , 사용할때는 this로 사용
    super(props);
    //클래스형 컴포넌트에서 서용하기위해 constructor에 저장
    // state = {} 형식으로 constructor 바깥에 작성도 가능하다.
    this.state = {
      message : '메세지입니다.',
    };
    //클래스 안에서 사용하기 위해 this.onClickEvent 함수 이름 작성
    // 작성한 함수는 constructor 바깥에 작성되어서 연결하기 위해
    // this.onClickEvent 박에서 작성한 이름으로 연결
    // 연결할때 this.setState의 this 위치를 알려주기 위해 bind(this)로 연결
    this.onClickEvent = this.onClickEvent.bind(this);
  };

  onClickEvent() {
    this.setState({message : '응애'});
    if(this.state.message === '응애') this.setState({message : '메세지입니다.'});
  };
  
  render() {
    const {name} = this.props;
    const {message} = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <p>{message}</p>
        <button onClick={() => {
          this.setState({message : '응애'});
        }}>클릭하면 메세지가 바뀝니다.</button>
        <br/>
        <button onClick={this.onClickEvent}>클릭하면 메세지가 바뀌는듯.</button>
      </div>
    );
  };
};
export default EventClass;