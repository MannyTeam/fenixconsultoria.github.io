import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { GeneralStyled, ImageStyledProjects } from './generalPage.styles';
import icon1 from '../../assets/ACOMPANIAMIENTO_4A.png';
import { 
    ANALYTICS_SERVICES, 
    ANALYTICS_BULLET1,
    ANALYTICS_BULLET2,
    ANALYTICS_BULLET3,
    ANALYTICS_BULLET4,
    ANALYTICS_BULLET5,
    ANALYTICS_BULLET6,
    ANALYTICS_BULLET7
} from '../../constants/Constants';

export const Analytics = () => {
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
                                    {ANALYTICS_SERVICES}
                                </strong>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <Card.Body>
                            <Card.Text>
                                <strong>1).-</strong>
                                {ANALYTICS_BULLET1}
                            </Card.Text>
                            <Card.Text>
                                <strong>2).-</strong>
                                {ANALYTICS_BULLET2}
                            </Card.Text>
                            <Card.Text>
                                <strong>3).-</strong>
                                {ANALYTICS_BULLET3}
                            </Card.Text>
                            <Card.Text>
                                <strong>4).-</strong>
                                {ANALYTICS_BULLET4}
                            </Card.Text>
                            <Card.Text>
                                <strong>5).-</strong>
                                {ANALYTICS_BULLET5}
                            </Card.Text>
                            <Card.Text>
                                <strong>6).-</strong>
                                {ANALYTICS_BULLET6}
                            </Card.Text>
                            <Card.Text>
                                <strong>7).-</strong>
                                {ANALYTICS_BULLET7}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </GeneralStyled>
        </Container>
    )
}