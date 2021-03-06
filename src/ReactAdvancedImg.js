import React, { PropTypes, Component } from 'react';

export default class ReactAdvancedImg extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };

  static defaultProps = {
    style: {},
    className: '',
    placeholder: 'placeholder',
    width: 500,
    height: 500,
  };

  constructor(props) {
    super(props);
    this.state = {
      loadPlaceholder: false,
    };
  }

  handleError = () => {
    this.setState({ loadPlaceholder: true });
  };

  render() {
    if (this.state.loadPlaceholder) {
      const { width, height, placeholder } = this.props;
      const placeholderUrl = `https://dummyimage.com/${width}x${height}/d1cfd1/fff&text=${placeholder}`;
      return (
        <img
          style={this.props.style}
          className={this.props.className}
          src={placeholderUrl}
        />
      );
    }

    return (
      <img
        style={this.props.style}
        className={this.props.className}
        src={this.props.src}
        onError={this.handleError}
      />
    );
  }
};
