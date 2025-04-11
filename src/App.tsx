import { ReactElement } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home.component';
import Sidebar from './routes/sidebar/sidebar.component';

function Layout(): ReactElement {
  return (
    <Container fluid>
      <Row>
        <Col xs={3} lg={2} className="px-2 sidebar">
          <Sidebar />
        </Col>
        <Col xs={9} lg={10} className="px-5 py-5 main">
          <Outlet /> {/* Renders child routes */}
        </Col>
      </Row>
    </Container>
  );
}

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* Default route */}
        <Route path="projects" element={<p>Projects</p>} />
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