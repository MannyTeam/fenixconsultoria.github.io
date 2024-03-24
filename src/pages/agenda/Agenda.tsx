import * as React from 'react';
import { 
    Col,
    Container,
    Row,
} from "react-bootstrap"
import {
    CardEventImg,
    SectionTitleStyled,
    CardImgStyled,
} from "./agenda.styles"
import course1 from '../../assets/course1.png';
import course2 from '../../assets/course2.png';
import course3 from '../../assets/course3.png';
import course4 from '../../assets/course4.png';
import { StyledButton } from "../contact/contact.styles";
import { ModalImg } from "../../components/modal/ImageModal";


export const Agenda = () => {
    const [showModal, setShowMOdal] = React.useState(false);
    const [currentImg, setCurrentImg] = React.useState('');

    const handleClose = () => setShowMOdal(false);
    const handleShow = (srcImg: string) => {
        setCurrentImg(srcImg);
        setShowMOdal(true);
    };

    return (
        <Container style={{ marginTop: '50px' }}>
            <ModalImg onClose={handleClose} close={showModal} img={currentImg}/>
            <SectionTitleStyled>
                <h2>Agenda</h2>
                <h4>
                ¡Sigue nuestros próximos eventos!
                </h4>
            </SectionTitleStyled>
            <Row>
                <Col lg="6" className="mb-6">
                  <CardEventImg>
                    <CardImgStyled
                        variant="top"
                        src={course1}
                    />
                    <div className="text-center mt-3 mb-3">
                        <StyledButton
                            onClick={() => handleShow(course1)}
                        >
                        Abrir Imagen
                        </StyledButton>
                    </div>
                  </CardEventImg>
                </Col>
                <Col lg="6">
                    <CardEventImg>
                        <CardImgStyled
                            variant="top"
                            src={course2}
                        />
                        <div className="text-center mt-3 mb-3">
                          <StyledButton
                            onClick={() => handleShow(course2)}
                          >
                            Abrir Imagen
                          </StyledButton>
                        </div>
                    </CardEventImg>
                </Col>
                <Col lg="6">
                    <CardEventImg>
                    <CardImgStyled
                        variant="top"
                        src={course3}
                    />
                    <div className="text-center mt-3 mb-3">
                        <StyledButton
                            onClick={() => handleShow(course3)}
                        >
                        Abrir Imagen
                        </StyledButton>
                    </div>
                  </CardEventImg>
                </Col>
                <Col lg="6">
                    <CardEventImg>
                    <CardImgStyled
                        variant="top"
                        src={course4}
                    />
                    <div className="text-center mt-3 mb-3">
                        <StyledButton
                            onClick={() => handleShow(course4)}
                        >
                        Abrir Imagen
                        </StyledButton>
                    </div>
                  </CardEventImg>
                </Col>
            </Row>  
    </Container>
    )
}