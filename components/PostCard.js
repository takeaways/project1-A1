import React,{useState, useEffect, useCallback, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Icon, Button, Avatar, Form, List, Input, Comment} from 'antd';
import PropTypes from 'prop-types';
import {FIX_POST, DEL_POST} from '../reducers/post';

const PostCard = ({post}) => {

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
  //console.dir(post)
  const dispatch = useDispatch();
  const {mainPosts, me ,id,  check} = useSelector(state => state.post);
  const [fix, setFix] = useState(true);
  const [fixText, setFixText] = useState(post.text);
  const [fixTitle, setFixTitle] = useState(post.title);

  const onFix = useCallback(e =>{
    if(me === post.me){
      setFix(pre=>!pre);
      if(!fix){
        const index = mainPosts.findIndex(r=> r.id === post.id);
        dispatch({
          type:FIX_POST,
          data:{index,fixText,fixTitle,date:_getTimeStamp()}
        })
      }
    }
  },[me, fix, fixText, fixTitle] );

  const onDelete = useCallback((e) =>{
    alert("삭제합니다");
    const index = mainPosts.findIndex(r=> {
      return r.id === post.id
    });
    dispatch({
      type:DEL_POST,
      data:index
    })
  },[mainPosts]);

  const onChangeFixTitle = useCallback(e=>{
    setFixTitle(e.target.value);
  },[]);
  const onChangeFixText = useCallback(e=>{
    setFixText(e.target.value);
  },[]);


  return(
    <div style={{margin:"15px", padding:35}}>
      <Card
       title={(
         <>
          { fix ? <div style={{width:"70%"}}>{post.title}</div> : <Input style={{width:"70%"}} value={fixTitle} onChange={onChangeFixTitle}/> }
          <div>{post.date}</div>
         </>
       )}
       key={post.date}
       extra={me  == post.me ? <div style={{width:"40px",display:'flex',justifyContent:'space-between'}}>
         <Icon type="edit" onClick={onFix}/>
         <Icon type="close" onClick={onDelete} />
         </div> : null}
      >
       <Card.Meta
         avatar={<Avatar>{post.me[0]}</Avatar>}
         description={ fix ? <div style={ post.check ? {color:"red" } : null}>{post.text}</div> : <Input.TextArea value={fixText} onChange={onChangeFixText} rows={4}/>}
       />
      </Card>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    title:PropTypes.string,
    text:PropTypes.string,
    me:PropTypes.string
  })
}

export default PostCard
