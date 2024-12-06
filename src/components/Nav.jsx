import React, { useState } from 'react';
import { Menu, Row, Col, Layout, theme } from 'antd';
import {items} from '../data/navData';
const {Header} = Layout;
const { useToken } = theme;


const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const {token } = useToken(); 
  return (
    <Layout className='layout'>
      <Header style={{ backgroundColor: token.colorBgBase }}>
    <Row justify='end' >
      <Col span='10'>
        <div style={{
            color:'#000'
          }}>Logo</div>
      </Col>
      <Col span='14'>
      <Menu theme='' justify='end' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </Col>
    </Row>
       </Header>
    </Layout>
  );
};
export default App;