import { Link } from 'react-router';
import styled from 'styled-components';

export default styled(Link)`
  display: block;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  border: 2px solid #41ADDD;
  color: #41ADDD;
  
  &:active {
    background: #41ADDD;
    color: #FFF;
    text-decoration: none;
  }
`;
