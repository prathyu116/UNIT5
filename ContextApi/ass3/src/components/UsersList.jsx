import React, { useState } from 'react'
import styled from "styled-components";
import DarkModeToggle from "react-dark-mode-toggle";
import EachUsers from './EachUsers';

const UsersList = () => {
   const [isDarkMode, setIsDarkMode] = useState(() => false);
   console.log(isDarkMode);
  return (
    <Div>
      <Dashboard>
        <h2>My Dashboard</h2>
        <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
      </Dashboard>
      <FirstDiv>
        <Divv>
          <ActiveUsers>
            <h3>Active Users</h3>
            <p>
              <span>for </span>Augaust 2019
              <i class="material-icons">arrow_drop_down</i>
            </p>
          </ActiveUsers>
        </Divv>
        <Divv>
          {/* <EachUsers /> */}
          <div className='each-users'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-QDbaZSBL-2A4k3LMZlX4TS-T7ARbepGn_w&usqp=CAU" alt="" />
            <div className="Name-Div">
              <p>Nrupul Dev</p>
              <p>Copenhagen,Denmark</p>
            </div>
            <div className="icon-dot">
              <i class="material-icons">more_horiz</i>
            </div>
          </div>
          <div></div>
          <div></div>
        </Divv>
        <Divv>2</Divv>
        <Divv>3</Divv>
      </FirstDiv>
    </Div>
  );
}
let Div=styled.div`
    margin-left: 45px;
`
let FirstDiv = styled.div`
  width: 452px;
  height: 514px;
  background: #292e33;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;
let Divv = styled.div`
  border: 1px solid wheat;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
let Dashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 42px;
    color: white;
  }
`;
let ActiveUsers = styled.div`
  color: red;
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3 {
    color: white;
    /* height: 24px;
    left: 10.62%;
    right: 81.6%; */
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: gray;
    margin: 0px 5px;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  }
`;
export default UsersList