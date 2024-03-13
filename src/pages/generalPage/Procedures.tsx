import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { CentralCard, GeneralStyled, IconStyled, ProceduresList } from './generalPage.styles';
import {
    procedures_title,
    procedures_bullet1,
    procedures_bullet2,
    procedures_bullet3,
    procedures_bullet4,
    procedures_bullet5,
    procedures_bullet6,
    procedures_bullet7,
    procedures_bullet8,
} from '../../constants/Constants';

export const Procedures = () => {
    return(
        <Container> 
            <GeneralStyled>
                <CentralCard>
                    <h1> Trámites </h1>
                    <p>{procedures_title}</p>
                </CentralCard>
                <Row className='g-0'>
                    <Col md='3' >
                        <IconStyled  className="fa fa-book" aria-hidden="true"/>
                    </Col>
                    <Col md='8'>
                    <Card.Body style={{ padding: '0px', paddingTop: '10px' }}>
                        <Card.Text>
                            <ProceduresList>
                                <li>{procedures_bullet1}</li>
                                <li>{procedures_bullet2}</li>
                                <li>{procedures_bullet3}</li>
                                <li>{procedures_bullet4}</li>
                                <li>{procedures_bullet5}</li>
                                <li>{procedures_bullet6}</li>
                                <li>{procedures_bullet7}</li>
                                <li>{procedures_bullet8}</li>
                            </ProceduresList>
                        </Card.Text>
                    </Card.Body>
                    </Col>
                </Row>
            </GeneralStyled>
        </Container>
    );
}
