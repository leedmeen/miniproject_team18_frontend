import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  const {type, placeholder, color, fontSize, border, borderRadius, width, height, margin, padding, top, left, cols, rows, _ref} = props;
  const styles = {
    border: border,
    borderRadius: borderRadius,
    color: color,
    fontSize: fontSize,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    top: top,
    left: left,
    cols: cols,
    rows: rows,
    _ref: _ref,
  }

  return(
    <React.Fragment>
      <Ipt {...styles} cols={type === 'textarea'? rows : ''} rows={type === 'textarea'? rows : ''} type={type} placeholder={placeholder} ref={_ref}></Ipt>
    </React.Fragment>
  )
};

Input.defaultProps = {
  type: 'text',
  placeholder: null,
  color: null,
  fontSize: null,
  border: null,
  borderRadius: null,
  width: null,
  height: null,
  margin: null,
  padding: null,
  top: null,
  left: null,
  _ref: null,
}

const Ipt = styled.input`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  outline: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export default Input;