import React,{useState,useEffect} from 'react';
import {Menu, Input, Row, Col, Card, Avatar, Form, Button, Pagination} from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';


import NicknameForm from './NicknameForm';
import NicknameEditForm from './NicknameEditForm';
import {SEARCH_POST} from '../reducers/post';


const AppLayout = ({children}) => {
  const dispatch = useDispatch();
  const {me, mainPosts} = useSelector(state => state.post);
  const onSearch = (term) =>{
    dispatch({
      type:SEARCH_POST,
      data:term
    })
  }

  return(
    <>
      <Head>
        <title>projecta1platform</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
      </Head>
      <Menu mode="horizontal">
        <Menu.Item key="검색">
        <Input.Search
          placeholder="input search text"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          { !me ? <NicknameForm /> : <NicknameEditForm/>}
        </Col>
        <Col xs={24} md={14}>
          {children}
        </Col>
        <Col xs={24} md={4}>
          <Link href="https://github.com/nomadGeonilJang"><a target="_blank">Made by Jang Geonil</a></Link>
        </Col>
      </Row>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.object
}



export default AppLayout;
