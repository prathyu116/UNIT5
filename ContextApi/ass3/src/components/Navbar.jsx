import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  // const {  isAuth } = useContext(AuthContext);

  return (
    <Nav>
      <Firstdiv>
        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QDbaZSBL-2A4k3LMZlX4TS-T7ARbepGn_w&usqp=CAU" alt="" srcset="" />
        <Status></Status>
      </Firstdiv>
      <SecondDiv>
        <Div>
          <i class="material-icons">signal_cellular_alt</i>
        </Div>
        <Div>
          <i class="material-icons">location_on</i>
        </Div>
        <Div>
          <i class="material-icons">business_center</i>
        </Div>
        <Div>
          <i class="material-icons">question_answer</i>
        </Div>
        <Div>
          <i class="material-icons">description</i>
        </Div>
        <Div>
          <i class="material-icons">settings</i>
        </Div>
      </SecondDiv>
      <Thirdiv>
        <i class="material-icons">add</i>
      </Thirdiv>
    </Nav>
  );
};

var Nav = styled.nav`
  width: 81px;
  background-color: #16191c;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
let Firstdiv = styled.div`
  position: relative;
  margin-top: 30px;
`;
let Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
let Status = styled.span`
  position: absolute;
  right: 0px;
  background: #29cb97;
  box-sizing: border-box;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 10px;
  height: 10px;
`;
let Thirdiv = styled.div`
  background: #29cb97;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
let SecondDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
let Div = styled.div`
  /* border: 1px solid green; */
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid;
  color: #afacac;
  padding: 20px 0px;
  &:nth-child(1) {
    background: linear-gradient(180deg, #679cf6 0%, #4072ee 100%);
    box-shadow: 0px 5px 15px rgba(7, 8, 8, 0.5);
    border-radius: 5px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 96px;
    color: white;
    border: none;
  }
`;
export default Navbar;
