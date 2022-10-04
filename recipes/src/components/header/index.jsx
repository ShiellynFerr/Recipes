import React from 'react'
import { Header, Section } from './style';

const Home = () => {
  return (
    <Section>
      <Header>
        <figure>
          <img src="./images/RC.svg" alt="logo" />
        </figure>
        <nav>
          <ul>
            <li>About</li>
            <li>Recipes</li>
            <li>Subscribe</li>
          </ul>
        </nav>
      </Header>
      <h2>Recipes</h2>
    </Section>
  )
}

export default Home;