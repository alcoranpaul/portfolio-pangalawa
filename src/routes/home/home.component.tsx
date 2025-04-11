import { Fragment, ReactElement, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeSelection from './home-selection/home_selection.component';
import './home.style.css';

function Home() : ReactElement {
    const descriptions: string[] = [
        'Built by faith. Driven by curiosity. Creating with code.',
        'I build tools with intention and code with purpose — for something greater.',
        'I build reliable, efficient systems from front to back. Every solution is tailored, no shortcuts, just clean, purposeful code.',
        'Clean, efficient, and reliable. If it’s on your desktop, it’s meant to help you get things done without the noise.'
    ]

    const gifs_path: string[] = [
        'src\\assets\\goku vegeta.gif',
        'src\\assets\\banana.gif',
        'src\\assets\\killua.gif',
        'src\\assets\\obito.gif'
    ]

    const [selectedDesciption, setSelectedDescription] = useState<ReactElement>(<div>{descriptions[0]}</div>);
    const [selectedGif, setSelectedGif] = useState<ReactElement>(<img src={gifs_path[0]} alt="Gif"/>)

    const handleSelectionChange = (selectedIndex: number): void => {
        setSelectedDescription(
            <Fragment>
               {descriptions[selectedIndex]}
            </Fragment>
        )
        setSelectedGif(
            <Fragment>
                <img src={gifs_path[selectedIndex]} alt="Gif"/>
            </Fragment>
        )
    };

    return  (
        <Fragment>
            <Container>
                <Row>
                    <Col lg={5}>
                        <Row  className='home_selection'>
                            <HomeSelection onSelectionChange={handleSelectionChange}/>
                        </Row>
                        <Row  className='home_description'>
                            {selectedDesciption}
                                <div className='bible_verse'> 
                                    <p>23 Work willingly at whatever you do, as though you were working for the Lord rather than for people.
                                    </p>
                                    <p>- Colossians 3:23</p>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={7} >
                        <Row className='home_image_container'>
                            {selectedGif}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home