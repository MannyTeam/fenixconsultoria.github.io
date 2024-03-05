import { Container, Card, Row, Col, CardText  } from "react-bootstrap";
import FotoUrania from '../../assets/Foto_Urania.jpeg';
import { ButtonIconStyled, CardHeaderStyled, CardOwnerStyled, CardTitleStyled, ImageSyled } from "./aboutUs.styles";
import { URANIA_PROFILE, URANIA_PROFILE_EXPERIENCE } from "../../constants/Constants";
import { MDBIcon } from "mdb-react-ui-kit";

export const UraniaProfile = () => {
    return (
        <Container>
            <CardOwnerStyled>
                <CardHeaderStyled>Equipo</CardHeaderStyled>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={4}>
                                <ImageSyled
                                    src={FotoUrania}
                                />
                            </Col>
                            <Col xs={12} md={8}>
                                <CardTitleStyled>Urania Garduño Barahona</CardTitleStyled>
                                <Card.Text>
                                    {URANIA_PROFILE}
                                </Card.Text>
                                <Card.Text>
                                    {URANIA_PROFILE_EXPERIENCE}
                                </Card.Text>
                                <ButtonIconStyled 
                                        size="sm"
                                        floating
                                        className='text-white m-1'
                                        style={{
                                            maxWidth: '116.75px',
                                            maxHeight: '31.34px',
                                        }}
                                        href='https://www.facebook.com/fenixcons/' 
                                        target="_blank"
                                        rel="noreferrer"
                                        role='button'
                                    >
                                        <MDBIcon fab icon='facebook-f' /> Facebook
                                    </ButtonIconStyled>
                                    <ButtonIconStyled 
                                        size="sm"
                                        floating
                                        className='text-white m-1'
                                        style={{
                                            maxWidth: '110.22px',
                                            maxHeight: '31.33px',
                                        }}
                                        href='https://www.linkedin.com/in/urania-barahona-bb017212b/' 
                                        target="_blank"
                                        rel="noreferrer"
                                        role='button'
                                    >
                                        <MDBIcon fab icon='linkedin-in' /> Linkedin
                                    </ButtonIconStyled>
                            </Col>
                        </Row>
                    </Card.Body>
            </CardOwnerStyled>
        </Container>
    ) 
};