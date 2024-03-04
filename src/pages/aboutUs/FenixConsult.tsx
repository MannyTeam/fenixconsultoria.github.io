import { Container, Row, Col  } from "react-bootstrap";
import { CardStyled, IframeStyled, CardTitleStyled } from "./aboutUs.styles";
import { MAIN_DESCRIPTION_1, MAIN_DESCRIPTION_2 } from "../../constants/Constants";

export const FenixConsult = () => {
    return (
        <Container>
            <CardStyled>
                <CardTitleStyled><h1>¿Qui&eacute;nes somos?</h1></CardTitleStyled>
                <Row>
                    <Col md={6}>
                        <p>
                            {MAIN_DESCRIPTION_1}
                        </p>
                        <p>
                            {MAIN_DESCRIPTION_2}
                        </p>
                    </Col>
                    <Col md={6}>
                        <IframeStyled 
                            src="https://www.youtube.com/embed/kznYaFhrhus?si=BdpABx8mTgicg_bT" 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </IframeStyled>
                    </Col>
                </Row>
            </CardStyled>
        </Container>
    )
};