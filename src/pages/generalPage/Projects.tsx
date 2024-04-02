import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { PROJECTS_TEXT1, PROJECTS_BULLET1, PROJECTS_BULLET2, PROJECTS_BULLET3, PROJECTS_BULLET4, PROJECTS_BULLET5 } from "../../constants/Constants";
import { GeneralStyled, ImageStyledProjects } from "./generalPage.styles";
import icon1 from '../../assets/ANÁLISIS_DOCS_2A.png';
import icon2 from '../../assets/MODELO_DE_NEGOCIO_4A.png';


export const Projects = () => {
    return (
        <Container> 
            <GeneralStyled>
                <Row>
                    <Col md='4'>
                        <ImageStyledProjects
                                src={icon1}
                                style={{height: '200px', width: '200px', marginBottom: '10px', marginLeft: '70px'}}
                            />
                    </Col>
                    <Col md='8'>
                        <Card.Body>
                            <Card.Text style={{margin:'60px 30px 10px 10px', fontSize:'18px'}}>
                                <strong>
                                    {PROJECTS_TEXT1}
                                </strong>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <ImageStyledProjects
                            src={icon2}
                            style={{marginTop: '80px', marginLeft: '40px'}}
                        />
                    </Col>
                    <Col md='8'>
                    <Card.Body style={{ padding: '0px', paddingLeft: '10px', marginTop: '80px'}}>
                        <Card.Text>
                            <strong>1).-</strong>
                            {PROJECTS_BULLET1}
                        </Card.Text>
                        <Card.Text>
                        <strong>2).-</strong>
                            {PROJECTS_BULLET2}
                        </Card.Text>
                        <Card.Text>
                        <strong>3).-</strong>
                            {PROJECTS_BULLET3}
                        </Card.Text>
                        <Card.Text>
                        <strong>4).-</strong>
                            {PROJECTS_BULLET4}
                        </Card.Text>
                        <Card.Text>
                        <strong>5).-</strong>
                            {PROJECTS_BULLET5}
                        </Card.Text>
                    </Card.Body>
                    </Col>
                </Row>
            </GeneralStyled>
        </Container>
        )
};