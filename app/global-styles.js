import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #2b3136;
    min-height: 100%;
    min-width: 100%;
  }

  .controls {
    margin-bottom: 20px;
    display: inline-block;
    width: 100%;
    max-width: 1200px;
  }

  .text-muted {
    display: inline-block;
    margin-left: 10px;
  }

  .button-title {
    margin-left: 5px;
  }

  button:active,
  button:focus {
    outline: 0 !important;
  }

  .grid {
    background-color: transparent;
    max-width: 1200px;
    margin-bottom: 50px;
    overflow: hidden;
  }

  .sidebar-nav a,
  .sidebar-nav a:hover,
  .sidebar-nav a:focus {
    text-decoration: none; 
  }
`;
