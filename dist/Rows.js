"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {Object} props
 * @param {Object} props.data
 * @returns {React.ReactElement}
 */
function Rows(_ref) {
  let {
    data
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, data === null || data === void 0 ? void 0 : data.map((obj, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: index,
    id: `row-${index}`
  }, Object.entries(obj).map((el, index) => /*#__PURE__*/_react.default.createElement("td", {
    key: index,
    "data-label": el[0]
  }, el[1])))));
}

var _default = Rows;
exports.default = _default;
Rows.propType = {
  data: _propTypes.default.object.isRequired
};