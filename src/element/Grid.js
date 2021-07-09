import React from "react";
import styled from "styled-components";

const Grid = (props) => {
    const { is_center,
            width, 
            height,
            margin, 
            padding, 
            bg, 
            children, 
            center, 
            line, 
            _onClick,
            margin_top,
            position,
            bottom,
            fd,
            mh,
            dp,
            is_right} = props;

  const styles = {
      is_center: is_center,
      width: width,
      height: height,
      margin: margin,
      padding: padding,
      bg: bg,
      center: center,
      line: line,
      is_right: is_right,
      margin_top: margin_top,
      postion: position,
      bottom: bottom,
      fd: fd,
      mh: mh,
      dp: dp,
  };

    return (<React.Fragment>
            <GridBox 
            {...styles}
            onClick={_onClick}>
                {children}
            </GridBox>
            </React.Fragment>)
}

Grid.defaultProps = {
    children: null,
    is_center: false,
    width: "100%",
    padding: false,
    margin: false,
    margin_top: false,
    bg: false,
    center: false,
    is_right: false,
    is_left: false,
    position: false,
    bottom: false,
    mh: false,
    dp: false,
    _onClick: () => {},
}
const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: calc(${(props) => props.mh});
  box-sizing: border-box;
  display: ${(props) => props.dp};
  bottom: ${(props) => props.bottom};
  flex-direction: ${(props) => props.fd};
  left: ${(props) => props.bottom};
  right: ${(props) => props.bottom};
  position: ${(props) => props.position};
  margin-top: ${(props) => props.margin_top};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_center
      ? `display: block; text-align: center; align-items: center; justify-content:space-between`
      : ""}
    ${(props) =>
    props.is_left
        ? `display: block; align-items: center; text-align: left;`
        : ""}
  ${(props) =>
    props.is_right
      ? `display: block; align-items: center; text-align: right;`
      : ""}
  ${(props) => props.center ? `text-align: center;`: ""}
  ${(props) => props.line ? `border-bottom: ${props.line};` : ""}
`;

export default Grid;