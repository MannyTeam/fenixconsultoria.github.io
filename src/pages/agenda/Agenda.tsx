import { Col, Container, Row } from "react-bootstrap"
import { CardUploadImg, SectionTitle } from "./agenda.styles"
import { DropImg } from "../../components/dropImg/DropImg"
import canvasImg from "../../../src/assets/imageCanvas.jpg" 


export const Agenda = () => {
    return (
        <Container style={{ marginTop: '50px' }}>
            <SectionTitle>
                <h2>Agenda</h2>
                <h4>
                ¡Sigue nuestros próximos eventos!
                </h4>
            </SectionTitle>
            <Row>
                <CardUploadImg src={canvasImg}/>
            </Row>  
    </Container>
    )
}