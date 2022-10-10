import React from 'react'
import { Container } from './style';

const Subscribe = () => {
  return (
    <Container>
      <h2>SUBSCRIBE</h2>
      <p>Sign up for newsletter</p>
      <input type="email" placeholder='Your e-mail'/>
      <button>Submit</button>
    </Container>
  )
}

export default Subscribe;