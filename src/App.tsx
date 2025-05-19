import { ReactElement, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";

import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import ActivityBar from "./activity_bar/activity_bar.component";
import Footer from "./footer/footer.component";
import Header from "./header/header.component";
import Home from "./routes/home/home.component";
import Projects from "./routes/projects/projects.component";
import Sidebar from "./routes/sidebar/sidebar.component";

import "./App.css";
import About from "./routes/about/about.component";
import ProjectDetails from "./routes/projects/projects-details/project_details.component";
import Work from "./routes/work/work.component";
import WorkDetail from "./routes/work/work_details/work_details.component";

function Layout(): ReactElement {
    const [showSideBar, setShowSideBar] = useState(true);

    const toggleSidebar = () => setShowSideBar(!showSideBar);

    return (
        <Container fluid>
            <Row className="layout_base layout_header">
                <Header />
            </Row>

            <Row className="flex-grow-1 layout_content">
                <Col className="activity_bar p-0" xs="auto">
                    <ActivityBar onActivityBarClick={toggleSidebar} />
                </Col>
                {showSideBar && (
                    <Col className="sidebar px-0" xs="auto">
                        <Sidebar />
                    </Col>
                )}
                <Col className="main">
                    <Stack>
                        <div className="tab_section"></div>
                        <div className="main_section">
                            <div className="source_pagnation">{"src > App.tsx"}</div>
                            <div className="main_content">
                                <Outlet />
                            </div>
                        </div>
                    </Stack>
                </Col>
            </Row>

            <Row className="layout_base layout_footer">
                <Footer />
            </Row>
        </Container>
    );
}

function App(): ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} /> {/* Default route */}
                <Route path="projects" element={<Projects />} />
                <Route path="projects/:name" element={<ProjectDetails />} />
                <Route path="work" element={<Work />} />
                <Route path="work/:title" element={<WorkDetail />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    );
}

export default App;
