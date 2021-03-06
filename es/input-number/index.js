import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import UpOutlined from "@ant-design/icons/es/icons/UpOutlined";
import DownOutlined from "@ant-design/icons/es/icons/DownOutlined";
import { ConfigContext } from '../config-provider';
import SizeContext from '../config-provider/SizeContext';
import { cloneElement } from '../_util/reactNode';
var InputNumber = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(SizeContext);

  var className = props.className,
      customizeSize = props.size,
      customizePrefixCls = props.prefixCls,
      addonBefore = props.addonBefore,
      addonAfter = props.addonAfter,
      _props$bordered = props.bordered,
      bordered = _props$bordered === void 0 ? true : _props$bordered,
      readOnly = props.readOnly,
      others = __rest(props, ["className", "size", "prefixCls", "addonBefore", "addonAfter", "bordered", "readOnly"]);

  var prefixCls = getPrefixCls('input-number', customizePrefixCls);
  var upIcon = /*#__PURE__*/React.createElement(UpOutlined, {
    className: "".concat(prefixCls, "-handler-up-inner")
  });
  var downIcon = /*#__PURE__*/React.createElement(DownOutlined, {
    className: "".concat(prefixCls, "-handler-down-inner")
  });
  var mergeSize = customizeSize || size;
  var inputNumberClass = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-lg"), mergeSize === 'large'), _defineProperty(_classNames, "".concat(prefixCls, "-sm"), mergeSize === 'small'), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _defineProperty(_classNames, "".concat(prefixCls, "-readonly"), readOnly), _defineProperty(_classNames, "".concat(prefixCls, "-borderless"), !bordered), _classNames), className);
  var element = /*#__PURE__*/React.createElement(RcInputNumber, _extends({
    ref: ref,
    className: inputNumberClass,
    upHandler: upIcon,
    downHandler: downIcon,
    prefixCls: prefixCls,
    readOnly: readOnly
  }, others));

  if (addonBefore != null || addonAfter != null) {
    var _classNames3;

    var wrapperClassName = "".concat(prefixCls, "-group");
    var addonClassName = "".concat(wrapperClassName, "-addon");
    var addonBeforeNode = addonBefore ? /*#__PURE__*/React.createElement("div", {
      className: addonClassName
    }, addonBefore) : null;
    var addonAfterNode = addonAfter ? /*#__PURE__*/React.createElement("div", {
      className: addonClassName
    }, addonAfter) : null;
    var mergedWrapperClassName = classNames("".concat(prefixCls, "-wrapper"), wrapperClassName, _defineProperty({}, "".concat(wrapperClassName, "-rtl"), direction === 'rtl'));
    var mergedGroupClassName = classNames("".concat(prefixCls, "-group-wrapper"), (_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-sm"), size === 'small'), _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-lg"), size === 'large'), _defineProperty(_classNames3, "".concat(prefixCls, "-group-wrapper-rtl"), direction === 'rtl'), _classNames3), className);
    return /*#__PURE__*/React.createElement("div", {
      className: mergedGroupClassName,
      style: props.style
    }, /*#__PURE__*/React.createElement("div", {
      className: mergedWrapperClassName
    }, addonBeforeNode, cloneElement(element, {
      style: null
    }), addonAfterNode));
  }

  return element;
});
export default InputNumber;