import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
width: 250px;
border-radius: 4px;
font-size: 0;
background-color: #fff;
box-shadow: 0px 7px 6px #00000029;
opacity: 1;

figure img {
  width: 250px;
  height: 200px;
}

span {
  width: 30px;
  height: 2px;
  background-color: #373737;
  margin-top: 80px;
}

p {
  display: inline-block;
  font-size: 20px;
}
`