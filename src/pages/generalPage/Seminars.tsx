import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { GeneralStyled, ImageStyledProjects } from "./generalPage.styles";
import { TRAINING } from "../../constants/Constants";
import icon1 from '../../assets/APRENDIZAJE_3.png';

export const Seminars = () => {
    return (
        <Container> 
            <GeneralStyled>
            <Row>
                <Col md='4'>
                    <ImageStyledProjects
                            src={icon1}
                            style={{height: '250px', width: '250px', marginBottom: '30px', marginTop: '50px', marginLeft: '70px'}}
                        />
                </Col>
                <Col md='8'>
                    <Card.Body>
                        <Card.Text style={{margin:'60px 30px 10px 10px', fontSize:'18px'}}>
                            <strong>
                                {TRAINING}
                            </strong>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            </GeneralStyled>
        </Container>
        )
};