import styled from "styled-components";

export const Section = styled.section`
display: flex;
align-items: center;
flex-direction: column;
background-color: #F2F4F1;
height: 600px;

h2 {
  font-size: 30px;
  color: #373737;
}

.details {
  width: 80px;
  height: 2px;
  background-color: #373737;
  margin-bottom: 2rem;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}
`