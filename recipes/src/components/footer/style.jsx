import styled from "styled-components";

export const Container = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
padding: 1rem;
height: 200px;
/* background-color: #bd9c19; */

.pre-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .box-icons {
    display: flex;
    gap: 10px;
    > svg { 
      color: #373737;
    }
  }
}

.footer-nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.footer-nav ul li {
  font-size: 22px;
  color: #373737;
  cursor: pointer;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #446061;
  margin-top: 55px;
  width: 100%;
  padding: 2px;

  p{
    font-size: 16px;
  }
}
`