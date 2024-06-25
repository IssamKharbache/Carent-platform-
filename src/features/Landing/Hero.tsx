import { Container } from '@mantine/core'
import React from 'react'
import Slider from './Slider'
import classes from './style.module.css';
const Hero = () => {
  return (
    <div>
        <Container fluid pb="4rem" className={classes.hero}>
            <Slider />
        </Container>
    </div>
  )
}

export default Hero