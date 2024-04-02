import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { GeneralStyled, ImageStyledProjects, ProceduresList } from './generalPage.styles';
import { CLINIC_BULLET1, CLINIC_BULLET2, CLINIC_BULLET3, CLINIC_SERVICES, CLINIC_SUBBULLET1, CLINIC_SUBBULLET2 } from '../../constants/Constants';
import icon1 from '../../assets/IND_FARMACEUTICA_Y_DISPO_MEDICOS_4.png';
import icon2 from '../../assets/APRENDIZAJE_2A.png';

export const Clinic = () => {
    return(
        <Container>
             <GeneralStyled>
                <Row>
                    <Col md='4'>
                        <ImageStyledProjects
                                src={icon1}
                                style={{height: '250px', width: '250px', marginBottom: '30px', marginTop: '50px'}}
                            />
                    </Col>
                    <Col md='8'>
                        <Card.Body>
                            <Card.Text style={{margin:'60px 30px 10px 10px', fontSize:'18px'}}>
                                <strong>
                                    {CLINIC_SERVICES}
                                </strong>
                            </Card.Text>
                            <Card.Text>
                                <strong>1).-</strong>
                                    {CLINIC_SUBBULLET1}
                            </Card.Text>
                            <Card.Text>
                                <strong>2).-</strong>
                                    {CLINIC_SUBBULLET2}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Row>
                <Col md='8'>
                        <Card.Body>
                            <Card.Text>
                                <ProceduresList>
                                   <li>{CLINIC_BULLET1}</li>
                                   <li>{CLINIC_BULLET2}</li>
                                   <li>{CLINIC_BULLET3}</li>
                                </ProceduresList>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col md='4'>
                        <ImageStyledProjects
                                src={icon2}
                                style={{height: '250px', width: '250px', marginBottom: '30px', marginTop: '20px'}}
                            />
                    </Col>
                </Row>
                </GeneralStyled> 
        </Container>
    )
}