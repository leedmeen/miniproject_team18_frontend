import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {text, backgroundColor, color, fontSize, fontWeight, border, borderRadius, borderTLRadius, borderTRRadius, borderBLRadius, borderBRRadius, width, maxWidth, minWidth, height, maxHeight, minHeight, margin, padding, top, right, left, bottom, _onClick, } = props;
  const styles = {
    backgroundColor: backgroundColor,
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    border: border,
    borderRadius: borderRadius,
    borderTLRadius: borderTLRadius,
    borderTRRadius: borderTRRadius,
    borderBLRadius: borderBLRadius,
    borderBRRadius: borderBRRadius,
    width: width,
    maxWidth: maxWidth,
    minWidth: minWidth,
    height: height,
    maxHeight: maxHeight,
    minHeight: minHeight,
    margin: margin,
    padding: padding,
    top: top,
    right: right,
    left: left,
    bottom: bottom,
    _onClick: () => {},
  }

  return (
    <React.Fragment>
      <Btn {...styles} onClick={_onClick}>{text}</Btn>
    </React.Fragment>
  )
};

Button.defaultProps = {
  text: '버튼',
  backgroundColor: null,
  color: null,
  fontSize: null,
  fontWeight: null,
  border: 'none',
  borderRadius: null,
  borderTLRadius: null,     // borderTopLeftRadius
  borderTRRadius: null,     // borderTopRightRadius
  borderBLRadius: null,     // borderBottomLeftRadius
  borderBRRadius: null,     // borderBottomRightRadius
  width: null,
  maxWidth: null,
  minWidth: null,
  height: null,
  maxHeight: null,
  minHeight: null,
  margin: null,
  padding: null,
  top: null,
  right: null,
  left: null,
  bottom: null,
  _onClick: ()  => {},
}

const Btn = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  border-top-left-radius: ${(props) => props.borderTLRadius};
  border-top-right-radius: ${(props) => props.borderTRRadius};
  border-bottom-left-radius: ${(props) => props.borderBLRadius};
  border-bottom-right-radius: ${(props) => props.borderBRRadius};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxHeight};
  min-height: ${(props) => props.minHeight};
  margin: ${(props) => props.margin}; 
  padding: ${(props) => props.padding};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  bottom: ${(props) => props.bottom};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;