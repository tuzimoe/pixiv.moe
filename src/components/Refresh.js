import '../styles/Fn.scss';
import '../styles/Button.scss';

import React from 'react';
import { FABButton, Icon } from 'react-mdl';

export default class Refresh extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={ 'float-btn refresh' }>
        <FABButton
          onClick={ this.props.onClick.bind(this) }
          colored
          primary
          ripple>
          <Icon name={ 'refresh' } />
        </FABButton>
      </div>
      );
  }
}