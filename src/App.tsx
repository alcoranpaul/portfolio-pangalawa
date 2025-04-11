import { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component';
import Sidebar from './routes/sidebar/sidebar.component';

import './App.css';

function App() : ReactElement {


  return (
    <Container fluid>
      <Row>
        <Col xs={3} lg={2} className="px-3  text-white bg-dark sidebar" >
          <Sidebar />
        </Col>
        <Col xs={9} lg={10} className="px-5 py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<p>Projects</p>} />
            <Route path="/work" element={<p>Work</p>} />
            
          </Routes>
        </Col>
      </Row>
    </Container>
  )
}

export default App
