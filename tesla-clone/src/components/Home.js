import React from 'react'
import styled from 'styled-components'
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section 
      title="Model S"
      description="Leasing start at $349/mo"
      backgroundImg="model-s.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Demo Drive"/>
      <Section
      title="Model Y"
      description="Leasing start at $349/mo"
      backgroundImg="model-y.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Demo Drive"
      />
      <Section
      title="Model 3"
      description="Leasing start at $349/mo"
      backgroundImg="model-3.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Demo Drive"
      />
      <Section
      title="Model X"
      description="Leasing start at $349/mo"
      backgroundImg="model-x.jpg"
      leftBtnText="Custom Order"
      rightBtnText="Demo Drive"
      />

      <Section
      title="Solar Panels"
      description="Lowest Cost Solar Panels in America"
      backgroundImg="solar-panel.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />

      <Section
      title="Solar Roof"
      description="Produce Clean Energy From Your Roof"
      backgroundImg="solar-roof.jpg"
      leftBtnText="Order Now"
      rightBtnText="Learn More"
      />

      <Section
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Shop Now"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height : 100vh;
z-index:10;
`
