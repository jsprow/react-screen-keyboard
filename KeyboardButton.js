import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

// interface IKeyboardButtonOwnProps {
//   autofocus: boolean;
//   classes?: string;
//   isDisabled: boolean;
//   handleClick?: () => void;
//   onClick: (value: IKeyboardButtonOwnProps['value']) => void;
//   value: string | React.ReactNode;
// }

// type KeyboardButtonProps = IKeyboardButtonOwnProps;

class KeyboardButton extends PureComponent {
  static propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.node.isRequired
    ]),
    classes: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    autofocus: PropTypes.bool,
    isDisabled: PropTypes.bool
  };

  static defaultProps = {
    classes: '',
    autofocus: false,
    isDisabled: false
  };

  handleClick = () => this.props.onClick(this.props.value);

  render() {
    const { autofocus, classes, isDisabled, value } = this.props;

    return (
      <button
        type="button"
        className={classNames('keyboard-button', classes)}
        onClick={this.handleClick}
        autoFocus={autofocus}
        disabled={isDisabled}>
        {value}
      </button>
    );
  }
}

export default KeyboardButton;
