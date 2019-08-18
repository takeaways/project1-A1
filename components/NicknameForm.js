import React,{useState, useCallback, memo} from 'react';
import {Input, Avatar, Form, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_NICKNAME, SET_NICKNAME} from '../reducers/post';

const NicknameForm = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState('');
  const onChangeNickname = useCallback( (e) => {
    setNickname(e.target.value)
  },[]);
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if(!nickname) return alert("닉네임을 입력해주세요.");
    dispatch({
      type:SET_NICKNAME,
      data:nickname
    })
  },[nickname]);

  return (
    <Form onSubmit={onSubmit} style={{padding:30, display:"flex"}}>
      <Input addonBefore="닉네임" value={nickname} onChange={onChangeNickname}/>
      <Button htmlType="submit" style={{verticalAlign:'middle',marginLeft:"10px",bottom:'1px'}} type="primary">등록</Button>
    </Form>
  )
}

export default NicknameForm
