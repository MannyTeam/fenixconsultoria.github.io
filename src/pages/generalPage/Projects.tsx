import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GeneralCard } from "../../components/card/GeneralCard";
import { TEXT, projects_Text1, projects_bullet1, projects_bullet2, projects_bullet3, projects_bullet4, projects_bullet5 } from "../../constants/Constants";
import { GeneralStyled, IconStyled } from "./generalPage.styles";


export const Projects = () => {
    return (
        <Container> 
            <GeneralStyled>
                <Row>
                    <GeneralCard
                        icon='fa fa-book'
                        title='Proyectos' 
                        text={projects_Text1}
                    />
                </Row>
                <Row>
                    <Col >
                    <IconStyled className="fa fa-archive" aria-hidden="true"/>
                    </Col>
                    <Col md='8'>
                    <Card.Body style={{ padding: '0px', paddingTop: '10px' }}>
                        <Card.Text>
                            <strong>1).-</strong>
                            {projects_bullet1}
                        </Card.Text>
                        <Card.Text>
                        <strong>2).-</strong>
                            {projects_bullet2}
                        </Card.Text>
                        <Card.Text>
                        <strong>3).-</strong>
                            {projects_bullet3}
                        </Card.Text>
                        <Card.Text>
                        <strong>4).-</strong>
                            {projects_bullet4}
                        </Card.Text>
                        <Card.Text>
                        <strong>5).-</strong>
                            {projects_bullet5}
                        </Card.Text>
                    </Card.Body>
                    </Col>
                </Row>
            </GeneralStyled>
        </Container>
        )
};