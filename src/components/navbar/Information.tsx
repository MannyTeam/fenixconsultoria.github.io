import { Col } from "react-bootstrap";
import { DataContainer, InformationRow, SocialMediaContainer } from "./navBar.styles";
import { MDBIcon } from "mdb-react-ui-kit";

export const Information = () => {
    return (
        <InformationRow style={{marginTop: '20px'}}>
            <Col xs={12} md={8}>
            <DataContainer>
                <MDBIcon fas icon="envelope" />
                <a href="mailto:info@fenixconsultoria.com.mx">
                    info@fenixconsultoria.com.mx
                </a>
                <MDBIcon fas icon="mobile-alt" />
                (33) 2734-5701
                <MDBIcon fab icon="whatsapp" />
                (33) 1174-1245
            </DataContainer>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
                <SocialMediaContainer>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.facebook.com/fenixcons/"
                    >
                        <MDBIcon fab icon="facebook" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/urania-barahona-bb017212b/"
                    >
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://wa.me/523311741245"
                    >
                        <MDBIcon fab icon="whatsapp" />
                    </a>
                </SocialMediaContainer>
            </Col>
        </InformationRow>
    )
};