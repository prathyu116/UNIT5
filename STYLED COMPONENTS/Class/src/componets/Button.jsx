// import "./Btn.css";
import styled from "styled-components";

// const Button = ({children}) => {
//   return (
//     <div>
//       <button className="btn">{children}</button>
//     </div>
//   );
// };
const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color:${(props)=>(props.theme==="light" ? "green" :"blue")};
  color: yellow;
  padding: 10px;
  margin: 10px;
  

  &:hover {
    font-size: large;
  }
`;

export { Button };
