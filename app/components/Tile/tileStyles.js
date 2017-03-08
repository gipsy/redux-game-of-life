import { css } from 'styled-components';

const tileStyles = css`
  background-color: #1e2225;
  display: inline-block;
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin: 0;
  padding: 0;
  border: solid 1px #2b3136;
  box-shadow: 0 1px black inset;
  border-radius: 15px;
  transition: background-color 0.15s ease-out;
  &:hover {
    background-color: #47254a;
  }
`;

export default tileStyles;
