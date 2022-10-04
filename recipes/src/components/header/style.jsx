import styled from 'styled-components';

export const Section = styled.section`
height: 900px;
width: 100%;
background-image: url('./images/fundo.png');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
 
 h2 {
  text-transform: uppercase;
  margin-top: 200px;
  text-align: center;
  font-size: 80px;
  letter-spacing: 15.75px;
  color: #373737;
  opacity: 1;
 }
`

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;

nav ul{
  display: flex;
  list-style: none;
  padding: 2rem;
  gap: 5rem;
}

nav ul li {
  font-size: 25px;
  color: #707070;
  cursor: pointer;
  width: 130px;
  text-align: center;
  padding: 1rem;
}

nav ul li:hover{
  border: 3px solid #373737;
}
`

