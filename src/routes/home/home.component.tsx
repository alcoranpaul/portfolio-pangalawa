import { Fragment, ReactElement } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HomeSelection from './home-selection/home_selection.component'
import './home.style.css'

function Home() : ReactElement {

    return  (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={5}>
                        <Row  className='home_selection'>
                            <HomeSelection/>
                        </Row>
                        <Row   className='home_description'>
                            <p>Built by faith. Driven by curiosity. Creating with code.</p>
                            <p>23 Work willingly at whatever you do, as though you were working for the Lord rather than for people.
                            Colossians 3:23</p>
                        </Row>
                    </Col>
                    <Col lg={7} >
                        <Row className='home_image_container'>
            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home