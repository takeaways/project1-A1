import React,{useState, useCallback, useEffect} from 'react';
import {Input, Avatar, Form, Button} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {SET_NICKNAME} from '../reducers/post';
import PostForm from './PostForm';


const NicknameEditForm = () => {
  const {me} = useSelector(state => state.post);
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState(me);
  const onChangeFixNickname = (e) => {
    setNickname(e.target.value)
  };

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    if(!nickname) return alert("닉네임을 입력해주세요.");
    dispatch({
      type:SET_NICKNAME,
      data:nickname
    })
  },[nickname]);


  return (
    <div style={{padding:50}}>
      <Form onSubmit={onSubmit} style={{display:"flex"}}>
        <Input addonBefore="닉네임" value={nickname} onChange={onChangeFixNickname}/>
        <Button htmlType="submit" style={{verticalAlign:'middle',marginLeft:"10px",bottom:'1px'}} type="primary">수정</Button>
      </Form>
      <div style={{marginTop:"50px"}}>
        <PostForm />
      </div>
    </div>
  )
}

export default NicknameEditForm;
