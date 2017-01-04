import React, { PropTypes } from 'react';

export default class ReactAdvancedImg extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
  };

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <p>{this.props.src}</p>
    );
  }
};
