import React from 'react'
import { Container } from './style';

const Card = ({image, alt, text}) => {
  return (
    <>
    <Container>
      <figure>
        <img src={image} alt={alt} />
      </figure>
      <span></span>
      <p>{text}</p>
    </Container>
    </>
  )
}

export default Card;