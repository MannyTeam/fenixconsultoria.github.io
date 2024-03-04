import { Col, Container, Row } from "react-bootstrap";
import {
  DataIcons,
  InformationContect,
  PersonalDataContact,
  ResponsiveIframe,
  ResponsiveMapWrapper,
  StyledButton,
} from "./contact.styles";
import { Form } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";

export const Contact = () => {

    return (
        <Container>
            <Row>
                <Col>
                <ResponsiveMapWrapper>
                <ResponsiveIframe 
                    title="Address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.81771491778!2d-103.34874642475295!3d20.676993780885745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b1e64147f2b9%3A0x1df2b488a43cad26!2sCentro%20Hist%C3%B3rico%20de%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1702513289306!5m2!1ses-419!2smx"
                    allowFullScreen
                >

                </ResponsiveIframe>
                </ResponsiveMapWrapper>
                </Col>
            </Row>
            <Row>
                <Col lg="5">
                    <DataIcons>
                      <MDBIcon
                          fas icon="map-marker-alt"
                          size="2x"
                        />
                    <div style={{ marginTop: '10px' }} >
                      <h4>Ubicación:</h4>
                      <p>Guadalajara, Jal.</p>
                    </div>
                    </DataIcons>
                    <DataIcons>
                    <MDBIcon
                          fas icon="envelope"
                          size="2x"
                        />
                     <div style={{ marginTop: '10px' }} >
                      <h4>Email:</h4>
                      <p>info@fenixconsultoria.com.mx</p>
                    </div>
                    </DataIcons>
                    <DataIcons>
                    <MDBIcon fas icon="mobile-alt" size="2x"/>
                    <div style={{ marginTop: '10px' }}>
                      <h4>Telefono:</h4>
                      <p>(33) 2734-5701</p>
                    </div>
                    </DataIcons>
                </Col>
                <Col lg="7">
                  <PersonalDataContact>
                    <Form.Control 
                      type="text"
                      placeholder="Tu Nombre"
                    />
                    <Form.Control 
                      type="email"
                      placeholder="Tu Correo"
                    />
                  </PersonalDataContact>
                  <InformationContect>
                  <Form.Control 
                      type="text"
                      placeholder="Tema a tratar"
                    />
                  <Form.Control 
                      as="textarea"
                      rows={4}
                      placeholder="Mensaje"
                      style={{ resize: 'none' }}
                    />
                  </InformationContect>
                  <div className="text-center">
                    <StyledButton >
                      Enviar Mensaje
                    </StyledButton>
                  </div>
                </Col>
            </Row>
        </Container>
    )
};