import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  background-color: #dfe4de;

  h2 {
    font-size: 30px;
    color: #373737;
  }

  p {
    font-size: 18px;
    color: #373737;
    margin-top: 0px;
  }

  input {
    width: 500px;
    height: 60px;
    background: #eff1ee 0% 0% no-repeat padding-box;
    border: none;
    opacity: 1;
    margin-bottom: 2rem;
    outline: none;
    padding: 8px;
  }

  button {
    width: 120px;
    height: 40px;
    text-align: center;
    font: normal normal 600 24px/32px Hurme Geometric Sans 1;
    letter-spacing: 1.14px;
    color: #373737;
    opacity: 1;
    cursor: pointer;
  }
`;
