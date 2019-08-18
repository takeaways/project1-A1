import React,{useState, useCallback, useEffect, useRef} from 'react';
import {Input, Avatar, Form, Button, Checkbox} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_POST, ADD_POST_SUCCESS} from '../reducers/post';


const PostForm = () => {

  const _leadingZeros = (n, digits) => {
    var zero = '';
    n = n.toString();
    if (n.length < digits) {
      for (let i = 0; i < digits - n.length; i++)
        zero += '0';
    }
    return zero + n;
  }

    const _getTimeStamp = () => {
    var d = new Date();
    var s =
      _leadingZeros(d.getFullYear(), 4) + '-' +
      _leadingZeros(d.getMonth() + 1, 2) + '-' +
      _leadingZeros(d.getDate(), 2) + ' ' +
      _leadingZeros(d.getHours(), 2) + ':' +
      _leadingZeros(d.getMinutes(), 2) + ':' +
      _leadingZeros(d.getSeconds(), 2);
    return s;
  }

const dispatch = useDispatch();
const {me, addedPost} = useSelector(state => state.post);
const checkbox = useRef(null);
const [text, setText] = useState('');
const [title, setTitle] = useState('');
const [id, setId] = useState(0);
const [check, setCheck] = useState(false);
const [nickname, setNickname] = useState(me);


  const onChangeText = useCallback(e=>{
    setText(e.target.value);
  },[]);
  const onChangeTile = useCallback(e=>{
    setTitle(e.target.value);
  },[]);
  const onCheck = useCallback(e=>{
    setCheck(e.target.checked);
  })

  const onSubmitPost = useCallback(e=>{
    e.preventDefault();
    if(!title) return alert("제목을 입력해 주세요")
    if(!text) return alert("내용을 입력해 주세요")
    dispatch({
      type:ADD_POST,
      data:{
        id,
        me,
        title,
        text,
        check,
        date:_getTimeStamp(),
      }
    })
    setId(pre=> parseInt(pre)+1);
  },[me, id, text, title, check]);

  useEffect(()=>{
    if(addedPost){
      setText('');
      setTitle('');
      setCheck(false);
      checkbox.current.rcCheckbox.state.checked = false;
      dispatch({
        type:ADD_POST_SUCCESS
      })
    }
  },[addedPost === true]);

  return(
    <Form onSubmit={onSubmitPost}>
      <Input readOnly value={me+"님 반갑습니다."}/>
      <Input addonBefore="제목" value={title} onChange={onChangeTile}/>
      <Input.TextArea rows={10} value={text} onChange={onChangeText}/>
      <Checkbox ref={checkbox} onChange={onCheck}>중요</Checkbox>
      <Button htmlType="submit" style={{float:'right'}} type="primary">등록</Button>
    </Form>
  )
}

export default PostForm;
