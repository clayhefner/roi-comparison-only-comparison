import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#334d71',
};
const Carousels = () => (
  <Carousel style={{height:'400'}} autoplay>
    <div>
      <h3 style={contentStyle}>Slider 1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Slider 2</h3>
    </div>
    <div>
      <h3 style={contentStyle}> Slider 3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Slider 4</h3>
    </div>
  </Carousel>
);
export default Carousels;