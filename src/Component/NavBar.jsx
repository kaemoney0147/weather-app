import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap'

export default function Home() {
  return (
    <Navbar className='navbar'>
    <Container>
      <Navbar.Brand href="#home">Weather</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}
