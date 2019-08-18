import React,{useEffect, useState,useCallback} from 'react';
import {Form, Input, Button, Icon, Avatar, Card, Pagination } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import PostCard from '../components/PostCard';


const Home = () => {
  const dispatch = useDispatch();
  const {mainPosts} = useSelector(state => state.post);
  const [page, setPage] = useState(1);
  const onChangePage = useCallback((p) =>{
    setPage(p)
  },[]);
  useEffect(()=>{

  },[]);
  return (
    <div style={{paddingTop:"10px"}}>
      { mainPosts.length !== 0 ?(
        <div style={{marginBottom:"10px"}}>
          <Pagination onChange={onChangePage} simple defaultCurrent={page} total={parseInt(mainPosts.length * 2.5)} />
        </div>
      ) : null }
      { mainPosts && mainPosts.map( (post, index) => {
        if(page !== 1){
          if(index < page*4 && (page-1)*4 <= index)
            return <PostCard key={post.date} post={post}/>
        }else if(index < page * 4 ){
            return <PostCard key={post.date} post={post}/>
        }
      })}

    </div>
  )
}




export default Home
