import { useState } from "react";

const InputArrow = () => {
  const [message, setMessage] = useState('');
  const [form, setForm] = useState({
    user : '',
    message : ''
  });
  //익명함수, 화살표함수 동일하게 사용
  const inputChange = (e) => {
    setMessage(e.target.value);
  };
  const formChange = (e) => {
    //스프레드 연산자를 사용해서 form안의 값을 꺼내서 사용
    //동일한 키값은 가장 마지막에 작성된 값으로 대체
    const nextForm = {
      ...form,
      [e.target.name] : e.target.value,
    };
    setForm(nextForm);
  }

  return (
    <div>
      <input type='text' onChange={inputChange} placeholder='입력하세용'></input>
      <h3>{message}</h3>
      <h3>{form.user}의 메세지 : {form.message}</h3>
      <input type='text' name='user' onChange={formChange}></input>
      <input type='text' name='message' onChange={formChange}></input>
    </div>
  );
};

export default InputArrow;