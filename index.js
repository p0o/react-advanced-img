import React from 'react';
import ReactDom from 'react-dom';
import Img from './src/ReactAdvancedImg.js';

ReactDom.render(
  <div>
    <h2>Bad Image:</h2>
    <Img src="http://wrongurl" />
    <h2>Good Image:</h2>
    <Img src="http://www.thereformat.com/images/js4560_450.png" />
  </div>,
  document.getElementById('root')
);
