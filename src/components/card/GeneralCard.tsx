import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GeneralCardStyled, IconStyled } from './card.styles';

type GeneralCardProps = {
    icon?: string;
    title?: string;
    text?: string; 
}

export const GeneralCard = ({icon, title, text}: GeneralCardProps) => {
    return(
        <Container> 
            <GeneralCardStyled>
                <Row className='g-0'>
                    <Col md='3'>
                    <IconStyled className={icon} aria-hidden="true"/>
                    </Col>
                    <Col >
                    <Card.Body style={{padding: 0, paddingTop: '10px'}}>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                    </Card.Body>
                    </Col>
                </Row>
            </GeneralCardStyled>
        </Container>
    )
};
