import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import Root from './pages/root';




ReactDOM.render(
  <div>
    <Root />
  </div>,
  document.getElementById('app')
);

module.hot.accept();


injectGlobal`
  @font-face {
    font-family: 'Arial';
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial';
    margin: 0;
    color: #0074D9;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;
