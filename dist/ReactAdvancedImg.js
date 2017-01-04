'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactAdvancedImg = function (_Component) {
  _inherits(ReactAdvancedImg, _Component);

  function ReactAdvancedImg(props) {
    _classCallCheck(this, ReactAdvancedImg);

    var _this = _possibleConstructorReturn(this, (ReactAdvancedImg.__proto__ || Object.getPrototypeOf(ReactAdvancedImg)).call(this, props));

    _this.handleError = function () {
      _this.setState({ loadPlaceholder: true });
    };

    _this.state = {
      loadPlaceholder: false
    };
    return _this;
  }

  _createClass(ReactAdvancedImg, [{
    key: 'render',
    value: function render() {
      if (this.state.loadPlaceholder) {
        var _props = this.props,
            width = _props.width,
            height = _props.height,
            placeholder = _props.placeholder;

        var placeholderUrl = 'https://dummyimage.com/' + width + 'x' + height + '/d1cfd1/fff&text=' + placeholder;
        return _react2.default.createElement('img', {
          style: this.props.style,
          className: this.props.className,
          src: placeholderUrl
        });
      }

      return _react2.default.createElement('img', {
        style: this.props.style,
        className: this.props.className,
        src: this.props.src,
        onError: this.handleError
      });
    }
  }]);

  return ReactAdvancedImg;
}(_react.Component);

ReactAdvancedImg.propTypes = {
  src: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  width: _react.PropTypes.number,
  height: _react.PropTypes.number
};
ReactAdvancedImg.defaultProps = {
  style: {},
  className: '',
  placeholder: 'placeholder',
  width: 500,
  height: 500
};
exports.default = ReactAdvancedImg;
;