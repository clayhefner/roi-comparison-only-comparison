import React from "react";
import {Divider, Row, Col } from 'antd'

export default function Grid(){
  const style = {
    background:'red',
    padding:'20px 20px',
    color:"#fff"
  }
  return(
    <>
    <Row gutter={[16, 16]}>
    <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} ><div style={style}>col-6</div></Col>

    <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} ><div style={style}>col-6</div></Col>
  </Row>
  
  <Row style={{marginTop: 16}} gutter={[16, 16]}>
  <Col span={6} ><div style={style}>col-6</div></Col>
    <Col span={6} />
    <Col span={6} />
    <Col span={6} />
  </Row>
    <Divider orientation="center" >Rahim</Divider>
    
    </>
  )
}