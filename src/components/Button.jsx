import React from "react";
import { Button, Divider,Space } from 'antd';
import {DownloadOutlined } from '@ant-design/icons'

export default function Button(){
  return(
    <>
    <Space  direction="vertical" style={{width:'100%'}} >
    <Button size="large" type="primary"  >Button1</Button>
    <Button size="large" type="dashed"  >Button1</Button>
    <Button   danger block ><DownloadOutlined  />Button2</Button>
    <Button >Default</Button>
    </Space>
    <Divider orientation="center" >Rahim</Divider>
    </>
  )
}