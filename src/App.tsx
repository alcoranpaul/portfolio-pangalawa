import { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Sidebar from './routes/sidebar/sidebar.component';

function Layout(): ReactElement {
  return (
    <Container fluid>
      <Row className='layout_base layout_header'>header</Row>
      <Row className='flex-grow-1 layout_content'>
        <Col  className="activity_bar" xs="auto">asd
        </Col>
        <Col className="sidebar"xs="auto" >
          <Sidebar />
        </Col>
        <Col  className="main" >
          <Outlet /> {/* Renders child routes */}
        </Col>
      </Row>
      <Row className='layout_base layout_footer'>footer</Row>
    </Container>
  );
}

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path="projects" element={<Projects/>} />
        <Route path="work" element={<p>Work</p>} />
        <Route path="skills" element={<p>Skills</p>} />
        <Route path="education" element={<p>Education</p>} />
        <Route path="contact" element={<p>Contact</p>} />
        <Route path="about" element={<p>About</p>} />
      </Route>
    </Routes>
  );
}

export default App;