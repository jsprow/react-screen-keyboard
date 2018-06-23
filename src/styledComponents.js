import styled from 'react-emotion';

export const StyledKeyboard = styled('div')`
  width: 100%;
  height: 40vh;
  max-width: 57em;
  margin: 0 auto;
  background: #dadada;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  font-size: 18px;
`;
StyledKeyboard.displayName = 'StyledKeyboard';

export const Row = styled('div')`
  display: flex;
`;
Row.displayName = 'Row';

export const KeysSet = styled('div')`
  display: flex;
  flex-grow: 1;
`;
KeysSet.displayName = 'KeysSet';

export const Button = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 5.5em;
  height: 3.3333333333em;
  margin: 5px;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: 1px solid #cecece;
  font-size: 1em;
  font-family: 'Roboto';
  font-weight: 300;
  width: 4em;
  flex-basis: auto;
  :focus {
    outline: none;
  }
  :disabled {
    opacity: 0.4;
    cursor: default;
  }
  :active {
    background-color: #ccc;
  }
`;

export const NumberButton = styled('div')`
  flex-grow: 1;
`;
export const HalfButton = styled('div')`
  flex-basis: 2.75em;
`;
export const KeyboardSpace = styled('div')`
  flex-grow: 1;
`;
export const KeyboardSpaceButton = styled('div')`
  flex-grow: 1;
`;
export const UtilButton = styled('div')`
  flex-grow: 2;
  max-width: 3em;
`;
export const AdditionalButton = styled('div')`
  flex-basis: 7em;
`;
export const SubmitButton = styled('div')`
  flex-basis: 8em;
  background-color: #63b324;
  border-color: #63b324;
  color: #fff;
  flex: 1;
  width: auto;
`;
export const NumericKeyboard = styled('div')`
  width: auto;
  width: 4em;
  flex-basis: auto;
  flex: 1;
  width: auto;
`;
