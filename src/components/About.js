import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import dev from '../images/dev.png';

const About = () => {
    return(
        <Container fluid style={{height: "75vh"}} id="about">
            <h1 style={{width: "100%", textAlign: "center", margin: "20px 0"}}>About me</h1>
            <Row style={{justifyContent: "center", alignItems: "center", height: "80%"}}>
                <Col sm={6} md={5} lg={{span: 4, offset: 1}}>
                    <img 
                        src={dev} 
                        alt="Software Developer" 
                        style={{
                            width: "100%", 
                            boxShadow: "2px 2px 5px #001",
                            borderRadius: "20px"
                        }}
                    />
                </Col>
                <Col sm={9} md={10} lg={{ span: 5, offset: 1}}>
                    <h1>Hi! I am Srijan Srivastava</h1>
                    <h4 style={{fontWeight: "300"}}>
                        I am a student at The Hong Kong Polytechnic Uuniversity, studying Computer science.
                        I love to code and study mathemtics in my spare time. When I am not doing either of it,
                        I'll probably play games or watch anime.
                    </h4>
                </Col>
            </Row>
        </Container>
    );
};

export default About;