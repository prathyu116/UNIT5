import styled from "styled-components";

var Button = styled.button`
  /* color: ${(props) => (props.bg === "filled" ? "white" : props.linkBtn === true ? "blue" : "black")}; */
  color: ${(props) => {
    if (props.bg === "filled") {
      return "white";
    }
    if (props.linkBtn === true) {
      return "blue";
    }
  }};

  font-size: 1em;
  border: ${(props) => (props.dashedbtn === true ? "dashed" : props.defaultBtn ? "1px solid black" : "none")};
  margin: 2em;
  padding: 0.25em 2em;
  border-radius: 3px;
  background-color: ${(props) => (props.bg === "filled" ? "blue" : "white")};
`;
export default Button;
