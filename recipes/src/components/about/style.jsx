import styled from "styled-components";

export const Container = styled.section`
display: flex;
justify-content: space-between;
height: 500px;
width: 100%;
font-size: 0;

figure {
  background-color: blueviolet;
}

 img {
   width: 500px;
   height: 500px;
   margin-left: -50px;
}
`

export const Section = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4rem;
margin-bottom: 2rem;
color: #000;

h2 {
  font-size: 50px;
  color: #373737;
}

.details {
  width: 80px;
  height: 2px;
  background-color: #373737;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
  text-align: justify;
  width: 70%;
  color: #373737;
}
`