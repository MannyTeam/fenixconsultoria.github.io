import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { CentralCard, GeneralStyled, IconStyled, ImageStyled, ProceduresList } from './generalPage.styles';
import {
    PROCEDURES_TITLE,
    PROCEDURES_BULLET1,
    PROCEDURES_BULLET2,
    PROCEDURES_BULLET3,
    PROCEDURES_BULLET4,
    PROCEDURES_BULLET5,
    PROCEDURES_BULLET6,
    PROCEDURES_BULLET7,
    PROCEDURES_BULLET8,
} from '../../constants/Constants';
//import icon from '../../assets/Foto_Urania.jpeg';
import icon from '../../assets/ASESORÍA_4.png';

export const Procedures = () => {
    return(
        <Container> 
            <GeneralStyled>
                <CentralCard>
                    <h1> Trámites </h1>
                    <p>{PROCEDURES_TITLE}</p>
                </CentralCard>
                <Row className='g-0'>
                    <Col md='3' >
                        <ImageStyled
                            src={icon}
                        />
                    </Col>
                    <Col md='8'>
                    <Card.Body style={{ padding: '0px', paddingTop: '10px' }}>
                        <Card.Text>
                            <ProceduresList>
                                <li>{PROCEDURES_BULLET1}</li>
                                <li>{PROCEDURES_BULLET2}</li>
                                <li>{PROCEDURES_BULLET3}</li>
                                <li>{PROCEDURES_BULLET4}</li>
                                <li>{PROCEDURES_BULLET5}</li>
                                <li>{PROCEDURES_BULLET6}</li>
                                <li>{PROCEDURES_BULLET7}</li>
                                <li>{PROCEDURES_BULLET8}</li>
                            </ProceduresList>
                        </Card.Text>
                    </Card.Body>
                    </Col>
                </Row>
            </GeneralStyled>
        </Container>
    );
}
